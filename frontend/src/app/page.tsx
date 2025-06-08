import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tecnologias from "../components/Tecnologias";
import SobreMi from "../components/SobreMi";
import ProyectosDestacados from "../components/ProyectosDestacados";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <Tecnologias />
        <SobreMi />
        <ProyectosDestacados />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
