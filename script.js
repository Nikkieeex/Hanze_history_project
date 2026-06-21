/* run python -m http.server 8000
* http://localhost:8000 */

/*

To ADD a LOCATION to the MAP:
  {
    name: "NAME OF BUILDING",
    coords: [X.X, X.X],
    description: "TEST"
    image: "./images/image.jpg"
  },
  {
    name: "NAME OF BUILDING 2",
    coords: [X.X, X.X],
    description: "TEST 2"
    image: "./images/image.jpg"
  }, 
  
*/

const timelineData = {
  title: {
    text: {
      headline: "Hanze History",
      text: "A timeline of important moments in the history of the Hanze University of Applied Sciences."
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
  /* {
    name: "University of Groningen, Zernike Campus",
    coords: [53.24358312083661, 6.534969702095709],
    description: "Rijksuniversiteit Groningen, Zernike Campus",
    image: "./images/fritszernike.jpg",
    image_two: "./images/mariekamphuis.jpg"
  }, */
  {
    name: "Van Doorenveste (ZP11)",
    coords: [53.2409950927156, 6.533645891170895],
    paragraph_one: "Het Van Dooreveste gebouw op het Zernike Campus (Zernikeplein 11) is vernoemd naar oud directeur MTS (Middelbare Technische School) en lid van het verzet Pieter Hermanus Everhardus van Dooren (1899-1944).",
    image_one: "./images/b0a41e61c84bfc711971b7ba3a1805a6vandooren.jpeg",
    sourceimage_one: "“Pieter Hermanus Everhardus van Dooren.” 2022. Oorlogsgravenstichting. 2022. https://oorlogsgravenstichting.nl/personen/35112/pieter-hermanus-everhardus-van-dooren.",
    paragraph_two: "P.H.E. van Dooren is directeur geweest van Academie Minerva (1925-1943) (Academie Minerva (2), 1829 - 1978) en de MTS (Middelbare Technische School).",
    image_two: "./images/1986_04671_mtsacademieminerva.jpg",
    sourceimage_two: "“M.T.S. ‘Academie Minerva’ En Zeevaartschool, Groningen, Luchtfoto.” 2026. Beeldbank Groningen. 2026. https://www.beeldbankgroningen.nl/beelden/detail/b9242965-1fa0-8454-e19e-cc70be2934ec/media/5eceba86-79d6-90d5-2a75-a01c3e32e491?mode=detail&view=horizontal&q=zeevaartschool%20groningen&rows=1&page=4",
    paragraph_three: "Het schoolgebouw van de scheepvaartschool en MTS (Middelbare Technische School), wat lag aan de Petrus Driessenstraat 3, speelde een belangrijke rol in de tweede wereldoorlog. Dit schoolgebouw ving leerlingen van andere scholen op en werd gebruikt door het verzet. Onderduikers werden opgevangen in de kelders van de school en door docenten en studenten werden er illegale kranten verspreid en persoonsbewijzen geregeld. /n Beide directieleden van de zeevaartschool en het MTS waren ook verzetsstrijders; Waaronder de directeur P.H.E. van Dooren. P.H.E. van Dooren heeft geleefd van 1899 tot 1944 en is doodgeschoten door 'foute' politieman Stienus Bertus van Wijnen tijdens de tweede wereldoorlog (“Dooren, Van, Pieter Hermannus Everhardus - TracesOfWar.nl” 2026). /n Later in 2004 toen de school inmiddels 13 lectoraten had gekregen volgde er de mogelijkvoor om samen een school binnen de Hanze op te richten. Hierbij kwam ook het Instituur of Life Science & Technology (ILST) op.  In 2008 werd het gebouw van de faculteit Techniek vernoemd naar P.H.E. van Dooren (1899-1944), de oud-directeur van de scheepvaartschool en het MTS (Middelbare Technische School) en verzetslid tijdens de tweede wereldoorlog (1940-1945)."
  },
  /* {
    name: "Van OlstBorg (ZP7)",
    coords: [53.24030990487017, 6.531974591799187],
    description: "ZP7 / Van OlstBorg",
    image: "./images/vanolstborg.jpg"
  },
  {
    name: "Marie KamphuisBorg (ZP23)",
    coords: [53.24211126245972, 6.536600661106534],
    description: "ZP23 / Marie KamphuisBorg",
    image: "./images/mariekamphuis.jpg"
  },
  {
    name: "Willem-Alexander Sports Center",
    coords: [53.24146481154212, 6.53553203412747],
    description: "Willem-Alexander Sports Center on the Zernike Campus",
    image: "./images/willemalexandersportcentrum.jpg"
  },
  {
    name: "BrugsmaBorg (ZP9)",
    coords: [53.2400576467666, 6.532911822789884],
    description: "ZP9 / BrugsmaBorg",
    image: "./images/brugsma.jpg"
  },
  {
    name: "Academie Minerva (Praediniussingel 59)",
    coords: [53.21515791356994, 6.559803142251853],
    description: "Academie Minerva (Praediniussingel 59)",
    image: ""
  },
  {
    name: "Academie Minerva (Gedempte Zuiderdiep 158)",
    coords: [53.21480003005644, 6.561404797304823],
    description: "Academie Minerva (Gedempte Zuiderdiep 158)",
    image: "./images/minervagedemptezuiderdiep.jpg"
  },
  {
    name: "Wiebenga",
    coords: [53.22789627062452, 6.5675642671979935],
    description: "Hanze University Groningen, Wiebenga",
    image: ""
  },
  {
    name: "Prins Claus Conservatorium",
    coords: [53.21443004896757, 6.577585919906768],
    description: "Prins Claus Conservatorium",
    image: "./images/prinsclaus.jpg"
  } */
];

locations.forEach(location => {
  const textboxone = document.getElementById("paragraph_text_one")
  const textboxtwo = document.getElementById("paragraph_text_two")
  const textboxthree = document.getElementById("paragraph_text_three")
  const imageone = document.getElementById("image_uno")
  const sourceimageone = document.getElementById("sourceone")
  const imagetwo = document.getElementById("image_dos")
  const sourceimagetwo = document.getElementById("sourcetwo")
  L.marker(location.coords)
    .addTo(map)
    .bindPopup(`
      <h3>${location.name}</h3>
      <p>${location.description}</p>
      ${location.image ? `<img src="${location.image}" alt="${location.name}" style="width:150px; height:auto; border-radius:6px; margin-bottom:6px;">` : ''}
    `)
    .addEventListener('click', () => {
      textboxone.textContent = location.paragraph_one
      textboxtwo.textContent = location.paragraph_two
      textboxthree.textContent = location.paragraph_three
      imageone.src = location.image_one
      sourceimageone.textContent = location.sourceimage_one
      imagetwo.src = location.image_two
      sourceimagetwo.textContent = location.sourceimage_two

    });
});


/* 

const locations = [
  {
    name: "University of Groningen, Zernike Campus",
    coords: [53.24358312083661, 6.534969702095709],
    description: "Rijksuniversiteit Groningen, Zernike Campus",
    image: "./images/fritszernike.jpg"
  },
  {
    name: "Hanzehogeschool Groningen (Hoofd ingang)",
    coords: [53.240934861318856, 6.533400128892888],
    description: "Hoofd ingang Hanzehogeschool Groningen",
    image: ""
  },
  {
    name: "Van Doorenveste (ZP11)",
    coords: [53.2409950927156, 6.533645891170895],
    description: "ZP11 / Van Doorenveste.",
    image: "./images/doorenveste.jpg"
  },
  {
    name: "Van OlstBorg (ZP7)",
    coords: [53.24030990487017, 6.531974591799187],
    description: "ZP7 / Van OlstBorg",
    image: "./images/vanolstborg.jpg"
  },
  {
    name: "Marie KamphuisBorg (ZP23)",
    coords: [53.24211126245972, 6.536600661106534],
    description: "ZP23 / Marie KamphuisBorg",
    image: "./images/mariekamphuis.jpg"
  },
  {
    name: "Willem-Alexander Sports Center",
    coords: [53.24146481154212, 6.53553203412747],
    description: "Willem-Alexander Sports Center on the Zernike Campus",
    image: "./images/willemalexandersportcentrum.jpg"
  },
  {
    name: "BrugsmaBorg (ZP9)",
    coords: [53.2400576467666, 6.532911822789884],
    description: "ZP9 / BrugsmaBorg",
    image: "./images/brugsma.jpg"
  },
  {
    name: "Academie Minerva (Praediniussingel 59)",
    coords: [53.21515791356994, 6.559803142251853],
    description: "Academie Minerva (Praediniussingel 59)",
    image: ""
  },
  {
    name: "Academie Minerva (Gedempte Zuiderdiep 158)",
    coords: [53.21480003005644, 6.561404797304823],
    description: "Academie Minerva (Gedempte Zuiderdiep 158)",
    image: "./images/minervagedemptezuiderdiep.jpg"
  },
  {
    name: "Wiebenga",
    coords: [53.22789627062452, 6.5675642671979935],
    description: "Hanze University Groningen, Wiebenga",
    image: ""
  },
  {
    name: "Prins Claus Conservatorium",
    coords: [53.21443004896757, 6.577585919906768],
    description: "Prins Claus Conservatorium",
    image: "./images/prinsclaus.jpg"
  }
];

*/