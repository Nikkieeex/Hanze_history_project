/* run python -m http.server 8000
* http://localhost:8000 */
const timelineData = {
  title: {
    text: {
      headline: "Hanze History",
      text: "A timeline of important moments in the history of Hanze University of Applied Sciences."
    }
  },
  events: [
    {
      start_date: {
        year: "1798"
      },
      text: {
        headline: "Early educational roots",
        text: "An early milestone connected to the educational development that later became part of Hanze history."
      }
    },
    {
      start_date: {
        year: "1986"
      },
      text: {
        headline: "Formation of Hanze",
        text: "A key moment in the institutional development of Hanze University of Applied Sciences."
      }
    },
    {
      start_date: {
        year: "2024"
      },
      text: {
        headline: "Modern Hanze",
        text: "Hanze continues to develop as a university of applied sciences in Groningen."
      }
    },
    {
      start_date: {
        year: "2023"
      },
      text: {
        headline: "A Year before Modern",
        text: "Example Edit."
      }
    }
  ]
};

window.timeline = new TL.Timeline("timeline-embed", timelineData);

const groningenBounds = [
  [53.15, 6.45],
  [53.30, 6.70]
];

const map = L.map("map", {
  maxBounds: groningenBounds,
  maxBoundsViscosity: 1.0,
  minZoom: 12,
  maxZoom: 18
}).setView([53.2194, 6.5665], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const locations = [
  {
    name: "Hanze University of Applied Sciences",
    coords: [53.2406, 6.5331],
    description: "Main Hanze campus area in Groningen."
  },
  {
    name: "City Centre Groningen",
    coords: [53.2194, 6.5665],
    description: "Historical city centre of Groningen."
  }
];

locations.forEach(location => {
  L.marker(location.coords)
    .addTo(map)
    .bindPopup(`
      <h3>${location.name}</h3>
      <p>${location.description}</p>
    `);
});