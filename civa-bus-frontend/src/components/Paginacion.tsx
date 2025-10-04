interface Props {
    pagina: number;
    totalPaginas: number;
    onCambiarPagina: (nuevaPagina: number) => void;
}

export const Paginacion = ({ pagina, totalPaginas, onCambiarPagina }: Props) => {
    if (totalPaginas <= 1) return null;


    const generarRango = () => {
        const rango: (number | string)[] = [];

        if (pagina > 2) {
            rango.push(0);
            if (pagina > 3) rango.push("…");
        }

        const inicio = Math.max(0, pagina - 2);
        const fin = Math.min(totalPaginas - 1, pagina + 2);
        for (let i = inicio; i <= fin; i++) {
            rango.push(i);
        }

        if (pagina < totalPaginas - 3) {
            if (pagina < totalPaginas - 4) rango.push("…");
            rango.push(totalPaginas - 1);
        }

        return rango;
    };

    return (
        <div className="flex justify-center mt-6 flex-wrap gap-2">
            <nav className="flex items-center flex-wrap gap-2">
                <button
                    onClick={() => onCambiarPagina(pagina - 1)}
                    disabled={pagina === 0}
                    className={`px-3 py-1 rounded-lg ${pagina === 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    ←
                </button>

                {generarRango().map((item, idx) =>
                    item === "…" ? (
                        <span key={`ellipsis-${idx}`} className="px-3 py-1 text-gray-500">
                            …
                        </span>
                    ) : (
                        <button
                            key={item}
                            onClick={() => onCambiarPagina(item as number)}
                            className={`px-3 py-1 rounded-lg font-medium ${item === pagina
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {(item as number) + 1}
                        </button>
                    )
                )}

                <button
                    onClick={() => onCambiarPagina(pagina + 1)}
                    disabled={pagina === totalPaginas - 1}
                    className={`px-3 py-1 rounded-lg ${pagina === totalPaginas - 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    →
                </button>
            </nav>
        </div>
    );
}
