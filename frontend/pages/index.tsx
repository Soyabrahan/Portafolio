import { useEffect, useState } from "react";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}`)
      .then((res) => res.text())
      .then((data) => setMensaje(data));
  }, []);

  return (
    <main>
      <h1>{mensaje || "Cargando..."}</h1>
    </main>
  );
}
