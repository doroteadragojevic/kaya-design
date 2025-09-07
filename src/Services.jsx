import ServiceComponent from "./ServiceComponent";
import Kontakt from "./Contact";
import SectionTabs from "./Sections";

export default function Usluge({ onChangePage, activePage }) {
  const slike = [
    { src: '/services/keramika/9.jpeg', alt: 'KERAMIKA', title: 'POSTAVLJANJE \nKERAMIKE', page: 'keramika' },
    { src: '/fasada.jpg', alt: 'FASADA', title: 'FASADA', page: 'fasada' },
    { src: '/services/parket/2.jpeg', alt: 'POSTAVLJANJE PARKETA', title: 'POSTAVLJANJE \nPARKETA', page: 'parket' },
    { src: '/mramor.jpg', alt: 'POSTAVLJANJE I OBRADA MRAMORA', title: 'POSTAVLJANJE I \nOBRADA \nMRAMORA', page: 'mramor' },
    { src: '/suha_gradnja.jpg', alt: 'SUHA GRADNJA', title: 'SUHA \nGRADNJA', page: 'suha_gradnja' },
    { src: '/zbukanje.jpg', alt: 'ŽBUKA', title: 'ŽBUKA', page: 'zbukanje' },
    { src: '/boja.jpg', alt: 'BOJA', title: 'BOJA', page: 'boja' },
  ];

  return (
    <section>
  <SectionTabs />
      <p className="tab-heading">Interijer</p>

      <div className="grid-slike">
        {slike.map((slika, i) => (
          <ServiceComponent
            key={i}
            {...slika}
            page={slika.page}     
          />
        ))}
      </div>

      <Kontakt />
    </section>
  );
}
