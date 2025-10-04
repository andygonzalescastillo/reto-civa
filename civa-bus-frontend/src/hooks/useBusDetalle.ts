import { useState } from "react";
import type { Bus } from "../types/Bus";
import { obtenerBusPorId } from "../services";
import { getToken } from "../services";

export const useBusDetalle = () => {
  const [busSeleccionado, setBusSeleccionado] = useState<Bus | null>(null);
  const [cargandoDetalle, setCargandoDetalle] = useState(false);
  const [errorDetalle, setErrorDetalle] = useState<string | null>(null);

  const verDetalle = (id: number) => {
    const token = getToken();
    if (!token) {
      return;
    }

    setCargandoDetalle(true);
    setErrorDetalle(null);

    obtenerBusPorId(id)
      .then((data) => {
        setBusSeleccionado(data);
        setCargandoDetalle(false);
      })
      .catch((err) => {
        setErrorDetalle(err.message);
        setCargandoDetalle(false);
      });
  };

  return { busSeleccionado, cargandoDetalle, errorDetalle, verDetalle, setBusSeleccionado };
};
