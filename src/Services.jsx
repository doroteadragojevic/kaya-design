import ServiceComponent from "./ServiceComponent";
import Kontakt from "./Contact";
import SectionTabs from "./Sections";

export default function Usluge({ onChangePage, activePage }) {
  const slike = [
    { src: '/kaya-design/services/keramika/9.jpeg', alt: 'KERAMIKA', title: 'POSTAVLJANJE \nKERAMIKE', page: 'keramika' },
    { src: '/kaya-design/services/parket/2.jpeg', alt: 'POSTAVLJANJE PARKETA', title: 'POSTAVLJANJE \nPARKETA', page: 'parket' },
    { src: '/kaya-design/services/mramor/2.jpeg', alt: 'POSTAVLJANJE I OBRADA MRAMORA', title: 'POSTAVLJANJE I \nOBRADA \nMRAMORA', page: 'mramor' },
    { src: '/kaya-design/services/vanjski_radovi/2.jpeg', alt: 'VANJSKI RADOVI I UREDENJE PROCELJA', title: 'VANJSKI RADOVI I \nUREĐENJE PROČELJA', page: 'vanjski_radovi' },
    { src: '/kaya-design/services/boja/1.jpeg', alt: 'SLIKARSKI I \nDEKORATIVNI RADOVI', title: 'SLIKARSKI I \nDEKORATIVNI RADOVI', page: 'boja' },
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
