# World Explorer — beta

A working beta of the travel-discovery site you outlined: country overviews,
tourism ratings, top attractions, a daily budget calculator, a compare tool,
and a wishlist. No build step, no framework, no dependencies — four files,
plain HTML/CSS/JS, ready for GitHub Pages or any static host.

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure — header, hero, filters, grid, detail panel, compare table, footer |
| `styles.css` | All visual styling |
| `data.js` | The country data — this is your content file, edit it freely |
| `app.js` | Rendering + interactivity (filtering, sorting, search, detail panel, budget calculator, compare, wishlist) |

## Run it locally

No build tools needed. Either:

- Double-click `index.html` to open it directly in a browser, **or**
- Serve it (recommended, avoids some browser file:// quirks):
  ```bash
  cd world-explorer
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## Push it to GitHub and host it free on GitHub Pages

```bash
git init
git add .
git commit -m "World Explorer beta"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
Your site will be live at `https://<your-username>.github.io/<your-repo>/` a
minute or two later.

If you're adding this into an *existing* site rather than starting a new repo,
copy the four files into a subfolder (e.g. `/explorer/`) and link to
`/explorer/index.html` from your existing navigation — nothing in here assumes
it owns the whole domain.

## Adding more countries

Everything content-related lives in `data.js`. Copy one of the existing
country objects, change every field, and give it a unique `id`. Nothing
else needs to change — `app.js` reads the whole `COUNTRIES` array
automatically, so new entries show up in the grid, filters, compare
dropdowns, and search with no extra code.

```js
{
  id: "spain",
  name: "Spain",
  flag: "🇪🇸",
  capital: "Madrid",
  continent: "Europe",
  population: "47.6 million",
  languages: ["Spanish"],
  currency: "Euro (EUR)",
  teaser: "One sentence that sells the place.",
  ratingSource: "editorial estimate",
  ratings: {
    overall: 8, naturalBeauty: 7, culture: 9, food: 9,
    safety: 7, affordability: 7, nightlife: 9, publicTransport: 8,
  },
  attractions: [
    { name: "…", city: "…", type: "Historical sites", blurb: "…" },
  ],
  costs: { budget: 55, midRange: 120, luxury: 280, currencySymbol: "$" },
  bestTime: "…",
  funFact: "…",
}
```

## What's real vs. placeholder

The ratings and cost numbers are **placeholder content for the demo** —
labeled in the UI as an editorial estimate, not pulled from any live source.
Before this goes further than a beta, the original spec's plan to separate
`country_ratings`, `travel_costs`, etc. into their own sourced tables (ideally
backed by a real API or a dataset you trust) is the right next step — that
way "Safety: 7/10" can actually cite something.

## Where this beta sits relative to the full idea

This build covers the "start here" slice from the original plan: country
overview, ratings, a few attractions per country, and a cost calculator, plus
two of the interactive features (country comparison, wishlist/"passport").
Not yet built, in roughly the order they're worth tackling next:

1. ~~**A real map**~~ — done. The map section uses [Leaflet](https://leafletjs.com/)
   (free, no API key) with OpenStreetMap tiles, plotting each country's
   `coords` from `data.js`. It stays in sync with the search/continent
   filters and clicking a pin opens that country's detail panel.
2. **More countries** — trivial, just extend `data.js`. Remember to add a
   `coords: { lat, lng }` field (capital city's coordinates is fine) so the
   new pin shows up on the map too.
3. **Real photos** — swap the emoji flags for actual imagery (attraction
   photos, hero images).
4. **Visa/travel-requirement data** — needs a real source; don't hand-write
   this, it goes stale and gets people in trouble.
5. **User accounts + reviews** — needs a backend (Supabase, Firebase, or your
   own API) once you're past static-file territory.
6. **"Is this country right for me?" quiz** — pure front-end logic, could be
   added to `app.js` without a backend once you want it.

### About the map

Leaflet and its map tiles load from `unpkg.com` and `openstreetmap.org` —
both external hosts, so the map needs an internet connection to render (it
won't work fully offline, unlike the rest of the site). OpenStreetMap's free
tile server is fine for a beta/demo audience; if this gets real traffic,
check [OpenStreetMap's tile usage policy](https://operations.osmfoundation.org/policies/tiles/)
or switch to a provider like MapTiler or Mapbox, which have generous free
tiers built for production use.

## Browser storage note

The wishlist (heart icon) is saved in the visitor's own browser via
`localStorage` — it's per-device and per-browser, not synced anywhere. That's
fine for a beta; a real account system would be needed to make it persist
across devices.
