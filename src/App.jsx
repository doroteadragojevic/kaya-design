import { useState } from 'react';
import Header from './Header';
import Projekti from './Projects';
import Kontakt from './Contact';
import Footer from './Footer';
import Usluge from './Services';
import ServiceDetail from './Service';

export default function App() {
  const [page, setPage] = useState('projekti');

  return (
    <>
      <Header onChangePage={setPage} />
   
      <main>
        {page === 'projekti' && (
          <Projekti onChangePage={setPage} activePage={page} />
        )}
        {page === 'kontakt' && <Kontakt />}
        {page === 'gradevinska' && <Usluge onChangePage={setPage} />}
        {page === 'keramika' && <ServiceDetail service="keramika" />}
{page === 'mramor' && <ServiceDetail service="mramor" />}
      </main>

      <Footer />
    </>
  );
}
