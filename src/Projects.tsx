import ProjektSlika from './ProjectContainer';
import SectionTabs from './Sections';
import Kontakt from './Contact';


export default function Projekti({ onChangePage, activePage }) {
  const slike = [
    { src: '/projekti/rixos/710720145.jpg', alt: 'Rixos', title: 'Rixos Hotel', location: 'Dubrovnik', page: 'rixos' },
  ];

  return (
    <section>

        <SectionTabs onChangePage={onChangePage} activePage={activePage} />

      <div className="grid-slike">
        {slike.map((slika, i) => (
          <ProjektSlika 
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
