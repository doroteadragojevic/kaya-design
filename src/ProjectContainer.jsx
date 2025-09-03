export default function ProjektSlika({ src, alt, title, location, page, onChangePage }) {
  return (
    <div className="projekt-slika"
    onClick={() => {
        if (onChangePage && page) {
          onChangePage(page);   // sad će poslati npr. "keramika"
        }
      }}>
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
