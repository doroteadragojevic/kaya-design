import { useState } from "react";
import Kontakt from "./Contact";
import "./ServiceDetail.css";
import SectionTabs from "./Sections";

export default function ServiceDetail({ service }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 📌 Definicija podataka za servise
  const servicesData = {
    keramika: {
      title: "Keramičarski radovi",
      description: [
        "Postavljanje keramike: podovi, zidovi, kupaonice, kuhinje, balkoni",
    "Uklanjanje stare keramike i priprema podloge",
    "Polaganje novih pločica na podove i zidove",
    "Dekorativne keramičke i mozaik obloge",
    "Keramičke obloge za kupaonice, kuhinje i balkone",
    "Postavljanje keramike na stepenice",
    "Oblaganje i hidroizolacija bazena keramikom",
    "Obnova i zamjena fuga",
    "Popravak i zamjena oštećenih ili puknutih pločica",
    "Posebna rješenja prema mjeri i dizajnu"
      ],
      images: [
        "/services/keramika/1.jpeg",
        "/services/keramika/2.jpeg",
        "/services/keramika/3.jpeg",
        "/services/keramika/4.jpeg",
        "/services/keramika/5.jpeg",
        "/services/keramika/6.jpeg",
        "/services/keramika/7.jpeg",
        "/services/keramika/8.jpeg",
        "/services/keramika/9.jpeg",

      ]
    },
    mramor: {
      title: "Radovi s mramorom",
      description: [
        "Postavljanje mramora (podovi, kuhinjske radne ploče, kupaonice, stolovi, balkoni)",
    "Uklanjanje starog mramora i postavljanje novog",
    "Mramorne obloge za stepenice i ulazne prostore",
    "Ugradnja i obnova mramornih okvira za liftove",
    "Poliranje, brušenje i obnavljanje površina",
    "Popravak i zamjena oštećenih ili puknutih mramornih elemenata",
    "Dekorativne mramorne obloge za unutarnje i vanjske prostore"
      ],
      images: [
        "/services/mramor/1.jpeg",
        "/services/mramor/2.jpeg",
        "/services/mramor/3.jpeg",
        "/services/mramor/4.jpeg",
        "/services/mramor/12.jpeg",
        "/services/mramor/14.jpeg",
        "/services/mramor/13.jpeg",

      ]
    },
    parket: {
      title: "Parket",
      description: [
        "Postavljanje parketa (laminat, masivni, višeslojni parket)",
    "Uklanjanje starog parketa i priprema podloge",
    "Brušenje, lakiranje i poliranje parketa",
    "Popravak i zamjena oštećenih parketnih dasaka",
    "Postavljanje vodootpornog parketa za kuhinje i kupaonice",
    "Ugradnja parketnih lajsni"
      ],
      images: [
        "/services/parket/1.jpeg",
        "/services/parket/2.jpeg",
        "/services/parket/3.jpeg",
        "/services/parket/4.jpeg"
      ]
    },
    boja: {
  title: "Slikarski i dekorativni radovi",
  description: [
    "Unutarnje bojanje zidova i stropova",
    "Vanjsko bojanje i radovi na izolaciji fasade",
    "Dekorativne tehnike bojanja (sedef, efekt, uzorci)",
    "Postavljanje i uklanjanje tapeta",
    "Ugradnja i dekorativne primjene staklenog tekstila",
    "Gletanje, žbukanje i priprema podloge",
    "Bojanje vrata, prozora i drvenih površina",
    "Projekti za urede, trgovine i stambene prostore",
    "Savjetovanje o bojama i dizajnu prilagođenom prostoru"
  ],
  images: [
    "/services/boja/1.jpeg",
    "/services/boja/2.jpeg",
    "/services/boja/3.jpeg",
    "/services/boja/4.jpeg",
    "/services/boja/5.jpeg",
    "/services/boja/6.jpeg",
    "/services/boja/7.jpeg",
    "/services/boja/8.jpeg",
    "/services/boja/9.jpeg",
    "/services/boja/10.jpeg",
    "/services/boja/12.jpeg",
  ]
},
vanjski_radovi: {
  title: "Vanjski radovi i uređenje pročelja",
  description: [
    "Vanjsko bojanje",
    "Toplinska i hidroizolacija (sustavi fasadne izolacije)",
    "Postavljanje i obnova vanjskih obloga",
    "Dekorativno žbukanje i završne obloge pročelja",
    "Oblaganje kamenom, opekom i kompozitnim panelima",
    "Dekorativni elementi za balkone, prozore i pročelja",
    "Popravci i održavanje oštećenih vanjskih površina",
    "Rješenja za uređenje okoliša usklađena s pročeljem"
  ],
  images: [
    "/services/vanjski_radovi/1.jpeg",
    "/services/vanjski_radovi/2.jpeg"
  ]
},


  };

  const selected = servicesData[service];
  if (!selected) return <h2>Servis nije pronađen</h2>;

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(
      (lightboxIndex - 1 + selected.images.length) % selected.images.length
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex + 1) % selected.images.length);
  };

  return (
      
    <div className="service-detail-container">
      <h1>{selected.title}</h1>
      
      <ul>
        {selected.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="service-gallery">
        {selected.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${selected.title} slika ${i + 1}`}
            className="thumbnail"
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <span className="close">&times;</span>
          <span className="arrow left" onClick={handlePrev}>
            &#10094;
          </span>
          <img
            src={selected.images[lightboxIndex]}
            alt={`Slika ${lightboxIndex + 1}`}
            className="lightbox-image"
          />
          <span className="arrow right" onClick={handleNext}>
            &#10095;
          </span>
        </div>
      )}

      <Kontakt />
    </div>
  );
}
