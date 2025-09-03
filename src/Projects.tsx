import ProjektSlika from './ProjectContainer';
import SectionTabs from './Sections';
import Kontakt from './Contact';


export default function Projekti({ onChangePage, activePage }) {
  const slike = [
    { src: '/CatherineKwongDesign_Minimalistkitchen-62f16de7875349b984e7d4e4686aef05.jpeg', alt: 'Kuća 1', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
    { src: '/Dekorativne-zidne-obloge-11.jpg', alt: 'Kuća 2', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
    { src: '/LaserCut_hr_dekorativna_fasada_2.jpg', alt: 'Villa Maslinica', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
    { src: '/Mramorni-pod-u-poslovnom-hotelu.jpg', alt: 'Kupaonica', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
    { src: '/parquete-02.jpg', alt: 'Kuhinja', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
    { src: '/sl-1.jpg', alt: 'Dnevni boravak', title: 'Villa Maslinica', location: 'Maslinica, Šolta' },
  ];

  return (
    <section>

        <SectionTabs onChangePage={onChangePage} activePage={activePage} />

      <div className="grid-slike">
        {slike.map((slika, i) => (
          <ProjektSlika key={i} {...slika} />
        ))}
      </div>
      <Kontakt />

    </section>
  );
}
