import { useNavigate } from "react-router-dom";

export default function ProjektSlika({ src, alt, title, location, page }) {
  const navigate = useNavigate();

  return (
    <div
      className="projekt-slika"
      onClick={() => {
        if (page) {
          navigate(`/${page}`);
        }
      }}
    >
      <img src={src} alt={alt} />
      {title && (
        <div className="overlay">
          <h3>{title}</h3>
          <p>Lokacija: {location}</p>
        </div>
      )}
    </div>
  );
}
