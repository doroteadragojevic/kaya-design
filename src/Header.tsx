export default function Header({ onChangePage }) {
  return (
    <header>
      <div className="logo">
        <img 
          src="/logo.jpeg" 
          alt="Logo" 
          className="logo-img"
        />
      </div>
      <nav>
        <button onClick={() => onChangePage('projekti')}>PROJEKTI</button>
        <button onClick={() => onChangePage('gradevinska')}>USLUGE</button>
        <button onClick={() => onChangePage('kontakt')}>KONTAKT</button>
      </nav>
      <div className="languages">
        {/* <button>HR</button>
        <button>EN</button> */}
        
      </div>
    </header>
  );
}
