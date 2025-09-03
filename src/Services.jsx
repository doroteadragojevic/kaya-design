import ServiceComponent from "./ServiceComponent";
import Kontakt from "./Contact";

export default function Usluge({ onChangePage, activePage }) {
  const slike = [
    { src: '/keramika.jpg', alt: 'KERAMIKA', title: 'POSTAVLJANJE \nKERAMIKE', page: 'keramika' },
    { src: '/fasada.jpg', alt: 'FASADA', title: 'FASADA', page: 'fasada' },
    { src: '/parket.jpg', alt: 'POSTAVLJANJE PARKETA', title: 'POSTAVLJANJE \nPARKETA', page: 'parket' },
    { src: '/mramor.jpg', alt: 'POSTAVLJANJE I OBRADA MRAMORA', title: 'POSTAVLJANJE I \nOBRADA \nMRAMORA', page: 'mramor' },
    { src: '/suha_gradnja.jpg', alt: 'SUHA GRADNJA', title: 'SUHA \nGRADNJA', page: 'suha_gradnja' },
    { src: '/zbukanje.jpg', alt: 'ŽBUKA', title: 'ŽBUKA', page: 'zbukanje' },
    { src: '/boja.jpg', alt: 'BOJA', title: 'BOJA', page: 'boja' },
  ];

  return (
    <section>
      <p className="tab-heading">Interijer</p>

      <div className="grid-slike">
        {slike.map((slika, i) => (
          <ServiceComponent
            key={i}
            {...slika}
            page={slika.page}     
            onChangePage={onChangePage} // klik šalje prema App
          />
        ))}
      </div>

      <Kontakt />
    </section>
  );
}
