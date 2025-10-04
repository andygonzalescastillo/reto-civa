import { useState } from "react";
import {
  TablaBuses, ModalDetalleBus, Paginacion, SelectorTamañoPagina, Login
} from "./components";
import { useBusDetalle, useBuses, useAuth } from "./hooks";

function App() {
  const { token, iniciarSesion, cerrarSesion, cargando } = useAuth();
  const [pagina, setPagina] = useState(0);
  const [tamaño, setTamaño] = useState(5);

  const { buses, totalPaginas, cargando: cargandoBuses, error } = useBuses(
    pagina,
    tamaño,
    token
  );
  const {
    busSeleccionado,
    cargandoDetalle,
    verDetalle,
    setBusSeleccionado,
  } = useBusDetalle();

  if (cargando) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-semibold text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return <Login onLogin={iniciarSesion} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-start justify-center py-10">
      <div className="bg-white w-full max-w-6xl shadow-2xl rounded-2xl p-8 border border-gray-200">
        <div className="flex justify-between mb-6 items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center">
            Gestión de Buses
          </h1>
          <button
            onClick={cerrarSesion}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>

        {cargandoBuses ? (
          <p className="text-blue-600 font-medium text-center">
            Cargando buses...
          </p>
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <>
            <div className="flex justify-start mb-4">
              <SelectorTamañoPagina
                tamaño={tamaño}
                onCambiarTamaño={setTamaño}
              />
            </div>

            <TablaBuses buses={buses} onVerDetalle={verDetalle} />

            <div className="mt-6">
              <Paginacion
                pagina={pagina}
                totalPaginas={totalPaginas}
                onCambiarPagina={setPagina}
              />
            </div>
          </>
        )}
      </div>

      <ModalDetalleBus
        bus={busSeleccionado}
        onCerrar={() => setBusSeleccionado(null)}
        cargando={cargandoDetalle}
      />
    </div>
  );
}

export default App;
