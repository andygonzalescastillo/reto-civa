import { useEffect, useState } from "react";
import type { Bus } from "../types/Bus";
import { obtenerBuses } from "../services";

export const useBuses = (pagina: number, tamaño: number, token: string | null) => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setBuses([]);
      setTotalPaginas(0);
      setCargando(false);
      return;
    }

    setCargando(true);
    setError(null);

    obtenerBuses(pagina, tamaño)
      .then((data) => {
        setBuses(data.content);
        setTotalPaginas(data.totalPages);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [pagina, tamaño, token]);

  return { buses, totalPaginas, cargando, error };
};
