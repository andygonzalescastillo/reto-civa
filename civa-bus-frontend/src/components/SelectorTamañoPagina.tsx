interface Props {
    tamaño: number;
    onCambiarTamaño: (nuevoTamaño: number) => void;
}

export const SelectorTamañoPagina = ({ tamaño, onCambiarTamaño }: Props) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-700 mt-4">
            <label htmlFor="tamaño" className="font-medium">Mostrar:</label>
            <select
                id="tamaño"
                value={tamaño}
                onChange={(e) => onCambiarTamaño(Number(e.target.value))}
                className="px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-500">registros por página</span>
        </div>

    );
}
