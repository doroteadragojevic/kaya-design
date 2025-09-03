export default function ProjektSlika({ src, alt, title, location }) {
  return (
    <div className="projekt-slika">
      <img src={src} alt={alt} />
      {title && (
        <div className="overlay">
          <h3>{title}</h3>
          <p>Location: {location}</p>
        </div>
      )}
    </div>
  );
}
