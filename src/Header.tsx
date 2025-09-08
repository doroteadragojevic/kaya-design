import { Link } from "react-router-dom";

export default function Header({ onChangePage }) {
  return (
    <header>
      <div className="logo">
        <img 
          src="/kaya-design/logo.jpeg" 
          alt="Logo" 
          className="logo-img"
        />
      </div>
      {/*<h1 className="header-h1">KAYA DESIGN</h1> */}
      <nav>
        <Link to="/" className="nav-btn">PROJEKTI</Link>
<Link to="/gradevinska" className="nav-btn">USLUGE</Link>
<Link to="/kontakt" className="nav-btn">KONTAKT</Link>
      </nav>
      <div className="languages">
        {/* <button>HR</button>
        <button>EN</button> */}
        
      </div>
    </header>
  );
}
