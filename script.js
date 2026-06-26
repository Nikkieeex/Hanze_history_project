/* run python -m http.server 8000
* http://localhost:8000 */

/*
LET OP: dit is een concept-pagina voor de Hanze, nog niet goedgekeurd.
Er wordt geen officiële Hanze-CSS gebruikt, wel het Hanze-logo en -oranje.

To ADD a LOCATION to the MAP:
  {
    name: "NAME OF BUILDING",
    coords: [X.X, X.X],
    paragraph_one: "TEXT",
    image_one: "./images/image.jpg",
    sourceimage_one: "SOURCE",
    paragraph_two: "TEXT",
    image_two: "./images/image.jpg",
    sourceimage_two: "SOURCE",
    paragraph_three: "TEXT"
  },

*/

/* ============================================================
   TIJDLIJN
   Aangevuld met jaartallen + tekst uit:
   - "Van meester tot Master" (220 jaar Hanzehogeschool Groningen)
   - Tijdlijn-document (1768–1942)
   - Geschiedenis 1940–2026 document
   ============================================================ */

const timelineData = {
  title: {
    text: {
      headline: "Hanze History",
      text: "Belangrijke momenten in de geschiedenis van de Hanze, van de eerste tekenacademie in 1798 tot de Hanze van nu."
    }
  },
  events: [
    {
      start_date: { year: "1768" },
      text: {
        headline: "Eerste poging tot een tekenacademie",
        text: "Een eerste poging om in Groningen een tekenacademie op te richten, omdat het niveau van het tekenonderwijs door huisonderwijzers onder de maat was."
      }
    },
    {
      start_date: { year: "1790" },
      text: {
        headline: "School voor doofstommen",
        text: "Leden van het Groninger departement van de Maatschappij tot Nut van 't Algemeen richten samen met Henri Daniel Guyot een school voor doofstommen op."
      }
    },
    {
      start_date: { year: "1795" },
      text: {
        headline: "Revolutionaire regering in Groningen",
        text: "Op 14 februari 1795 wordt in Groningen een revolutionaire regering ingesteld. Patriotten planten een vrijheidsboom als symbool van nieuwe idealen over burgerschap en onderwijs."
      }
    },
    {
      start_date: { year: "1797", month: "6", day: "17" },
      text: {
        headline: "Kweekschool aan de Visserstraat",
        text: "Opening van de departementsleer- en kweekschool aan de Visserstraat, een vroege opleiding voor onderwijzers. Vanwege een latere sluiting (1812) wordt deze school niet gezien als directe rechtsvoorganger van de Hanze."
      }
    },
    {
      start_date: { year: "1797" },
      text: {
        headline: "Plan voor een academisch ziekenhuis",
        text: "Hoogleraar Evert Jan Thomassen à Thuessink stelt voor om het Groene Weeshuis aan de Oude Ebbingestraat om te bouwen tot een academisch ziekenhuis (Nosocomium Academicum) voor klinisch onderwijs."
      }
    },
    {
      start_date: { year: "1798", month: "1", day: "16" },
      text: {
        headline: "Aankondiging eerste lessen",
        text: "In de Groninger Courant verschijnt de aankondiging van de eerste lessen van de nieuwe Academie. De dag erna staan de eerste leerlingen al op de stoep."
      }
    },
    {
      start_date: { year: "1798", month: "1", day: "17" },
      text: {
        headline: "Eerste les van de Academie",
        text: "Gerardus de San geeft de eerste tekenles aan de Oude Kijk in 't Jatstraat. Dit wordt gezien als het begin van de huidige Hanze."
      }
    },
    {
      start_date: { year: "1798", month: "10", day: "15" },
      text: {
        headline: "Officiële opening Academie van Teeken-, Bouw- en Zeevaartkunde",
        text: "Boekverkoper Wijbe Wouters verricht de officiële opening van de Academie van Teeken-, Bouw- en Zeevaartkunde. Vanaf dit moment zijn alle afdelingen (tekenen, bouw- en zeevaartkunde, talen) bezet."
      }
    },
    {
      start_date: { year: "1798" },
      text: {
        headline: "Start Nosocomium Academicum",
        text: "Het Nosocomium Academicum (academisch ziekenhuis) start in het Groene Weeshuis: bedoeld voor klinisch onderwijs, niet primair voor liefdadigheid."
      }
    },
    {
      start_date: { year: "1798" },
      end_date: { year: "1803" },
      text: {
        headline: "Koenraad Jan Koers geeft les",
        text: "De jonge wiskundige Koenraad Jan Koers uit Leeuwarden geeft onderwijs in wiskunde, bouw- en zeevaartkunde, voordat hij inspecteur van haven- en waterwerken wordt."
      }
    },
    {
      start_date: { year: "1812" },
      text: {
        headline: "Sluiting kweekschool Visserstraat",
        text: "De departementsleer- en kweekschool wordt gesloten als gevolg van bezuinigingen."
      }
    },
    {
      start_date: { year: "1815" },
      text: {
        headline: "Huishoudkunde verplicht voor theologen",
        text: "Landhuishoudkunde wordt verplicht voor theologiestudenten in Groningen, Leiden en Utrecht, zodat predikanten landbouwkennis konden doorgeven aan boeren."
      }
    },
    {
      start_date: { year: "1817" },
      end_date: { year: "1818" },
      text: {
        headline: "Stadsarmenziekenhuis opgericht",
        text: "Na de dreiging van een tyfusepidemie wordt duidelijk dat Groningen een algemeen ziekenhuis nodig heeft. In 1818 richt het stadsbestuur het Stadsarmenziekenhuis op, met meer dan 50 bedden."
      }
    },
    {
      start_date: { year: "1819" },
      text: {
        headline: "Brugsma's hulpschool",
        text: "Berend Brugsma richt een hulpschool op waar onderwijzers op zaterdag bijscholing konden volgen."
      }
    },
    {
      start_date: { year: "1830" },
      text: {
        headline: "Overlijden Gerardus de San",
        text: "Gerardus de San overlijdt; Jacob Bruggink volgt hem op als directeur van de tekenafdeling."
      }
    },
    {
      start_date: { year: "1831" },
      text: {
        headline: "Naam 'Academie Minerva'",
        text: "De Academie fuseert met het Kunstlievend Genootschap en gaat verder onder de naam Academie Minerva, gericht op beeldende kunsten, bouw, werktuigkunde en zeevaartkunde."
      }
    },
    {
      start_date: { year: "1841" },
      text: {
        headline: "Volkszangschool",
        text: "Oprichting van een volkszangschool in Groningen, vanuit het idee dat muziekonderwijs de beschaving en het religieuze gevoel zou versterken."
      }
    },
    {
      start_date: { year: "1842" },
      text: {
        headline: "Handleiding lichamelijke oefeningen",
        text: "Roelof Gerrit Rijkens schrijft een handleiding over lichamelijke oefeningen, een vroege stap richting gymnastiekonderwijs."
      }
    },
    {
      start_date: { year: "1848" },
      text: {
        headline: "Grondwet van Thorbecke",
        text: "De nieuwe grondwet bepaalt dat de overheid voortaan verantwoordelijk is voor de hele onderwijssector."
      }
    },
    {
      start_date: { year: "1851" },
      text: {
        headline: "Algemeen Provinciaal, Stads- en Academisch Ziekenhuis",
        text: "Fusie tussen het academisch ziekenhuis en het Stadsarmenziekenhuis: ontstaan van het Algemeen Provinciaal, Stads- en Academisch Ziekenhuis (124 bedden), de voorganger van het huidige UMCG."
      }
    },
    {
      start_date: { year: "1856" },
      text: {
        headline: "Academie wordt industrieschool",
        text: "Naar Duits voorbeeld (Gewerbeschule) wordt de Academie hervormd tot een meer praktische industrieschool met drie afdelingen: bouw/werktuigkunde, teken/schilderkunst en zeevaartkunde."
      }
    },
    {
      start_date: { year: "1857" },
      text: {
        headline: "Wet op de kweekscholen",
        text: "Nieuwe wetgeving rond kweekscholen maakt verdere professionalisering van onderwijzersopleidingen mogelijk."
      }
    },
    {
      start_date: { year: "1859" },
      text: {
        headline: "Start Groningse muziekschool",
        text: "Musicus en pianohandelaar Dirk van Druten start de Groningse muziekschool; de eerste 23 leerlingen krijgen voor 10 gulden per jaar één uur muziekles per week."
      }
    },
    {
      start_date: { year: "1861", month: "11", day: "15" },
      text: {
        headline: "Einde kweekschool Poststraatje",
        text: "De departementskweekschool aan het Poststraatje sluit, en maakt zo ruimte voor een nieuwe rijksopleiding."
      }
    },
    {
      start_date: { year: "1861", month: "11", day: "16" },
      text: {
        headline: "Opening Rijkskweekschool Groningen",
        text: "Opening van de Rijkskweekschool Groningen, één van de drie rijkskweekscholen in Nederland (naast Haarlem en Den Bosch)."
      }
    },
    {
      start_date: { year: "1876" },
      text: {
        headline: "Kweekschool voor meisjes",
        text: "Het Nut richt een kweekschool voor meisjes op, omdat meisjes niet werden toegelaten tot de Rijkskweekschool."
      }
    },
    {
      start_date: { year: "1876" },
      text: {
        headline: "Hogescholen worden universiteiten",
        text: "Nieuwe wetgeving voor hoger onderwijs: hogescholen worden voortaan universiteiten genoemd, en het is nu ook toegestaan les te geven in het Nederlands in plaats van Latijn."
      }
    },
    {
      start_date: { year: "1879" },
      text: {
        headline: "Clara Bruins wint medailles",
        text: "Clara Bruins, één van de eerste vrouwelijke leerlingen van de Academie, wint vier medailles met haar examenwerk."
      }
    },
    {
      start_date: { year: "1894" },
      text: {
        headline: "Instituut voor heilgymnastiek",
        text: "Groningen krijgt een instituut voor heilgymnastiek (huilgymnastiek), een vroege voorloper van de fysiotherapie."
      }
    },
    {
      start_date: { year: "1905" },
      text: {
        headline: "Van Anrooy wil conservatorium",
        text: "Peter van Anrooy wordt directeur van de muziekschool en wil deze omvormen tot een echt conservatorium, naar Amsterdams voorbeeld."
      }
    },
    {
      start_date: { year: "1913" },
      text: {
        headline: "Oprichting Middelbare Technische School",
        text: "De gemeente Groningen richt de Middelbare Technische School (MTS) op, vanwege de groeiende behoefte aan technisch geschoold personeel."
      }
    },
    {
      start_date: { year: "1913" },
      end_date: { year: "1922" },
      text: {
        headline: "Einde van Academie Minerva als zelfstandige academie",
        text: "De afdelingen beeldende/toegepaste kunst en zeevaartkunde gaan op in de technische school; Academie Minerva verdwijnt tijdelijk als zelfstandige academie."
      }
    },
    {
      start_date: { year: "1917" },
      text: {
        headline: "Christelijke school voor meisjes",
        text: "Oprichting van de Christelijke Industrie- en Nijverheidsschool Prinses Juliana, met dag- en kooklessen voor meisjes van 12 tot 18 jaar."
      }
    },
    {
      start_date: { year: "1918" },
      text: {
        headline: "Instituut voor Lichamelijke Opvoeding",
        text: "Start van het Instituut voor Lichamelijke Opvoeding in Groningen, met C.M. van Hessen als eerste directeur."
      }
    },
    {
      start_date: { year: "1921" },
      text: {
        headline: "Jan Gerko Wiebenga directeur",
        text: "Jan Gerko Wiebenga wordt directeur en brengt de technische opleidingen samen onder één dak. Het latere Wiebenga-gebouw draagt zijn naam."
      }
    },
    {
      start_date: { year: "1925" },
      text: {
        headline: "Eerste conservatoriumexamens",
        text: "Leerlingen van de muziekschool mogen conservatoriumexamen doen, ook al heeft Groningen nog geen officieel conservatorium."
      }
    },
    {
      start_date: { year: "1925" },
      text: {
        headline: "Arend Duiker start praktijk",
        text: "Arend Duiker start een praktijk voor heilgymnastiek en massage naast zijn werk als leraar; dit vormt de basis voor de latere opleiding fysiotherapie."
      }
    },
    {
      start_date: { year: "1935" },
      text: {
        headline: "Pieter van Dooren directeur",
        text: "Pieter (P.H.E.) van Dooren wordt directeur van de gemeentelijke school met MTS, kunstnijverheid en de zeevaart- en machinistenschool."
      }
    },
    {
      start_date: { year: "1939" },
      text: {
        headline: "Weinig aanmeldingen Lichamelijke Opvoeding",
        text: "Het Instituut voor Lichamelijke Opvoeding heeft nog maar weinig aanmeldingen, wat laat zien hoe kwetsbaar de opleiding nog is."
      }
    },
    {
      start_date: { year: "1940" },
      end_date: { year: "1945" },
      text: {
        headline: "Tweede Wereldoorlog en het verzet",
        text: "Tijdens de Duitse bezetting werd het schoolgebouw aan de Petrus Driessenstraat 3 gebruikt door het verzet: onderduikers in de kelders, illegale kranten en persoonsbewijzen. Directeur P.H.E. van Dooren en adjunct-directeur Egbert Kuipers waren beiden verzetsstrijders; Van Dooren is in 1944 doodgeschoten."
      }
    },
    {
      start_date: { year: "1942" },
      text: {
        headline: "Fysiotherapie als paramedisch beroep",
        text: "Heilgymnastiek en massage krijgen officieel de status van paramedisch beroep, een belangrijke stap voor de ontwikkeling van de fysiotherapie."
      }
    },
    {
      start_date: { year: "1947" },
      text: {
        headline: "Plannen voor uitbreiding MTS",
        text: "Directeur ir. J.A. Muller kondigt uitbreiding van de MTS aan met chemische technologie en vliegtuigbouwkunde, plus nieuwbouw voor de ambachtsschool."
      }
    },
    {
      start_date: { year: "1948" },
      text: {
        headline: "Start Groninger Analisten Cursus",
        text: "Loomeyer, Poortvliet en Rosebeek richten de Groninger Analisten Cursus (GAC) op, een avondopleiding om leerlingen te helpen slagen voor het analistenexamen."
      }
    },
    {
      start_date: { year: "1949" },
      text: {
        headline: "Chemisch Medisch Centrum",
        text: "De heer Woldring richt het Chemisch Medisch Centrum (CMC) op, een opleiding voor apothekersassistenten."
      }
    },
    {
      start_date: { year: "1951" },
      text: {
        headline: "Naam Minerva terug voor kunstafdeling",
        text: "De afdeling tekenen en kunstnijverheid krijgt de naam Minerva terug."
      }
    },
    {
      start_date: { year: "1953" },
      text: {
        headline: "Minerva Academie",
        text: "De hele school krijgt de naam Minerva Academie."
      }
    },
    {
      start_date: { year: "1957" },
      text: {
        headline: "MTS wordt HTS",
        text: "De schakelklas wordt de MTS, die een nieuwe status krijgt: de Hogere Technische School (HTS)."
      }
    },
    {
      start_date: { year: "1961" },
      text: {
        headline: "Fusie analistenopleidingen",
        text: "De GAC wordt opgeheven; Loomeyer, Poortvliet en Woldring treden toe tot het bestuur van de nieuwe Stichting Analistenschool Groningen (SAG)."
      }
    },
    {
      start_date: { year: "1964" },
      text: {
        headline: "Splitsing Minerva Academie",
        text: "De gemeente splitst de Minerva Academie: de afdeling kunstnijverheid wordt zelfstandig als Academie voor Beeldende Kunsten 'Academie Minerva'."
      }
    },
    {
      start_date: { year: "1972" },
      text: {
        headline: "Noordelijke Hogere Zeevaartschool",
        text: "Groningen en Delfzijl gaan verder als één zeevaartschool onder de naam Noordelijke Hogere Zeevaartschool."
      }
    },
    {
      start_date: { year: "1975" },
      text: {
        headline: "Zeevaartschool verhuist naar Delfzijl",
        text: "De zeevaartschool verhuist naar Delfzijl, omdat er aan de Petrus Driessenstraat 3 geen plaats meer was."
      }
    },
    {
      start_date: { year: "1980" },
      text: {
        headline: "Einde van de Groningse zeevaartschool",
        text: "Na bijna 200 jaar wordt de zeevaartschool in Groningen opgeheven; de HTS krijgt een nieuwe afdeling informatica."
      }
    },
    {
      start_date: { year: "1984" },
      text: {
        headline: "Strijd om het HBO-centrum noorden",
        text: "Minister Deetman belooft Friesland het HBO-centrum van het noorden te worden; Groningen en Drenthe verzetten zich hiertegen."
      }
    },
    {
      start_date: { year: "1986" },
      text: {
        headline: "Formatie van de Hanze",
        text: "Door schaalvergroting fuseren zestien scholen tot de nieuwe Rijkshogeschool Groningen, onderverdeeld in vijf sectoren. Ook de analistenschool gaat vanaf nu verder als HBO."
      }
    },
    {
      start_date: { year: "1989" },
      text: {
        headline: "Herenakkoord",
        text: "Na jarenlange discussie tussen Friesland en Groningen komt het Herenakkoord: afspraken over welke hogescholen zich waar vestigen."
      }
    },
    {
      start_date: { year: "1993" },
      text: {
        headline: "Fusie tot Hanzehogeschool",
        text: "De Rijkshogeschool en de Hanzehogeschool fuseren op 1 april 1993 tot de Hanzehogeschool, Hogeschool van Groningen."
      }
    },
    {
      start_date: { year: "1997" },
      text: {
        headline: "Nieuw gebouw faculteit Techniek",
        text: "Op 4 november wordt het nieuwe gebouw van de faculteit Techniek op het Zernike-complex (Zernikeplein 11) geopend."
      }
    },
    {
      start_date: { year: "2004" },
      text: {
        headline: "Instituut of Life Science & Technology",
        text: "Met 13 lectoraten krijgt de Hanze de mogelijkheid voor opleidingen om samen een eigen school te vormen; hieruit ontstaat het Instituut of Life Science & Technology (ILST)."
      }
    },
    {
      start_date: { year: "2008" },
      text: {
        headline: "Van DoorenVeste",
        text: "Het gebouw van de faculteit Techniek wordt vernoemd naar oud-directeur en verzetsstrijder P.H.E. van Dooren (1899-1944): Van DoorenVeste."
      }
    },
    {
      start_date: { year: "2010" },
      text: {
        headline: "Start Hanze Honours College",
        text: "Het Hanze Honours College gaat voor het eerst van start, mogelijk gemaakt door het Sirius Programma."
      }
    },
    {
      start_date: { year: "2015" },
      text: {
        headline: "Opening EnTranCe",
        text: "Op 13 oktober wordt het Energy Transition Centre (EnTranCe) geopend, in aanwezigheid van koning Willem-Alexander."
      }
    },
    {
      start_date: { year: "2023" },
      text: {
        headline: "Een jaar voor de naamswijziging",
        text: "Voorbeeldtekst/placeholder: nog aan te vullen met inhoud over dit jaar."
      }
    },
    {
      start_date: { year: "2024" },
      text: {
        headline: "De Hanzehogeschool wordt 'De Hanze'",
        text: "De Hanzehogeschool stapt over naar de naam De Hanze, met een nieuw logo. Ook worden er verbouwingen uitgevoerd aan de H-vleugel van Van DoorenVeste."
      }
    },
    {
      start_date: { year: "2026" },
      text: {
        headline: "Clustervorming",
        text: "De scholen gaan over naar clusters; het Instituut Life Science & Technology wordt opgenomen in de cluster Engineering, Life Sciences & ICT."
      }
    }
  ]
};

window.timeline = new TL.Timeline("timeline-embed", timelineData);

/* ============================================================
   KAART
   ============================================================ */

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

/* Alle locaties staan nu actief (niet meer in commentaar), zodat alle
   pinpoints op de kaart te zien zijn — ook de plekken waar nog geen
   volledige tekst voor is. Bij die plekken staat een korte samenvatting
   in dezelfde stijl als de uitgewerkte locaties, gebaseerd op de
   meegegeven brondocumenten. Deze teksten mogen later verder worden
   uitgebreid/gecontroleerd. */

const locations = [
  {
    name: "Van Doorenveste (ZP11)",
    coords: [53.2409950927156, 6.533645891170895],
    paragraph_one: "Het Van Doorenveste gebouw op het Zernike Campus (Zernikeplein 11) is vernoemd naar oud directeur MTS (Middelbare Technische School) en lid van het verzet Pieter Hermanus Everhardus van Dooren (1899-1944).",
    image_one: "./images/b0a41e61c84bfc711971b7ba3a1805a6vandooren.jpeg",
    sourceimage_one: "“Pieter Hermanus Everhardus van Dooren.” 2022. Oorlogsgravenstichting. 2022. https://oorlogsgravenstichting.nl/personen/35112/pieter-hermanus-everhardus-van-dooren.",
    paragraph_two: "P.H.E. van Dooren is directeur geweest van Academie Minerva (1925-1943) (Academie Minerva (2), 1829 - 1978) en de MTS (Middelbare Technische School).",
    image_two: "./images/1986_04671_mtsacademieminerva.jpg",
    sourceimage_two: "“M.T.S. ‘Academie Minerva’ En Zeevaartschool, Groningen, Luchtfoto.” 2026. Beeldbank Groningen. 2026. https://www.beeldbankgroningen.nl/beelden/detail/b9242965-1fa0-8454-e19e-cc70be2934ec/media/5eceba86-79d6-90d5-2a75-a01c3e32e491?mode=detail&view=horizontal&q=zeevaartschool%20groningen&rows=1&page=4",
    paragraph_three: "Het schoolgebouw van de scheepvaartschool en MTS (Middelbare Technische School), wat lag aan de Petrus Driessenstraat 3, speelde een belangrijke rol in de tweede wereldoorlog. Dit schoolgebouw ving leerlingen van andere scholen op en werd gebruikt door het verzet. Onderduikers werden opgevangen in de kelders van de school en door docenten en studenten werden er illegale kranten verspreid en persoonsbewijzen geregeld. Beide directieleden van de zeevaartschool en het MTS waren ook verzetsstrijders; Waaronder de directeur P.H.E. van Dooren. P.H.E. van Dooren heeft geleefd van 1899 tot 1944 en is doodgeschoten door 'foute' politieman Stienus Bertus van Wijnen tijdens de tweede wereldoorlog (“Dooren, Van, Pieter Hermannus Everhardus - TracesOfWar.nl” 2026). Later in 2004 toen de school inmiddels 13 lectoraten had gekregen volgde er de mogelijkvoor om samen een school binnen de Hanze op te richten. Hierbij kwam ook het Instituur of Life Science & Technology (ILST) op. In 2008 werd het gebouw van de faculteit Techniek vernoemd naar P.H.E. van Dooren (1899-1944), de oud-directeur van de scheepvaartschool en het MTS (Middelbare Technische School) en verzetslid tijdens de tweede wereldoorlog (1940-1945)."
  },
  {
    name: "Van OlstBorg (ZP7)",
    coords: [53.24030990487017, 6.531974591799187],
    paragraph_one: "De Van OlstBorg (Van OlstToren) (HanzeHogeschool Groningen 2026) op het Zernike Campus (Zernikeplein 7) is vernoemd naar Gerrit van Olst (1734-1807).",
    image_one: "./images/Hanze_University_Groningen_Towerolstborg.jpg",
    sourceimage_one: "“File:Hanze University Groningen Tower.jpg - Wikimedia Commons.” 2022. Wikimedia.org. 2022. https://commons.wikimedia.org/wiki/File:Hanze_University_Groningen_Tower.jpg ",
    paragraph_two: "Gerrit van Olst was één van de oprichters van de eerste rechtsvoorganger van de huidige HanzeHogeschool. Van Olst was lid van de Groninger department van het nut (“Marjan Brouwers: Van Meester Tot Master | Groninger Boeken” 2018) en maakte zich sterk voor de oprichting van de Akademie van Teeken-, Bouw- en Zeevaartkunde (9 November, 1797) (Concept7, Groningen Nederland 2026). Op 15 October 1798 volgde de openingsles van de afdeling Bouw- en Zeevaartkunde (“Gevonden in Delpher - Nieuwsblad van Het Noorden” 2026). Vanwege het feit dat veel mensen bereid waren om jaarlijks ‘ene somma van vijf gulden en vijf stuivers’ bij te dragen werd de academie voor ‘schone en nuttige kunsten’ op 1 februari in 1798 een feit. Later (vanaf 1831) werd de onderwijsinstelling ‘Academie Minerva’ genoemd, doordat de kweekschool dertig jaar later van ’t Nut over is gegaan naar het Rijk kreeg de instelling een andere naam. In 1986 zijn beide instellingen opgegaan in de nieuw gevormde Rijkshogeschool Groningen. En door een fusie met de, eveneens in de jaren tachtig ontstane, Hanzehogeschool, varen de twee sinds 1993 onder die vlag verder (Concept7, Groningen Nederland 2026).",
    image_two: "",
    sourceimage_two: "",
    paragraph_three: ""
  },
  {
    name: "Marie KamphuisBorg (ZP23)",
    coords: [53.24211126245972, 6.536600661106534],
    paragraph_one: "De Marie KamphuisBorg op het Zernike Campus (Zernikeplein 23) is vernoemd naar Marie Kamphuis (1907-2004), één van de grondleggers van het maatschappelijk werk in Nederland. Het gebouw huisvest de studie Social Work.",
    image_one: "",
    sourceimage_one: "Buursema, C. (2023, June 19). De namen van de Hanze: waar komen ze vandaan en waarom? HanzeMag. https://hanzemag.nl/de-namen-van-de-hanze-waar-komen-ze-vandaan-en-waarom/",
    paragraph_two: "In 1937 ging Kamphuis aan het werk bij het Centraal Instituut voor Christelijke Sociale Arbeid (CICSA) in Amsterdam. Tijdens de Tweede Wereldoorlog moest ze haar werk in het geheim doen: zonder dat de overheid het wist, zette ze in 1943 een CICSA-vestiging op in Groningen, waarvan ze zelf directeur werd. In 1948 kreeg deze Groningse school de naam Academie voor Sociale en Culturele Arbeid (ASCA).",
    image_two: "",
    sourceimage_two: "Wikipedia-bijdragers. (2026, January 1). Marie Kamphuis. Wikipedia. https://nl.wikipedia.org/wiki/Marie_Kamphuis",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; foto's en exacte bronvermelding kunnen later worden aangevuld."
  },
  {
    name: "Willem-Alexander Sportcentrum (ZP17)",
    coords: [53.24146481154212, 6.53553203412747],
    paragraph_one: "Het Willem-Alexander Sportcentrum (WAS) op het Zernike Campus (Zernikeplein 17) werd in 2010 ontworpen door AGS Architekten en Planners en is vernoemd naar (destijds) Prins Willem-Alexander.",
    image_one: "",
    sourceimage_one: "File:20120816 Willem Alexander Sportcentrum Groningen NL (1).jpg - Wikimedia Commons. (2012, August 16). https://commons.wikimedia.org/wiki/File:20120816_Willem_Alexander_Sportcentrum_Groningen_NL_(1).jpg",
    paragraph_two: "Het sportcentrum wordt gebruikt door studenten en medewerkers van de Hanze en de Rijksuniversiteit Groningen voor sport en bewegen op de campus.",
    image_two: "",
    sourceimage_two: "",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; verdere geschiedenis en foto's kunnen later worden aangevuld."
  },
  {
    name: "BrugsmaBorg (ZP9)",
    coords: [53.2400576467666, 6.532911822789884],
    paragraph_one: "De BrugsmaBorg op het Zernike Campus (Zernikeplein 9), waar de PABO is gehuisvest, is vernoemd naar pedagoog Berend Brugsma (1797-1868).",
    image_one: "",
    sourceimage_one: "Buursema, C. (2023, June 19). De namen van de Hanze: waar komen ze vandaan en waarom? HanzeMag. https://hanzemag.nl/de-namen-van-de-hanze-waar-komen-ze-vandaan-en-waarom/",
    paragraph_two: "Brugsma was een arme, in Groningen geboren wees die onder de hoede kwam van hoogleraar Theodorus van Swinderen. Hij werd op 17-jarige leeftijd hoofd van de school in Euvelgunne en in 1861 de eerste directeur van de Rijkskweekschool te Groningen. Hij staat bekend als één van de onderwijsvernieuwers van zijn tijd en wordt ook wel 'de Nederlandse Pestalozzi' genoemd.",
    image_two: "",
    sourceimage_two: "Wikipedia-bijdragers. (2024, December 3). Berend Brugsma. Wikipedia. https://nl.wikipedia.org/wiki/Berend_Brugsma",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; foto's en verdere details kunnen later worden aangevuld."
  },
  {
    name: "Academie Minerva (Praediniussingel 59)",
    coords: [53.21515791356994, 6.559803142251853],
    paragraph_one: "Academie Minerva aan de Praediniussingel 59 was gevestigd in een scholencomplex aan de Petrus Driessenstraat-omgeving, gebouwd onder architectuur van Jan Wiebenga en Leendert van der Vlugt.",
    image_one: "",
    sourceimage_one: "Wikipedia-bijdragers. (2026, May 5). Academie Minerva. Wikipedia. https://nl.wikipedia.org/wiki/Academie_Minerva",
    paragraph_two: "De MTS (later HTS) en de Hogere Zeevaartschool (HZS) groeiden na de Tweede Wereldoorlog, waardoor er steeds minder ruimte overbleef voor de kunstafdeling van Academie Minerva.",
    image_two: "",
    sourceimage_two: "",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; verdere details en foto's kunnen later worden aangevuld."
  },
  {
    name: "Academie Minerva (Gedempte Zuiderdiep 158)",
    coords: [53.21480003005644, 6.561404797304823],
    paragraph_one: "Academie Minerva aan het Gedempte Zuiderdiep 158 is sinds 1984 de plek voor de kunstopleiding van de Hanze, gevestigd in een gebouw van architect Piet Blom.",
    image_one: "./images/minervagedemptezuiderdiep.jpg",
    sourceimage_one: "Wikipedia contributors. (2026, April 20). Academie Minerva. Wikipedia. https://en.wikipedia.org/wiki/Academie_Minerva",
    paragraph_two: "De academie is in 1798 opgericht in Groningen als school voor kunst, architectuur, bouwkunde en zeevaartkunde. In 1838 werd de organisatie samengevoegd met het Kunstlievend Genootschap onder de naam Minerva. In 1964 werd de kunstnijverheidsschool een zelfstandige Academie voor Beeldende Kunsten (ABK).",
    image_two: "",
    sourceimage_two: "Wikipedia-bijdragers. (2026, May 5). Academie Minerva. Wikipedia. https://nl.wikipedia.org/wiki/Academie_Minerva",
    paragraph_three: "Tegenwoordig biedt Academie Minerva drie hoofdrichtingen: Fine Art, Design en de lerarenopleiding Beeldende Kunst en Vormgeving."
  },
  {
    name: "Wiebenga (Petrus Driessenstraat 3)",
    coords: [53.22789627062452, 6.5675642671979935],
    paragraph_one: "Het Wiebenga-gebouw in de Korrewegbuurt is vernoemd naar Jan Gerko Wiebenga (1886-1974), Nederlands architect en ingenieur, geboren in destijds Nederlands-Indië.",
    image_one: "",
    sourceimage_one: "Buursema, C. (2023, June 19). De namen van de Hanze: waar komen ze vandaan en waarom? HanzeMag. https://hanzemag.nl/de-namen-van-de-hanze-waar-komen-ze-vandaan-en-waarom/",
    paragraph_two: "In 1922 werd Wiebenga benoemd tot directeur van de School voor Nijverheidsonderwijs in Groningen. Eén van zijn eerste taken was het ontwerpen van een nieuw schoolgebouw: in zes weken had hij het ontwerp klaar, en iets meer dan een jaar later was de bouw afgerond.",
    image_two: "",
    sourceimage_two: "Groninger Archieven. (n.d.). Academie Minerva (2), 1829 - 1978. groningerarchieven.nl.",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; verdere details en foto's kunnen later worden aangevuld."
  },
  {
    name: "Prins Claus Conservatorium (Meeuwerderweg 1)",
    coords: [53.21443004896757, 6.577585919906768],
    paragraph_one: "Het Prins Claus Conservatorium aan de Meeuwerderweg is één van de negen conservatoria in Nederland en maakt deel uit van de Hanze als plek voor muziekvakonderwijs.",
    image_one: "",
    sourceimage_one: "Wikipedia-bijdragers. (2026, May 5). Prins Claus Conservatorium. Wikipedia. https://nl.wikipedia.org/wiki/Prins_Claus_Conservatorium",
    paragraph_two: "In 1965 werd het Stedelijk Muzieklyceum van Groningen omgezet in een conservatorium. In 1990 werd het Conservatorium van Leeuwarden opgeheven en overgeheveld naar Groningen. Sinds 2005 draagt het conservatorium de naam van Prins Claus (1926-2002).",
    image_two: "",
    sourceimage_two: "",
    paragraph_three: "Dit is nog een korte samenvatting op basis van de aangeleverde brondocumenten; verdere details en foto's kunnen later worden aangevuld."
  }
];

/* ============================================================
   PANEEL-LOGICA (dashboard-stijl info paneel naast de kaart)
   ============================================================ */

const panel = document.getElementById("paragraph_content");
const placeholderText = document.getElementById("placeholder_text");
const panelKicker = document.getElementById("panel_kicker");

const textboxone = document.getElementById("paragraph_text_one");
const textboxtwo = document.getElementById("paragraph_text_two");
const textboxthree = document.getElementById("paragraph_text_three");
const imageone = document.getElementById("image_uno");
const sourceimageone = document.getElementById("sourceone");
const imagetwo = document.getElementById("image_dos");
const sourceimagetwo = document.getElementById("sourcetwo");

function showLocation(location) {
  panel.classList.remove("placeholder");
  placeholderText.style.display = "none";

  panelKicker.style.display = "block";
  panelKicker.textContent = location.name;

  textboxone.textContent = location.paragraph_one || "";
  textboxtwo.textContent = location.paragraph_two || "";
  textboxthree.textContent = location.paragraph_three || "";

  if (location.image_one) {
    imageone.src = location.image_one;
    imageone.style.display = "block";
  } else {
    imageone.removeAttribute("src");
    imageone.style.display = "none";
  }
  sourceimageone.textContent = location.sourceimage_one || "";

  if (location.image_two) {
    imagetwo.src = location.image_two;
    imagetwo.style.display = "block";
  } else {
    imagetwo.removeAttribute("src");
    imagetwo.style.display = "none";
  }
  sourceimagetwo.textContent = location.sourceimage_two || "";
}

/* Alle pinpoints worden op de kaart getoond, ook de locaties waarvoor
   nog geen volledige tekst is uitgewerkt. */
locations.forEach(location => {
  L.marker(location.coords)
    .addTo(map)
    .bindPopup(`
      <h3>${location.name}</h3>
      <p>${location.paragraph_one ? location.paragraph_one : "Meer informatie volgt binnenkort."}</p>
      ${location.image_one ? `<img src="${location.image_one}" alt="${location.name}" style="width:150px; height:auto; border-radius:6px; margin-bottom:6px;">` : ''}
    `)
    .on('click', () => showLocation(location));
});

/* ============================================================
   SIDEBAR NAVIGATIE: actieve sectie highlighten
   ============================================================ */

const navLinks = document.querySelectorAll('.sidebar nav a');
const trackedSections = ['inleiding', 'timeline', 'kaart', 'lifescience', 'wistjedat']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function setActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

  trackedSections.forEach(section => observer.observe(section));
}

/* Eerste link standaard actief bij laden */
setActiveLink('inleiding');

/* ============================================================
   WIST JE DAT — speelse flip-cards
   Klik op een kaart om hem om te draaien en het antwoord te zien.
   ============================================================ */

document.querySelectorAll('.fact-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});