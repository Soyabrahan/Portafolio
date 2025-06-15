import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Tecnologias = dynamic(() => import("../components/Tecnologias"), {
  ssr: false,
});
const SobreMi = dynamic(() => import("../components/SobreMi"), { ssr: false });
const ProyectosDestacados = dynamic(
  () => import("../components/ProyectosDestacados"),
  { ssr: false }
);
const Contacto = dynamic(() => import("../components/Contacto"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

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
