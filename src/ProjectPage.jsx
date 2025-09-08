import { useState } from "react";
import Kontakt from "./Contact";
import "./ProjectPage.css";

export default function ProjectPage({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const projectsData = {
    rixos: {
      title: "Rixos Hotel Dubrovnik",
      details: {
        projectDetails: [
          "Ugradnja i završna obrada parketa",
          "Postavljanje keramičkih pločica u sobama i zajedničkim prostorima",
          "Izrada i obrada unutarnje žbuke",
          "Radovi na suhoj gradnji (pregradni zidovi, spušteni stropovi)",
          "Izvedba vanjske fasade",
          "Ugradnja i poliranje mramora",
          "Bojenje unutarnjih i vanjskih površina",
          "Postavljanje tapeta u sobama i hodnicima",
          "Dekorativno bojenje zidova i detalja",
          "Ugradnja staklenog tekstila"
        ],
        investor: "Rixos Hotels",
        location: "Dubrovnik, Hrvatska",
      },
      gallery: [
        "/kaya-design/projekti/rixos/519848187.jpg",
        "/kaya-design/projekti/rixos/519848290.jpg",
        "/kaya-design/projekti/rixos/710720145.jpg",
        "/kaya-design/projekti/rixos/712613436.jpg",
        "/kaya-design/projekti/rixos/712613462.jpg",
        "/kaya-design/projekti/rixos/712616974.jpg",
      ],
    },
  };

  const selected = projectsData[project];
  if (!selected) return <h2>Projekt nije pronađen</h2>;

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(
      (lightboxIndex - 1 + selected.gallery.length) % selected.gallery.length
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((lightboxIndex + 1) % selected.gallery.length);
  };

  return (
    <div className="project-detail-container">
      <h1>{selected.title}</h1>

      <div className="project-details">
        <strong>Detalji:</strong>
        <ul>
          {Array.isArray(selected.details.projectDetails) ? (
            selected.details.projectDetails.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          ) : (
            <p>{selected.details.projectDetails}</p>
          )}
        </ul>
        <p>
          <strong>Lokacija:</strong> {selected.details.location}
        </p>
      </div>

      <div className="project-gallery">
        {selected.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Projekt ${selected.title} slika ${i + 1}`}
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
            src={selected.gallery[lightboxIndex]}
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
