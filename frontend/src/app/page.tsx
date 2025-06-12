import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tecnologias from "../components/Tecnologias";
import SobreMi from "../components/SobreMi";
import ProyectosDestacados from "../components/ProyectosDestacados";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <main className="container">
        <Hero />
        <Tecnologias />
        <SobreMi />
        <ProyectosDestacados />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
