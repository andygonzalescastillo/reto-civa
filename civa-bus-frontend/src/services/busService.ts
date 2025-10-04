import { getToken, logout } from "./authService";

const API_URL = import.meta.env.VITE_API_URL + import.meta.env.VITE_BUS_ENDPOINT;

export const obtenerBuses = async (pagina: number, tamaño: number) => {
  const token = getToken();
  const res = await fetch(`${API_URL}?page=${pagina}&size=${tamaño}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401 || res.status === 403) {
    logout();
    window.location.reload();
    return;
  }

  if (!res.ok) throw new Error("Error al obtener buses");
  return res.json();
};

export const obtenerBusPorId = async (id: number) => {
  const token = getToken();
  const res = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401 || res.status === 403) {
    logout();
    window.location.reload();
    return;
  }

  if (!res.ok) throw new Error("Error al obtener bus");
  return res.json();
};
