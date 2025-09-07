import { useNavigate } from "react-router-dom";

export default function ServiceComponent({ src, alt, title, page }) {
  const navigate = useNavigate();

  return (
    <div
      className="service-slika"
      onClick={() => {
        if (page) {
          navigate(`/${page}`);
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <img src={src} alt={alt} />
      {title && (
        <div className="service-overlay">
          <h3 style={{ whiteSpace: "pre-line" }}>{title}</h3>
        </div>
      )}
    </div>
  );
}
