import { useEffect, useState } from "react";

export default function Home() {
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
    console.log("Intentando conectar a:", backendUrl);

    fetch(backendUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then((data) => {
        console.log("Respuesta recibida:", data);
        setMensaje(data);
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
        setError(`Error: ${error.message}`);
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        {error ? error : mensaje || "Cargando..."}
      </h1>
      <p className="text-sm text-gray-600">
        URL del backend:{" "}
        {process.env.NEXT_PUBLIC_BACKEND_URL || "No configurada"}
      </p>
    </main>
  );
}
