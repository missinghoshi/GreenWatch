import { useEffect, useState } from "react";

import API from "../services/api";

import { Reporte } from "../types/reporte";

interface Props {
  refresh: boolean;
}

export default function ReporteList({
  refresh
}: Props) {

  const [reportes, setReportes] =
    useState<Reporte[]>([]);

  useEffect(() => {

    obtenerReportes();

  }, [refresh]);

  const obtenerReportes = async () => {

    try {

      const response =
        await API.get<Reporte[]>("/reportes");

      setReportes(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div>

      {
        reportes.map((reporte) => (

          <div key={reporte.id}>

            <h3>
              {reporte.titulo}
            </h3>

            <p>
              {reporte.descripcion}
            </p>

          </div>
        ))
      }

    </div>
  );
}