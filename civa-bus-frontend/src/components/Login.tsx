import { useState } from "react";

interface Props {
  onLogin: (username: string, password: string) => Promise<void>;
}

export const Login = ({ onLogin }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError("El usuario es obligatorio");
      return;
    }
    if (!password.trim()) {
      setError("La contraseña es obligatoria");
      return;
    }

    try {
      setCargando(true);
      setError(null);
      await onLogin(username, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes("403")) {
          setError("Usuario o contraseña incorrectos");
        } else if (err.message.includes("500")) {
          setError("Usuario o contraseña incorrectos");
        } else {
          setError("No se pudo iniciar sesión. Verifica tu conexión.");
        }
      } else {
        setError("Error inesperado al iniciar sesión.");
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <button
          onClick={handleSubmit}
          disabled={cargando}
          className={`w-full py-2 rounded-lg text-white font-semibold transition 
            ${cargando ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
          `}
        >
          {cargando ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}
