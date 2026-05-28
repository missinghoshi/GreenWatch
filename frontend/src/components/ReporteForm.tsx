import { useState } from "react";

import API from "../services/api";

interface Props {
  onReporteCreado: () => void;
}

export default function ReporteForm({
  onReporteCreado
}: Props) {

  const [titulo, setTitulo] =
    useState<string>("");

  const [descripcion, setDescripcion] =
    useState<string>("");

  const enviarReporte = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {

    e.preventDefault();

    try {

      await API.post("/reportes", {
        titulo,
        descripcion
      });

      alert("Reporte enviado");

      onReporteCreado();

      setTitulo("");

      setDescripcion("");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <form onSubmit={enviarReporte}>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) =>
          setTitulo(e.target.value)
        }
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(e.target.value)
        }
      />

      <button type="submit">
        Crear Reporte
      </button>

    </form>
  );
}