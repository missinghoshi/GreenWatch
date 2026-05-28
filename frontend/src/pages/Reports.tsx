import { useState } from "react";

import ReporteForm from "../components/ReporteForm";

import ReporteList from "../components/ReporteList";

export default function Reports() {

  const [refresh, setRefresh] =
    useState<boolean>(false);

  const actualizarLista = (): void => {

    setRefresh(!refresh);

  };

  return (

    <div>

      <h1>
        GreenWatch Reports
      </h1>

      <ReporteForm
        onReporteCreado={actualizarLista}
      />

      <ReporteList
        refresh={refresh}
      />

    </div>
  );
}