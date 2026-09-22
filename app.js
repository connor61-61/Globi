/**
 * WORLD EXPLORER — beta
 * app.js wires COUNTRIES (from data.js) up to the page. No build step,
 * no framework — plain DOM so it drops straight into any static host
 * (GitHub Pages, Netlify, a plain S3 bucket, etc).
 */

const RATING_LABELS = {
  overall: "Overall appeal",
  naturalBeauty: "Natural beauty",
  culture: "Culture",
  food: "Food",
  safety: "Safety",
  affordability: "Affordability",
  nightlife: "Nightlife",
  publicTransport: "Public transport",
};

const state = {
  query: "",
  continent: "All",
  sort: "overall-desc",
  openCountryId: null,
  wishlist: loadWishlist(),
};

function loadWishlist() {
  try {
    const raw = localStorage.getItem("we_wishlist");
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveWishlist() {
  try {
    localStorage.setItem("we_wishlist", JSON.stringify([...state.wishlist]));
  } catch (e) {
    /* localStorage unavailable — wishlist just won't persist */
  }
}

function toggleWishlist(id) {
  if (state.wishlist.has(id)) state.wishlist.delete(id);
  else state.wishlist.add(id);
  saveWishlist();
  render();
}

/* ---------- filtering / sorting ---------- */

function getContinents() {
  return ["All", ...new Set(COUNTRIES.map((c) => c.continent))];
}

function getVisibleCountries() {
  let list = COUNTRIES.filter((c) => {
    const matchesQuery =
      state.query.trim() === "" ||
      c.name.toLowerCase().includes(state.query.trim().toLowerCase()) ||
      c.capital.toLowerCase().includes(state.query.trim().toLowerCase());
    const matchesContinent = state.continent === "All" || c.continent === state.continent;
    return matchesQuery && matchesContinent;
  });

  switch (state.sort) {
    case "overall-desc":
      list.sort((a, b) => b.ratings.overall - a.ratings.overall);
      break;
    case "affordability-desc":
      list.sort((a, b) => b.ratings.affordability - a.ratings.affordability);
      break;
    case "cost-asc":
      list.sort((a, b) => a.costs.midRange - b.costs.midRange);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return list;
}

/* ---------- map ---------- */

let map = null;
let markerLayer = null;

function initMap() {
  map = L.map("map", { scrollWheelZoom: false }).setView([20, 10], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
}

// Exposed globally so the inline onclick in each Leaflet popup can reach it.
window.openCountryFromMap = function (id) {
  state.openCountryId = id;
  render();
  if (map) map.closePopup();
  document.getElementById("detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
};

function renderMap() {
  if (!markerLayer) return;
  markerLayer.clearLayers();

  const visible = getVisibleCountries();
  if (visible.length === 0) return;

  const bounds = [];
  visible.forEach((c) => {
    if (!c.coords) return;
    const icon = L.divIcon({
      className: "map-pin",
      html: c.flag,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
    const marker = L.marker([c.coords.lat, c.coords.lng], { icon }).addTo(markerLayer);
    marker.bindPopup(`
      <p class="map-popup-title">${c.flag} ${c.name}</p>
      <p style="margin:0;">${c.teaser}</p>
      <button class="map-popup-link" onclick="openCountryFromMap('${c.id}')">View details</button>
    `);
    bounds.push([c.coords.lat, c.coords.lng]);
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 5 });
  }
}

/* ---------- rendering ---------- */

function render() {
  renderFilterChips();
  renderGrid();
  renderDetail();
  renderCompareOptions();
  renderMap();
}

function renderFilterChips() {
  const wrap = document.getElementById("continent-chips");
  wrap.innerHTML = "";
  getContinents().forEach((cont) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = cont;
    btn.setAttribute("aria-pressed", String(state.continent === cont));
    btn.addEventListener("click", () => {
      state.continent = cont;
      render();
    });
    wrap.appendChild(btn);
  });
}

function renderGrid() {
  const grid = document.getElementById("country-grid");
  const visible = getVisibleCountries();
  grid.innerHTML = "";

  document.getElementById("result-count").textContent =
    `${visible.length} destination${visible.length === 1 ? "" : "s"} in this beta`;

  if (visible.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No destinations match those filters yet — try clearing the search or picking a different region.";
    grid.appendChild(empty);
    return;
  }

  visible.forEach((c) => {
    const card = document.createElement("button");
    card.className = "postcard";
    card.setAttribute("aria-expanded", String(state.openCountryId === c.id));
    card.innerHTML = `
      <div class="postcard-top">
        <span class="postcard-flag" aria-hidden="true">${c.flag}</span>
        <span class="wishlist-btn" role="button" tabindex="0" aria-pressed="${state.wishlist.has(c.id)}" aria-label="Save ${c.name} to wishlist" data-wishlist="${c.id}">${state.wishlist.has(c.id) ? "♥" : "♡"}</span>
      </div>
      <h3>${c.name}</h3>
      <p class="meta">${c.capital} · ${c.continent}</p>
      <p class="teaser">${c.teaser}</p>
      <div class="postcard-quickstats">
        <span class="qs">Overall<strong>${c.ratings.overall}/10</strong></span>
        <span class="qs">Safety<strong>${c.ratings.safety}/10</strong></span>
        <span class="qs">Mid-range/day<strong>$${c.costs.midRange}</strong></span>
      </div>
    `;
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-wishlist]")) return;
      state.openCountryId = state.openCountryId === c.id ? null : c.id;
      render();
      if (state.openCountryId) {
        document.getElementById("detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    const heart = card.querySelector("[data-wishlist]");
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(c.id);
    });
    heart.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(c.id);
      }
    });
    grid.appendChild(card);
  });
}

function renderDetail() {
  const panel = document.getElementById("detail-panel");
  if (!state.openCountryId) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const c = getCountryById(state.openCountryId);
  panel.hidden = false;

  const ratingRows = Object.entries(c.ratings)
    .map(([key, val]) => `
      <div class="rating-row">
        <span>${RATING_LABELS[key]}</span>
        <span class="rating-track"><span class="rating-fill" style="width:${val * 10}%"></span></span>
        <span>${val}</span>
      </div>
    `)
    .join("");

  const attractionRows = c.attractions
    .map(
      (a) => `
      <div class="attraction-item">
        <div class="a-name">${a.name}</div>
        <div class="a-meta">${a.city} · ${a.type}</div>
        <p class="a-blurb">${a.blurb}</p>
      </div>
    `
    )
    .join("");

  panel.innerHTML = `
    <div class="detail-head">
      <div>
        <h2><span aria-hidden="true">${c.flag}</span> ${c.name}</h2>
        <p class="capital-line">${c.capital} · ${c.population} · ${c.languages.join(", ")} · ${c.currency}</p>
      </div>
      <button class="btn btn-outline detail-close" data-close>Close</button>
    </div>
    <div class="detail-grid">
      <div>
        <div class="detail-block">
          <h4>TOURISM RATINGS</h4>
          ${ratingRows}
          <p class="rating-note">Beta scoring (1–10), source: ${c.ratingSource}. Not pulled from an external ratings provider — treat as a starting point, not a verdict.</p>
        </div>
        <div class="detail-block">
          <h4>TOP ATTRACTIONS</h4>
          ${attractionRows}
        </div>
      </div>
      <div>
        <div class="detail-block">
          <h4>DAILY COST ESTIMATE</h4>
          <div class="cost-tiers">
            <div class="cost-tier"><span class="amt">$${c.costs.budget}</span><span class="lbl">Budget</span></div>
            <div class="cost-tier"><span class="amt">$${c.costs.midRange}</span><span class="lbl">Mid-range</span></div>
            <div class="cost-tier"><span class="amt">$${c.costs.luxury}</span><span class="lbl">Luxury</span></div>
          </div>
        </div>
        <div class="detail-block">
          <h4>TRIP BUDGET CALCULATOR</h4>
          <div class="budget-tool">
            <label for="trip-days">Days in ${c.name}</label>
            <input type="number" id="trip-days" min="1" value="7" />
            <label for="trip-style">Travel style</label>
            <select id="trip-style" class="sort-select" style="width:100%; margin-bottom:12px;">
              <option value="budget">Budget (~$${c.costs.budget}/day)</option>
              <option value="midRange" selected>Mid-range (~$${c.costs.midRange}/day)</option>
              <option value="luxury">Luxury (~$${c.costs.luxury}/day)</option>
            </select>
            <div class="budget-result" id="budget-result"></div>
          </div>
        </div>
        <div class="detail-block">
          <h4>GOOD TO KNOW</h4>
          <div class="fact-box">
            <p style="margin:0 0 8px;"><strong>Best time to visit:</strong> ${c.bestTime}</p>
            <p style="margin:0;">${c.funFact}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  panel.querySelector("[data-close]").addEventListener("click", () => {
    state.openCountryId = null;
    render();
  });

  const daysInput = panel.querySelector("#trip-days");
  const styleSelect = panel.querySelector("#trip-style");
  const resultBox = panel.querySelector("#budget-result");

  function updateBudget() {
    const days = Math.max(1, parseInt(daysInput.value, 10) || 1);
    const perDay = c.costs[styleSelect.value];
    const total = days * perDay;
    resultBox.innerHTML = `${days} day${days === 1 ? "" : "s"} at the <strong>${styleSelect.options[styleSelect.selectedIndex].text.split(" (")[0]}</strong> level ≈ <strong>$${total.toLocaleString()}</strong> total.`;
  }
  daysInput.addEventListener("input", updateBudget);
  styleSelect.addEventListener("change", updateBudget);
  updateBudget();
}

/* ---------- compare tool ---------- */

function renderCompareOptions() {
  const selA = document.getElementById("compare-a");
  const selB = document.getElementById("compare-b");
  if (selA.options.length === 0) {
    COUNTRIES.forEach((c, i) => {
      const optA = document.createElement("option");
      optA.value = c.id;
      optA.textContent = `${c.flag} ${c.name}`;
      selA.appendChild(optA);
      const optB = optA.cloneNode(true);
      selB.appendChild(optB);
    });
    selA.value = COUNTRIES[0].id;
    selB.value = COUNTRIES[1] ? COUNTRIES[1].id : COUNTRIES[0].id;
    selA.addEventListener("change", renderCompareTable);
    selB.addEventListener("change", renderCompareTable);
    renderCompareTable();
  }
}

function renderCompareTable() {
  const a = getCountryById(document.getElementById("compare-a").value);
  const b = getCountryById(document.getElementById("compare-b").value);
  const table = document.getElementById("compare-table");
  if (!a || !b) return;

  const rows = [
    ["Capital", a.capital, b.capital],
    ["Continent", a.continent, b.continent],
    ["Overall rating", `${a.ratings.overall}/10`, `${b.ratings.overall}/10`],
    ["Safety rating", `${a.ratings.safety}/10`, `${b.ratings.safety}/10`],
    ["Affordability rating", `${a.ratings.affordability}/10`, `${b.ratings.affordability}/10`],
    ["Food rating", `${a.ratings.food}/10`, `${b.ratings.food}/10`],
    ["Mid-range cost/day", `$${a.costs.midRange}`, `$${b.costs.midRange}`],
    ["Best time to visit", a.bestTime, b.bestTime],
  ];

  table.innerHTML = `
    <thead>
      <tr><th scope="col"></th><th scope="col">${a.flag} ${a.name}</th><th scope="col">${b.flag} ${b.name}</th></tr>
    </thead>
    <tbody>
      ${rows.map(([label, av, bv]) => `<tr><th scope="row">${label}</th><td>${av}</td><td>${bv}</td></tr>`).join("")}
    </tbody>
  `;
}

/* ---------- header controls ---------- */

function setupControls() {
  document.getElementById("search-input").addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });

  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  document.getElementById("random-btn").addEventListener("click", () => {
    const pool = getVisibleCountries();
    const source = pool.length ? pool : COUNTRIES;
    const pick = source[Math.floor(Math.random() * source.length)];
    state.openCountryId = pick.id;
    render();
    document.getElementById("detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

setupControls();
initMap();
render();
