import Kontakt from "./Contact";

export default function ServiceDetail({ service }) {

  // 📌 Definicija podataka za servise
  const servicesData = {
    keramika: {
      title: "Keramičarski radovi",
      description: [
        "Postavljanje pločica na pod i zid",
        "Izrada dekorativnih mozaika",
        "Popravci i zamjene oštećenih pločica"
      ],
      images: [
        "/services/keramika/1.jpg",
        "/services/keramika/2.jpg",
        "/services/keramika/3.jpg"
      ]
    },
    mramor: {
      title: "Radovi s mramorom",
      description: [
        "Postavljanje mramornih ploča",
        "Poliranje i obrada",
        "Ugradnja kuhinjskih radnih ploča"
      ],
      images: [
        "/services/mramor/1.jpg",
        "/services/mramor/2.jpg",
        "/services/mramor/3.jpg"
      ]
    }
  };

  const selected = servicesData[service];
  if (!selected) return <h2>Servis nije pronađen</h2>;

  return (
    <div className="service-detail-container">
      <h1>{selected.title}</h1>
      <ul>
        {selected.description.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="service-images">
        {selected.images.map((img, i) => <img key={i} src={img} alt="" />)}
      </div>
      <Kontakt />
    </div>
  );
}
