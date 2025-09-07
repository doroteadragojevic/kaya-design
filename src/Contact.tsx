export default function Kontakt() {
  return (
    <section className="kontakt-container">
      <div className="kontakt-info">
        <img 
          src="/logo.jpeg" 
          alt="Logo" 
          className="logo-img"
        />
        {/*        <p><strong>Headquarters:</strong> Mike Tripala 10, 21000 Split HR</p>
 */}
        <p><strong>Phone:</strong> +385(0)21 246830</p>
        <p><strong>Whatsapp:</strong> +385(0)984648447</p>
        <p><strong>E-mail:</strong> info@haros.hr</p>
        {/*<p><strong>OIB:</strong> 75350831376</p> */}
        <div className="social-icons">
          {/* Zamijeni linkovima */}
          <a href="https://www.instagram.com/kayadesign.hr/"><img src="/instagram.jpg" alt="Instagram" /></a>
         {/* <a href="#"><img src="/linked_in_logo.png" alt="LinkedIn" /></a> */}
          {/*<a href="#"><img src="/facebook-icon.jpg" alt="Facebook" /></a> */}
        </div>
      </div>
     

{/*
      <form className="kontakt-forma" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Ime:" required />
        <input type="email" placeholder="E-mail:" required />
        <textarea placeholder="Poruka:" rows="5" required></textarea>
        <button type="submit">POŠALJI</button>
      </form>
      */}
    </section>
    
  );
}
