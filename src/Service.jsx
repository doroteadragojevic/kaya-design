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
        "Postavljanje mramornih ploča",
        "Poliranje i obrada",
        "Ugradnja kuhinjskih radnih ploča"
      ],
      images: [
        "/services/mramor/1.jpg",
        "/services/mramor/2.jpg",
        "/services/mramor/3.jpg"
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
    }
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
