import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Projekti from "./Projects";
import Kontakt from "./Contact";
import Footer from "./Footer";
import Usluge from "./Services";
import ServiceDetail from "./Service";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Projekti />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/gradevinska" element={<Usluge />} />
          <Route path="/keramika" element={<ServiceDetail service="keramika" />} />
          <Route path="/parket" element={<ServiceDetail service="parket" />} />
          <Route path="/mramor" element={<ServiceDetail service="mramor" />} />
          <Route path="/rixos" element={<ProjectPage project="rixos" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
