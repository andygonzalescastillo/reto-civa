const API_URL = import.meta.env.VITE_API_URL;
const AUTH_URL = API_URL + import.meta.env.VITE_AUTH_ENDPOINT;
const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || "token";

export const login = async (username: string, password: string): Promise<string> => {
  const res = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",   
    },
    body: JSON.stringify({ username, password }), 
  });

  if (!res.ok) throw new Error("Credenciales inválidas");

  const data = await res.json();
  const token = data.token;

  localStorage.setItem(TOKEN_KEY, token); 
  return token;
};

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);

export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
