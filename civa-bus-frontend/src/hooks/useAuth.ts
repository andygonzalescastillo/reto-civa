import { useState, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
    setCargando(false);
  }, []);

  const iniciarSesion = async (username: string, password: string) => {
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Error en login, código " + res.status);

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, iniciarSesion, cerrarSesion, cargando };
}
