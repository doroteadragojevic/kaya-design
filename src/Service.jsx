import { useState } from "react";
import Kontakt from "./Contact";
import "./ServiceDetail.css";

export default function ServiceDetail({ service }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 📌 Definicija podataka za servise
  const servicesData = {
    keramika: {
      title: "Keramičarski radovi",
      description: [
        "Postavljanje pločica na pod i zid",
        "Izrada dekorativnih mozaika",
        "Popravci i zamjene oštećenih pločica"
      ],
      images: [
        "/services/keramika/1.jpg",
        "/services/keramika/2.jpg",
        "/services/keramika/3.jpg"
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
