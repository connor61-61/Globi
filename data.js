/**
 * WORLD EXPLORER — beta
 * -------------------------------
 * This is placeholder/demo content, not verified travel data.
 * Ratings are an illustrative 1–10 scoring system invented for this beta
 * (source: "editorial estimate"), NOT pulled from any external survey or
 * dataset. Costs are rough, rounded estimates for demo purposes only.
 * Coordinates point at each country's capital city. Swap this file out for
 * a real API or CMS once you're past the beta stage — every field below is
 * exactly what the rendering code in app.js expects, so you can replace
 * values without touching app.js.
 */

const COUNTRIES = [
  {
    "id": "japan",
    "name": "Japan",
    "flag": "🇯🇵",
    "capital": "Tokyo",
    "coords": {
      "lat": 35.6762,
      "lng": 139.6503
    },
    "continent": "Asia",
    "population": "123.9 million",
    "languages": [
      "Japanese"
    ],
    "currency": "Japanese yen (JPY)",
    "teaser": "Neon cities, quiet temples, and trains that leave on the second.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 8,
      "culture": 10,
      "food": 10,
      "safety": 10,
      "affordability": 5,
      "nightlife": 7,
      "publicTransport": 10
    },
    "attractions": [
      {
        "name": "Fushimi Inari Shrine",
        "city": "Kyoto",
        "type": "Temples & religious sites",
        "blurb": "Thousands of vermilion torii gates climbing the mountainside."
      },
      {
        "name": "Shibuya Crossing",
        "city": "Tokyo",
        "type": "Cities",
        "blurb": "The world's busiest pedestrian scramble, best seen from above."
      },
      {
        "name": "Osaka Castle",
        "city": "Osaka",
        "type": "Historical sites",
        "blurb": "A five-story castle rebuilt atop massive stone ramparts."
      },
      {
        "name": "Arashiyama Bamboo Grove",
        "city": "Kyoto",
        "type": "Natural wonders",
        "blurb": "A quiet green corridor of towering bamboo stalks."
      }
    ],
    "costs": {
      "budget": 70,
      "midRange": 150,
      "luxury": 350,
      "currencySymbol": "$"
    },
    "bestTime": "Late March–April (cherry blossoms) or October–November (autumn colour)",
    "funFact": "Japan has more than 5.5 million vending machines — roughly one for every 23 people."
  },
  {
    "id": "italy",
    "name": "Italy",
    "flag": "🇮🇹",
    "capital": "Rome",
    "coords": {
      "lat": 41.9028,
      "lng": 12.4964
    },
    "continent": "Europe",
    "population": "59 million",
    "languages": [
      "Italian"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Ruins, coastline, and dinner that's never in a hurry.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 8,
      "culture": 10,
      "food": 10,
      "safety": 7,
      "affordability": 6,
      "nightlife": 7,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Colosseum",
        "city": "Rome",
        "type": "Historical sites",
        "blurb": "The largest amphitheatre ever built, still standing after 2,000 years."
      },
      {
        "name": "Cinque Terre",
        "city": "Liguria",
        "type": "Natural wonders",
        "blurb": "Five cliffside fishing villages linked by coastal trails."
      },
      {
        "name": "Uffizi Gallery",
        "city": "Florence",
        "type": "Museums",
        "blurb": "Renaissance masterpieces by Botticelli, da Vinci, and Michelangelo."
      },
      {
        "name": "Grand Canal",
        "city": "Venice",
        "type": "Cities",
        "blurb": "A city built on water, best explored by gondola or vaporetto."
      }
    ],
    "costs": {
      "budget": 65,
      "midRange": 140,
      "luxury": 320,
      "currencySymbol": "$"
    },
    "bestTime": "April–June or September–October, before and after peak summer crowds",
    "funFact": "Italy has more UNESCO World Heritage Sites than any other country."
  },
  {
    "id": "thailand",
    "name": "Thailand",
    "flag": "🇹🇭",
    "capital": "Bangkok",
    "coords": {
      "lat": 13.7563,
      "lng": 100.5018
    },
    "continent": "Asia",
    "population": "71.6 million",
    "languages": [
      "Thai"
    ],
    "currency": "Thai baht (THB)",
    "teaser": "Golden temples, street-food stalls, and islands built for slowing down.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 9,
      "culture": 8,
      "food": 9,
      "safety": 6,
      "affordability": 9,
      "nightlife": 8,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Wat Arun",
        "city": "Bangkok",
        "type": "Temples & religious sites",
        "blurb": "The 'Temple of Dawn', clad in porcelain and coloured glass."
      },
      {
        "name": "Railay Beach",
        "city": "Krabi",
        "type": "Beaches",
        "blurb": "A limestone-cliff peninsula reachable only by boat."
      },
      {
        "name": "Chiang Mai Old City",
        "city": "Chiang Mai",
        "type": "Cities",
        "blurb": "A moated grid of lantern-lit temples and night markets."
      },
      {
        "name": "Ayutthaya Historical Park",
        "city": "Ayutthaya",
        "type": "Historical sites",
        "blurb": "Crumbling temple spires from Thailand's former royal capital."
      }
    ],
    "costs": {
      "budget": 35,
      "midRange": 80,
      "luxury": 220,
      "currencySymbol": "$"
    },
    "bestTime": "November–February, the cool, dry season",
    "funFact": "Thailand is the only Southeast Asian country never colonised by a European power."
  },
  {
    "id": "france",
    "name": "France",
    "flag": "🇫🇷",
    "capital": "Paris",
    "coords": {
      "lat": 48.8566,
      "lng": 2.3522
    },
    "continent": "Europe",
    "population": "68.4 million",
    "languages": [
      "French"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Grand boulevards, countryside vineyards, and a museum on every corner.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 8,
      "culture": 10,
      "food": 10,
      "safety": 7,
      "affordability": 5,
      "nightlife": 8,
      "publicTransport": 9
    },
    "attractions": [
      {
        "name": "Eiffel Tower",
        "city": "Paris",
        "type": "Cities",
        "blurb": "The iron landmark that redefined the Paris skyline in 1889."
      },
      {
        "name": "Mont Saint-Michel",
        "city": "Normandy",
        "type": "Historical sites",
        "blurb": "A fortified abbey rising from tidal flats."
      },
      {
        "name": "Palace of Versailles",
        "city": "Versailles",
        "type": "Historical sites",
        "blurb": "The gilded former seat of the French monarchy."
      },
      {
        "name": "Promenade des Anglais",
        "city": "Nice",
        "type": "Beaches",
        "blurb": "A palm-lined Riviera seafront backed by pastel villas."
      }
    ],
    "costs": {
      "budget": 75,
      "midRange": 160,
      "luxury": 380,
      "currencySymbol": "$"
    },
    "bestTime": "April–June or September–October",
    "funFact": "France is the most-visited country in the world by international tourist arrivals."
  },
  {
    "id": "mexico",
    "name": "Mexico",
    "flag": "🇲🇽",
    "capital": "Mexico City",
    "coords": {
      "lat": 19.4326,
      "lng": -99.1332
    },
    "continent": "North America",
    "population": "128.9 million",
    "languages": [
      "Spanish"
    ],
    "currency": "Mexican peso (MXN)",
    "teaser": "Ancient pyramids, colourful colonial towns, and coastline on two oceans.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 9,
      "culture": 9,
      "food": 9,
      "safety": 5,
      "affordability": 8,
      "nightlife": 8,
      "publicTransport": 5
    },
    "attractions": [
      {
        "name": "Chichén Itzá",
        "city": "Yucatán",
        "type": "Historical sites",
        "blurb": "A Maya step-pyramid complex and modern Wonder of the World."
      },
      {
        "name": "Tulum Ruins",
        "city": "Quintana Roo",
        "type": "Historical sites",
        "blurb": "Clifftop Maya ruins overlooking the Caribbean Sea."
      },
      {
        "name": "Guanajuato",
        "city": "Guanajuato",
        "type": "Cities",
        "blurb": "A hillside colonial city of candy-coloured alleys and tunnels."
      },
      {
        "name": "Copper Canyon",
        "city": "Chihuahua",
        "type": "Natural wonders",
        "blurb": "A network of canyons larger and deeper than the Grand Canyon."
      }
    ],
    "costs": {
      "budget": 40,
      "midRange": 90,
      "luxury": 240,
      "currencySymbol": "$"
    },
    "bestTime": "December–April, the dry season",
    "funFact": "Mexico is home to 35 UNESCO World Heritage Sites, more than any other country in the Americas."
  },
  {
    "id": "iceland",
    "name": "Iceland",
    "flag": "🇮🇸",
    "capital": "Reykjavík",
    "coords": {
      "lat": 64.1466,
      "lng": -21.9426
    },
    "continent": "Europe",
    "population": "390,000",
    "languages": [
      "Icelandic"
    ],
    "currency": "Icelandic króna (ISK)",
    "teaser": "Glaciers, geysers, and skies that turn green after dark.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 10,
      "culture": 6,
      "food": 6,
      "safety": 10,
      "affordability": 3,
      "nightlife": 5,
      "publicTransport": 4
    },
    "attractions": [
      {
        "name": "Gullfoss",
        "city": "Golden Circle",
        "type": "Natural wonders",
        "blurb": "A two-tiered waterfall that seems to drop into the earth itself."
      },
      {
        "name": "Jökulsárlón",
        "city": "South Coast",
        "type": "Natural wonders",
        "blurb": "A lagoon of drifting icebergs calved from a glacier."
      },
      {
        "name": "Blue Lagoon",
        "city": "Reykjanes",
        "type": "Natural wonders",
        "blurb": "A geothermal spa set in a black lava field."
      },
      {
        "name": "Old Harbour",
        "city": "Reykjavík",
        "type": "Cities",
        "blurb": "A working harbour turned home to whale-watching boats and cafes."
      }
    ],
    "costs": {
      "budget": 110,
      "midRange": 220,
      "luxury": 480,
      "currencySymbol": "$"
    },
    "bestTime": "June–August for daylight, February–March for the northern lights",
    "funFact": "Iceland runs almost entirely on renewable geothermal and hydroelectric power."
  },
  {
    "id": "usa",
    "name": "United States",
    "flag": "🇺🇸",
    "capital": "Washington, D.C.",
    "coords": {
      "lat": 38.9072,
      "lng": -77.0369
    },
    "continent": "North America",
    "population": "335 million",
    "languages": [
      "English"
    ],
    "currency": "US dollar (USD)",
    "teaser": "Coast-to-coast canyons, cities, and national parks on an enormous scale.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 9,
      "culture": 9,
      "food": 8,
      "safety": 7,
      "affordability": 5,
      "nightlife": 8,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Statue of Liberty",
        "city": "New York City",
        "type": "Historical sites",
        "blurb": "A copper colossus that's greeted arrivals since 1886."
      },
      {
        "name": "Grand Canyon",
        "city": "Arizona",
        "type": "Natural wonders",
        "blurb": "A mile-deep gorge carved by the Colorado River over millions of years."
      },
      {
        "name": "Golden Gate Bridge",
        "city": "San Francisco",
        "type": "Cities",
        "blurb": "An Art Deco suspension bridge often wrapped in fog."
      }
    ],
    "costs": {
      "budget": 90,
      "midRange": 190,
      "luxury": 420,
      "currencySymbol": "$"
    },
    "bestTime": "April–May or September–October, avoiding peak summer heat and crowds",
    "funFact": "The US National Park System spans over 400 sites across all 50 states."
  },
  {
    "id": "spain",
    "name": "Spain",
    "flag": "🇪🇸",
    "capital": "Madrid",
    "coords": {
      "lat": 40.4168,
      "lng": -3.7038
    },
    "continent": "Europe",
    "population": "47.4 million",
    "languages": [
      "Spanish"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Gaudí spires, tapas bars, and beaches that stay lively past midnight.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 7,
      "culture": 9,
      "food": 9,
      "safety": 8,
      "affordability": 7,
      "nightlife": 9,
      "publicTransport": 8
    },
    "attractions": [
      {
        "name": "Sagrada Família",
        "city": "Barcelona",
        "type": "Temples & religious sites",
        "blurb": "Gaudí's still-unfinished basilica, under construction since 1882."
      },
      {
        "name": "Alhambra",
        "city": "Granada",
        "type": "Historical sites",
        "blurb": "A Moorish palace and fortress overlooking the city below."
      },
      {
        "name": "Park Güell",
        "city": "Barcelona",
        "type": "Cities",
        "blurb": "A tiled, sculptural park designed by Antoni Gaudí."
      }
    ],
    "costs": {
      "budget": 55,
      "midRange": 120,
      "luxury": 280,
      "currencySymbol": "$"
    },
    "bestTime": "April–June or September–October",
    "funFact": "Spain is the world's second-most-visited country by international tourist arrivals."
  },
  {
    "id": "china",
    "name": "China",
    "flag": "🇨🇳",
    "capital": "Beijing",
    "coords": {
      "lat": 39.9042,
      "lng": 116.4074
    },
    "continent": "Asia",
    "population": "1.41 billion",
    "languages": [
      "Mandarin Chinese"
    ],
    "currency": "Renminbi (CNY)",
    "teaser": "Ancient dynasties, modern megacities, and a wall you can see for miles.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 8,
      "culture": 10,
      "food": 9,
      "safety": 7,
      "affordability": 8,
      "nightlife": 6,
      "publicTransport": 8
    },
    "attractions": [
      {
        "name": "Great Wall of China",
        "city": "Beijing",
        "type": "Historical sites",
        "blurb": "A defensive wall stretching thousands of miles across northern China."
      },
      {
        "name": "Forbidden City",
        "city": "Beijing",
        "type": "Historical sites",
        "blurb": "The imperial palace complex at the heart of old Beijing."
      },
      {
        "name": "The Bund",
        "city": "Shanghai",
        "type": "Cities",
        "blurb": "A riverside promenade facing Shanghai's futuristic skyline."
      }
    ],
    "costs": {
      "budget": 45,
      "midRange": 100,
      "luxury": 250,
      "currencySymbol": "$"
    },
    "bestTime": "September–November or March–May",
    "funFact": "The Great Wall is not, contrary to legend, visible to the naked eye from space."
  },
  {
    "id": "turkey",
    "name": "Turkey",
    "flag": "🇹🇷",
    "capital": "Ankara",
    "coords": {
      "lat": 39.9334,
      "lng": 32.8597
    },
    "continent": "Asia",
    "population": "85 million",
    "languages": [
      "Turkish"
    ],
    "currency": "Turkish lira (TRY)",
    "teaser": "A country straddling two continents, full of bazaars, coastline, and ruins.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 8,
      "culture": 9,
      "food": 9,
      "safety": 6,
      "affordability": 8,
      "nightlife": 7,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Hagia Sophia",
        "city": "Istanbul",
        "type": "Temples & religious sites",
        "blurb": "A Byzantine cathedral turned mosque turned museum turned mosque again."
      },
      {
        "name": "Cappadocia",
        "city": "Nevşehir",
        "type": "Natural wonders",
        "blurb": "A landscape of wind-carved rock towers, best seen from a hot-air balloon."
      },
      {
        "name": "Pamukkale",
        "city": "Denizli",
        "type": "Natural wonders",
        "blurb": "White terraced pools formed by mineral-rich hot springs."
      }
    ],
    "costs": {
      "budget": 35,
      "midRange": 80,
      "luxury": 200,
      "currencySymbol": "$"
    },
    "bestTime": "April–May or September–October",
    "funFact": "Istanbul is the only city in the world that sits on two continents."
  },
  {
    "id": "germany",
    "name": "Germany",
    "flag": "🇩🇪",
    "capital": "Berlin",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
    },
    "continent": "Europe",
    "population": "84.5 million",
    "languages": [
      "German"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Fairy-tale castles, beer halls, and cities rebuilt with meticulous care.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 6,
      "culture": 8,
      "food": 8,
      "safety": 8,
      "affordability": 6,
      "nightlife": 8,
      "publicTransport": 9
    },
    "attractions": [
      {
        "name": "Neuschwanstein Castle",
        "city": "Bavaria",
        "type": "Historical sites",
        "blurb": "The 19th-century fairy-tale castle that inspired Disney's own."
      },
      {
        "name": "Brandenburg Gate",
        "city": "Berlin",
        "type": "Cities",
        "blurb": "An 18th-century gate that once stood in the shadow of the Wall."
      },
      {
        "name": "Cologne Cathedral",
        "city": "Cologne",
        "type": "Temples & religious sites",
        "blurb": "A Gothic cathedral that took over 600 years to complete."
      }
    ],
    "costs": {
      "budget": 70,
      "midRange": 150,
      "luxury": 340,
      "currencySymbol": "$"
    },
    "bestTime": "May–September for mild weather, December for Christmas markets",
    "funFact": "Germany has over 1,500 varieties of beer brewed across the country."
  },
  {
    "id": "uk",
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "capital": "London",
    "coords": {
      "lat": 51.5072,
      "lng": -0.1276
    },
    "continent": "Europe",
    "population": "68 million",
    "languages": [
      "English"
    ],
    "currency": "Pound sterling (GBP)",
    "teaser": "Royal palaces, ancient stone circles, and a pub on every corner.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 7,
      "culture": 9,
      "food": 7,
      "safety": 8,
      "affordability": 4,
      "nightlife": 8,
      "publicTransport": 8
    },
    "attractions": [
      {
        "name": "Big Ben & Parliament",
        "city": "London",
        "type": "Cities",
        "blurb": "The clock tower and seat of government beside the Thames."
      },
      {
        "name": "Stonehenge",
        "city": "Wiltshire",
        "type": "Historical sites",
        "blurb": "A 5,000-year-old ring of standing stones on Salisbury Plain."
      },
      {
        "name": "Edinburgh Castle",
        "city": "Edinburgh",
        "type": "Historical sites",
        "blurb": "A fortress perched on an extinct volcano above the city."
      }
    ],
    "costs": {
      "budget": 90,
      "midRange": 180,
      "luxury": 400,
      "currencySymbol": "$"
    },
    "bestTime": "May–September for the mildest, longest days",
    "funFact": "The London Underground, opened in 1863, is the world's oldest metro system."
  },
  {
    "id": "austria",
    "name": "Austria",
    "flag": "🇦🇹",
    "capital": "Vienna",
    "coords": {
      "lat": 48.2082,
      "lng": 16.3738
    },
    "continent": "Europe",
    "population": "9 million",
    "languages": [
      "German"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Imperial palaces, alpine lakes, and a soundtrack of classical music.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 8,
      "culture": 8,
      "food": 8,
      "safety": 9,
      "affordability": 5,
      "nightlife": 6,
      "publicTransport": 9
    },
    "attractions": [
      {
        "name": "Schönbrunn Palace",
        "city": "Vienna",
        "type": "Historical sites",
        "blurb": "The 1,441-room summer palace of the Habsburg emperors."
      },
      {
        "name": "Hallstatt",
        "city": "Salzkammergut",
        "type": "Natural wonders",
        "blurb": "A lakeside village so picturesque a replica was built in China."
      },
      {
        "name": "Salzburg Old Town",
        "city": "Salzburg",
        "type": "Cities",
        "blurb": "Mozart's birthplace, wedged between the Alps and a baroque skyline."
      }
    ],
    "costs": {
      "budget": 75,
      "midRange": 160,
      "luxury": 350,
      "currencySymbol": "$"
    },
    "bestTime": "June–September for hiking, December for Christmas markets",
    "funFact": "Vienna has been ranked one of the world's most livable cities for over a decade."
  },
  {
    "id": "greece",
    "name": "Greece",
    "flag": "🇬🇷",
    "capital": "Athens",
    "coords": {
      "lat": 37.9838,
      "lng": 23.7275
    },
    "continent": "Europe",
    "population": "10.4 million",
    "languages": [
      "Greek"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Whitewashed islands, ancient ruins, and the birthplace of democracy.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 9,
      "naturalBeauty": 9,
      "culture": 9,
      "food": 9,
      "safety": 7,
      "affordability": 7,
      "nightlife": 8,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Acropolis",
        "city": "Athens",
        "type": "Historical sites",
        "blurb": "The hilltop citadel crowned by the Parthenon."
      },
      {
        "name": "Santorini",
        "city": "Santorini",
        "type": "Beaches",
        "blurb": "A volcanic island of blue-domed churches above the caldera."
      },
      {
        "name": "Meteora",
        "city": "Kalambaka",
        "type": "Natural wonders",
        "blurb": "Monasteries perched atop sheer sandstone pillars."
      }
    ],
    "costs": {
      "budget": 55,
      "midRange": 120,
      "luxury": 280,
      "currencySymbol": "$"
    },
    "bestTime": "April–June or September–October",
    "funFact": "Greece has more than 6,000 islands, though only around 227 are inhabited."
  },
  {
    "id": "malaysia",
    "name": "Malaysia",
    "flag": "🇲🇾",
    "capital": "Kuala Lumpur",
    "coords": {
      "lat": 3.139,
      "lng": 101.6869
    },
    "continent": "Asia",
    "population": "33.9 million",
    "languages": [
      "Malay"
    ],
    "currency": "Malaysian ringgit (MYR)",
    "teaser": "Skyscrapers, rainforest, and a genuinely dizzying range of street food.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 7,
      "naturalBeauty": 8,
      "culture": 7,
      "food": 8,
      "safety": 7,
      "affordability": 8,
      "nightlife": 6,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Petronas Towers",
        "city": "Kuala Lumpur",
        "type": "Cities",
        "blurb": "Twin steel towers that were once the tallest buildings on Earth."
      },
      {
        "name": "Batu Caves",
        "city": "Kuala Lumpur",
        "type": "Temples & religious sites",
        "blurb": "A limestone cave temple reached by 272 rainbow-painted steps."
      },
      {
        "name": "Langkawi",
        "city": "Langkawi",
        "type": "Beaches",
        "blurb": "An archipelago of jungle-covered islands off the northwest coast."
      }
    ],
    "costs": {
      "budget": 30,
      "midRange": 70,
      "luxury": 180,
      "currencySymbol": "$"
    },
    "bestTime": "December–February, the driest months",
    "funFact": "Malaysia is one of the most biodiverse countries on Earth, home to rainforests older than the Amazon."
  },
  {
    "id": "canada",
    "name": "Canada",
    "flag": "🇨🇦",
    "capital": "Ottawa",
    "coords": {
      "lat": 45.4215,
      "lng": -75.6972
    },
    "continent": "North America",
    "population": "40 million",
    "languages": [
      "English",
      "French"
    ],
    "currency": "Canadian dollar (CAD)",
    "teaser": "Vast wilderness, mountain lakes, and cities that feel unhurried.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 9,
      "culture": 7,
      "food": 7,
      "safety": 8,
      "affordability": 5,
      "nightlife": 6,
      "publicTransport": 6
    },
    "attractions": [
      {
        "name": "Niagara Falls",
        "city": "Ontario",
        "type": "Natural wonders",
        "blurb": "Three massive waterfalls straddling the US-Canada border."
      },
      {
        "name": "Banff National Park",
        "city": "Alberta",
        "type": "National parks",
        "blurb": "Turquoise glacial lakes ringed by the Canadian Rockies."
      },
      {
        "name": "Old Quebec",
        "city": "Quebec City",
        "type": "Cities",
        "blurb": "A walled, cobblestoned old town with a distinctly European feel."
      }
    ],
    "costs": {
      "budget": 75,
      "midRange": 160,
      "luxury": 360,
      "currencySymbol": "$"
    },
    "bestTime": "June–September for warm weather and open parks",
    "funFact": "Canada has more lakes than the rest of the world's lakes combined."
  },
  {
    "id": "poland",
    "name": "Poland",
    "flag": "🇵🇱",
    "capital": "Warsaw",
    "coords": {
      "lat": 52.2297,
      "lng": 21.0122
    },
    "continent": "Europe",
    "population": "37.7 million",
    "languages": [
      "Polish"
    ],
    "currency": "Polish złoty (PLN)",
    "teaser": "Rebuilt old towns, sobering history, and some of Europe's best-value travel.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 7,
      "naturalBeauty": 6,
      "culture": 8,
      "food": 7,
      "safety": 7,
      "affordability": 8,
      "nightlife": 6,
      "publicTransport": 7
    },
    "attractions": [
      {
        "name": "Old Town Market Square",
        "city": "Warsaw",
        "type": "Cities",
        "blurb": "A meticulously reconstructed square, rebuilt after WWII from old paintings."
      },
      {
        "name": "Wieliczka Salt Mine",
        "city": "near Kraków",
        "type": "Historical sites",
        "blurb": "A 13th-century mine with chapels and chandeliers carved entirely from salt."
      },
      {
        "name": "Auschwitz-Birkenau Memorial",
        "city": "Oświęcim",
        "type": "Historical sites",
        "blurb": "The preserved site of the largest Nazi concentration camp."
      }
    ],
    "costs": {
      "budget": 40,
      "midRange": 90,
      "luxury": 220,
      "currencySymbol": "$"
    },
    "bestTime": "May–September",
    "funFact": "Kraków's Main Market Square is the largest medieval town square in Europe."
  },
  {
    "id": "netherlands",
    "name": "Netherlands",
    "flag": "🇳🇱",
    "capital": "Amsterdam",
    "coords": {
      "lat": 52.3676,
      "lng": 4.9041
    },
    "continent": "Europe",
    "population": "17.9 million",
    "languages": [
      "Dutch"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Canal-lined cities, tulip fields, and everyone gets around by bike.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 6,
      "culture": 8,
      "food": 7,
      "safety": 8,
      "affordability": 5,
      "nightlife": 7,
      "publicTransport": 9
    },
    "attractions": [
      {
        "name": "Anne Frank House",
        "city": "Amsterdam",
        "type": "Historical sites",
        "blurb": "The canal-side annex where Anne Frank hid during WWII."
      },
      {
        "name": "Keukenhof Gardens",
        "city": "Lisse",
        "type": "Natural wonders",
        "blurb": "Seven million tulip bulbs planted across a single spring garden."
      },
      {
        "name": "Canal Ring",
        "city": "Amsterdam",
        "type": "Cities",
        "blurb": "A UNESCO-listed grid of 17th-century canals and gabled houses."
      }
    ],
    "costs": {
      "budget": 70,
      "midRange": 150,
      "luxury": 330,
      "currencySymbol": "$"
    },
    "bestTime": "April for tulip season, May–September for mild weather",
    "funFact": "Amsterdam has more bicycles than residents."
  },
  {
    "id": "croatia",
    "name": "Croatia",
    "flag": "🇭🇷",
    "capital": "Zagreb",
    "coords": {
      "lat": 45.815,
      "lng": 15.9819
    },
    "continent": "Europe",
    "population": "3.9 million",
    "languages": [
      "Croatian"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Walled coastal towns, turquoise water, and a thousand islands to sail past.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 8,
      "culture": 7,
      "food": 8,
      "safety": 7,
      "affordability": 6,
      "nightlife": 7,
      "publicTransport": 5
    },
    "attractions": [
      {
        "name": "Dubrovnik Old Town",
        "city": "Dubrovnik",
        "type": "Historical sites",
        "blurb": "A limestone-walled old city overlooking the Adriatic."
      },
      {
        "name": "Plitvice Lakes",
        "city": "Plitvička Jezera",
        "type": "National parks",
        "blurb": "Sixteen terraced lakes connected by waterfalls and wooden walkways."
      },
      {
        "name": "Diocletian's Palace",
        "city": "Split",
        "type": "Historical sites",
        "blurb": "A Roman emperor's retirement palace, now the living heart of Split."
      }
    ],
    "costs": {
      "budget": 45,
      "midRange": 100,
      "luxury": 240,
      "currencySymbol": "$"
    },
    "bestTime": "May–June or September, before and after peak summer",
    "funFact": "Dubrovnik's medieval walls are almost entirely walkable, circling the whole old town."
  },
  {
    "id": "portugal",
    "name": "Portugal",
    "flag": "🇵🇹",
    "capital": "Lisbon",
    "coords": {
      "lat": 38.7223,
      "lng": -9.1393
    },
    "continent": "Europe",
    "population": "10.3 million",
    "languages": [
      "Portuguese"
    ],
    "currency": "Euro (EUR)",
    "teaser": "Hillside trams, custard tarts, and coastline that stretches for days.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 7,
      "culture": 8,
      "food": 8,
      "safety": 8,
      "affordability": 7,
      "nightlife": 8,
      "publicTransport": 7
    },
    "attractions": [
      {
        "name": "Belém Tower",
        "city": "Lisbon",
        "type": "Historical sites",
        "blurb": "A fortified tower that once guarded ships sailing for the Age of Discovery."
      },
      {
        "name": "Pena Palace",
        "city": "Sintra",
        "type": "Historical sites",
        "blurb": "A candy-coloured Romanticist palace above a misty hill town."
      },
      {
        "name": "Ribeira District",
        "city": "Porto",
        "type": "Cities",
        "blurb": "A riverside old quarter facing Porto's famous wine cellars."
      }
    ],
    "costs": {
      "budget": 45,
      "midRange": 100,
      "luxury": 240,
      "currencySymbol": "$"
    },
    "bestTime": "March–May or September–October",
    "funFact": "Portugal is the oldest nation-state in Europe, with borders largely unchanged since 1139."
  },
  {
    "id": "hungary",
    "name": "Hungary",
    "flag": "🇭🇺",
    "capital": "Budapest",
    "coords": {
      "lat": 47.4979,
      "lng": 19.0402
    },
    "continent": "Europe",
    "population": "9.6 million",
    "languages": [
      "Hungarian"
    ],
    "currency": "Hungarian forint (HUF)",
    "teaser": "Grand thermal baths, riverside parliament, and a genuinely affordable capital.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 7,
      "naturalBeauty": 5,
      "culture": 7,
      "food": 7,
      "safety": 7,
      "affordability": 8,
      "nightlife": 7,
      "publicTransport": 8
    },
    "attractions": [
      {
        "name": "Parliament Building",
        "city": "Budapest",
        "type": "Cities",
        "blurb": "A Gothic Revival landmark that dominates the Danube skyline."
      },
      {
        "name": "Széchenyi Thermal Bath",
        "city": "Budapest",
        "type": "Natural wonders",
        "blurb": "One of Europe's largest thermal bathing complexes, open year-round."
      },
      {
        "name": "Buda Castle",
        "city": "Budapest",
        "type": "Historical sites",
        "blurb": "A former royal palace overlooking the Danube from Castle Hill."
      }
    ],
    "costs": {
      "budget": 35,
      "midRange": 80,
      "luxury": 200,
      "currencySymbol": "$"
    },
    "bestTime": "April–June or September–October",
    "funFact": "Budapest sits atop more than 100 natural thermal springs."
  },
  {
    "id": "egypt",
    "name": "Egypt",
    "flag": "🇪🇬",
    "capital": "Cairo",
    "coords": {
      "lat": 30.0444,
      "lng": 31.2357
    },
    "continent": "Africa",
    "population": "112 million",
    "languages": [
      "Arabic"
    ],
    "currency": "Egyptian pound (EGP)",
    "teaser": "Pyramids, temples, and 4,000 years of history along the Nile.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 7,
      "naturalBeauty": 7,
      "culture": 10,
      "food": 6,
      "safety": 5,
      "affordability": 9,
      "nightlife": 4,
      "publicTransport": 4
    },
    "attractions": [
      {
        "name": "Pyramids of Giza",
        "city": "Giza",
        "type": "Historical sites",
        "blurb": "The last surviving Wonder of the Ancient World."
      },
      {
        "name": "Karnak Temple",
        "city": "Luxor",
        "type": "Temples & religious sites",
        "blurb": "A sprawling temple complex built up over 2,000 years."
      },
      {
        "name": "Valley of the Kings",
        "city": "Luxor",
        "type": "Historical sites",
        "blurb": "Rock-cut tombs of pharaohs, including Tutankhamun's."
      }
    ],
    "costs": {
      "budget": 25,
      "midRange": 60,
      "luxury": 160,
      "currencySymbol": "$"
    },
    "bestTime": "October–April, avoiding peak summer heat",
    "funFact": "The Great Pyramid of Giza was the tallest man-made structure for almost 3,800 years."
  },
  {
    "id": "uae",
    "name": "United Arab Emirates",
    "flag": "🇦🇪",
    "capital": "Abu Dhabi",
    "coords": {
      "lat": 24.4539,
      "lng": 54.3773
    },
    "continent": "Asia",
    "population": "9.5 million",
    "languages": [
      "Arabic"
    ],
    "currency": "UAE dirham (AED)",
    "teaser": "Desert dunes, record-breaking skyscrapers, and shopping that never really stops.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 6,
      "culture": 5,
      "food": 8,
      "safety": 9,
      "affordability": 3,
      "nightlife": 8,
      "publicTransport": 7
    },
    "attractions": [
      {
        "name": "Burj Khalifa",
        "city": "Dubai",
        "type": "Cities",
        "blurb": "The world's tallest building, with an observation deck near its 148th floor."
      },
      {
        "name": "Sheikh Zayed Grand Mosque",
        "city": "Abu Dhabi",
        "type": "Temples & religious sites",
        "blurb": "A marble mosque with one of the world's largest hand-knotted carpets."
      },
      {
        "name": "Dubai Marina",
        "city": "Dubai",
        "type": "Cities",
        "blurb": "A man-made canal city lined with waterfront towers."
      }
    ],
    "costs": {
      "budget": 70,
      "midRange": 180,
      "luxury": 450,
      "currencySymbol": "$"
    },
    "bestTime": "November–March, avoiding the intense summer heat",
    "funFact": "Dubai's Burj Khalifa is more than twice the height of the Empire State Building."
  },
  {
    "id": "indonesia",
    "name": "Indonesia",
    "flag": "🇮🇩",
    "capital": "Jakarta",
    "coords": {
      "lat": -6.2088,
      "lng": 106.8456
    },
    "continent": "Asia",
    "population": "279 million",
    "languages": [
      "Indonesian"
    ],
    "currency": "Indonesian rupiah (IDR)",
    "teaser": "Volcanic rice terraces, ancient temples, and thousands of islands to choose from.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 9,
      "culture": 8,
      "food": 8,
      "safety": 6,
      "affordability": 9,
      "nightlife": 7,
      "publicTransport": 4
    },
    "attractions": [
      {
        "name": "Borobudur",
        "city": "Magelang",
        "type": "Temples & religious sites",
        "blurb": "The world's largest Buddhist temple, built in the 9th century."
      },
      {
        "name": "Uluwatu Temple",
        "city": "Bali",
        "type": "Temples & religious sites",
        "blurb": "A clifftop temple facing the Indian Ocean, known for sunset views."
      },
      {
        "name": "Ubud Rice Terraces",
        "city": "Bali",
        "type": "Natural wonders",
        "blurb": "Emerald, stair-stepped paddies farmed using a centuries-old irrigation system."
      }
    ],
    "costs": {
      "budget": 25,
      "midRange": 60,
      "luxury": 170,
      "currencySymbol": "$"
    },
    "bestTime": "April–October, the dry season",
    "funFact": "Indonesia is the world's largest archipelago, made up of over 17,000 islands."
  },
  {
    "id": "vietnam",
    "name": "Vietnam",
    "flag": "🇻🇳",
    "capital": "Hanoi",
    "coords": {
      "lat": 21.0278,
      "lng": 105.8342
    },
    "continent": "Asia",
    "population": "99 million",
    "languages": [
      "Vietnamese"
    ],
    "currency": "Vietnamese đồng (VND)",
    "teaser": "Limestone bays, motorbike-filled streets, and some of the best food anywhere.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 8,
      "culture": 7,
      "food": 9,
      "safety": 6,
      "affordability": 9,
      "nightlife": 6,
      "publicTransport": 3
    },
    "attractions": [
      {
        "name": "Ha Long Bay",
        "city": "Quảng Ninh",
        "type": "Natural wonders",
        "blurb": "Thousands of limestone karsts rising from emerald water."
      },
      {
        "name": "Hoi An Ancient Town",
        "city": "Hoi An",
        "type": "Historical sites",
        "blurb": "A lantern-lit trading port frozen somewhere in the 16th century."
      },
      {
        "name": "Cu Chi Tunnels",
        "city": "Ho Chi Minh City",
        "type": "Historical sites",
        "blurb": "A vast underground tunnel network used during the Vietnam War."
      }
    ],
    "costs": {
      "budget": 20,
      "midRange": 50,
      "luxury": 140,
      "currencySymbol": "$"
    },
    "bestTime": "February–April or August–October",
    "funFact": "Vietnam is the world's second-largest coffee exporter, after Brazil."
  },
  {
    "id": "india",
    "name": "India",
    "flag": "🇮🇳",
    "capital": "New Delhi",
    "coords": {
      "lat": 28.6139,
      "lng": 77.209
    },
    "continent": "Asia",
    "population": "1.44 billion",
    "languages": [
      "Hindi",
      "English"
    ],
    "currency": "Indian rupee (INR)",
    "teaser": "Marble mausoleums, desert forts, and a scale of culture few countries match.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 7,
      "culture": 10,
      "food": 8,
      "safety": 5,
      "affordability": 9,
      "nightlife": 5,
      "publicTransport": 4
    },
    "attractions": [
      {
        "name": "Taj Mahal",
        "city": "Agra",
        "type": "Historical sites",
        "blurb": "A white-marble mausoleum built by an emperor for his late wife."
      },
      {
        "name": "Amber Fort",
        "city": "Jaipur",
        "type": "Historical sites",
        "blurb": "A hilltop fort of mirrored halls above a artificial lake."
      },
      {
        "name": "Varanasi Ghats",
        "city": "Varanasi",
        "type": "Temples & religious sites",
        "blurb": "Riverside steps along the Ganges, among Hinduism's holiest sites."
      }
    ],
    "costs": {
      "budget": 20,
      "midRange": 50,
      "luxury": 150,
      "currencySymbol": "$"
    },
    "bestTime": "October–March, avoiding monsoon and peak summer heat",
    "funFact": "India is home to 43 UNESCO World Heritage Sites, including the Taj Mahal."
  },
  {
    "id": "south-korea",
    "name": "South Korea",
    "flag": "🇰🇷",
    "capital": "Seoul",
    "coords": {
      "lat": 37.5665,
      "lng": 126.978
    },
    "continent": "Asia",
    "population": "51.7 million",
    "languages": [
      "Korean"
    ],
    "currency": "South Korean won (KRW)",
    "teaser": "Palace courtyards, glowing megacities, and food culture built for sharing.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 6,
      "culture": 8,
      "food": 9,
      "safety": 9,
      "affordability": 6,
      "nightlife": 9,
      "publicTransport": 10
    },
    "attractions": [
      {
        "name": "Gyeongbokgung Palace",
        "city": "Seoul",
        "type": "Historical sites",
        "blurb": "The largest of Seoul's five grand Joseon-dynasty palaces."
      },
      {
        "name": "Bukchon Hanok Village",
        "city": "Seoul",
        "type": "Cities",
        "blurb": "A hillside neighbourhood of traditional hanok houses."
      },
      {
        "name": "Jeju Island",
        "city": "Jeju",
        "type": "Natural wonders",
        "blurb": "A volcanic island of lava tubes, waterfalls, and beaches."
      }
    ],
    "costs": {
      "budget": 55,
      "midRange": 120,
      "luxury": 280,
      "currencySymbol": "$"
    },
    "bestTime": "March–May or September–November",
    "funFact": "Seoul's subway system is one of the longest and busiest in the world."
  },
  {
    "id": "morocco",
    "name": "Morocco",
    "flag": "🇲🇦",
    "capital": "Rabat",
    "coords": {
      "lat": 34.0209,
      "lng": -6.8416
    },
    "continent": "Africa",
    "population": "37.5 million",
    "languages": [
      "Arabic"
    ],
    "currency": "Moroccan dirham (MAD)",
    "teaser": "Maze-like medinas, desert dunes, and mountains within reach of the coast.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 7,
      "naturalBeauty": 7,
      "culture": 8,
      "food": 7,
      "safety": 6,
      "affordability": 8,
      "nightlife": 6,
      "publicTransport": 5
    },
    "attractions": [
      {
        "name": "Jemaa el-Fnaa",
        "city": "Marrakech",
        "type": "Shopping districts",
        "blurb": "A chaotic main square of snake charmers, food stalls, and storytellers by night."
      },
      {
        "name": "Chefchaouen",
        "city": "Chefchaouen",
        "type": "Cities",
        "blurb": "A mountain town painted almost entirely in shades of blue."
      },
      {
        "name": "Sahara Desert Camps",
        "city": "Merzouga",
        "type": "Natural wonders",
        "blurb": "Overnight camel treks into towering, wind-rippled dunes."
      }
    ],
    "costs": {
      "budget": 25,
      "midRange": 60,
      "luxury": 160,
      "currencySymbol": "$"
    },
    "bestTime": "March–May or September–November",
    "funFact": "Morocco's Chefchaouen has been painted blue since the 1930s, for reasons still debated."
  },
  {
    "id": "switzerland",
    "name": "Switzerland",
    "flag": "🇨🇭",
    "capital": "Bern",
    "coords": {
      "lat": 46.948,
      "lng": 7.4474
    },
    "continent": "Europe",
    "population": "8.8 million",
    "languages": [
      "German",
      "French",
      "Italian"
    ],
    "currency": "Swiss franc (CHF)",
    "teaser": "Jagged peaks, immaculate trains, and lakes so clear they look painted.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 8,
      "naturalBeauty": 10,
      "culture": 6,
      "food": 6,
      "safety": 10,
      "affordability": 2,
      "nightlife": 5,
      "publicTransport": 10
    },
    "attractions": [
      {
        "name": "Matterhorn",
        "city": "Zermatt",
        "type": "Natural wonders",
        "blurb": "The pyramid-shaped peak that's become shorthand for the Alps."
      },
      {
        "name": "Lake Geneva",
        "city": "Geneva",
        "type": "Natural wonders",
        "blurb": "A crescent-shaped lake ringed by vineyards and mountains."
      },
      {
        "name": "Chapel Bridge",
        "city": "Lucerne",
        "type": "Historical sites",
        "blurb": "A wooden, medieval footbridge lined with 17th-century paintings."
      }
    ],
    "costs": {
      "budget": 110,
      "midRange": 230,
      "luxury": 500,
      "currencySymbol": "$"
    },
    "bestTime": "June–September for hiking, December–March for skiing",
    "funFact": "Switzerland has one of the densest and most punctual rail networks in the world."
  },
  {
    "id": "saudi-arabia",
    "name": "Saudi Arabia",
    "flag": "🇸🇦",
    "capital": "Riyadh",
    "coords": {
      "lat": 24.7136,
      "lng": 46.6753
    },
    "continent": "Asia",
    "population": "36 million",
    "languages": [
      "Arabic"
    ],
    "currency": "Saudi riyal (SAR)",
    "teaser": "Ancient rock-cut tombs, desert canyons, and a tourism scene still finding its feet.",
    "ratingSource": "editorial estimate",
    "ratings": {
      "overall": 6,
      "naturalBeauty": 7,
      "culture": 7,
      "food": 6,
      "safety": 8,
      "affordability": 5,
      "nightlife": 3,
      "publicTransport": 4
    },
    "attractions": [
      {
        "name": "Hegra (AlUla)",
        "city": "AlUla",
        "type": "Historical sites",
        "blurb": "Rock-cut Nabataean tombs, a quieter sibling to Jordan's Petra."
      },
      {
        "name": "Masjid al-Haram",
        "city": "Mecca",
        "type": "Temples & religious sites",
        "blurb": "Islam's holiest site, surrounding the Kaaba."
      },
      {
        "name": "Kingdom Centre Tower",
        "city": "Riyadh",
        "type": "Cities",
        "blurb": "A skybridge observation deck near the top of Riyadh's skyline."
      }
    ],
    "costs": {
      "budget": 60,
      "midRange": 140,
      "luxury": 350,
      "currencySymbol": "$"
    },
    "bestTime": "November–February, avoiding extreme summer heat",
    "funFact": "AlUla opened to international tourists only in 2019, after being closed for decades."
  }
];

// Quick lookup helper used by app.js
const getCountryById = (id) => COUNTRIES.find((c) => c.id === id);
