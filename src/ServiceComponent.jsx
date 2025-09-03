export default function ServiceComponent({ src, alt, title, page, onChangePage }) {
  return (
        <div 
      className="service-slika" 
      onClick={() => {
        if (onChangePage && page) {
          onChangePage(page);   // sad će poslati npr. "keramika"
        }
      }}
    >

      <img src={src} alt={alt} />
      {title && (
        <div className="service-overlay">
          <h3 style={{ whiteSpace: 'pre-line' }}>{title}</h3>
        </div>
      )}
    </div>
  );
}
