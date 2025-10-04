import type { Bus } from "../types/Bus";

interface Props {
    buses: Bus[];
    onVerDetalle: (id: number) => void;
}

export const TablaBuses = ({ buses, onVerDetalle }: Props) => {
    return (
        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-200">
            <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm">
                    <tr>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">ID</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Número</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Placa</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Activo</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Marca</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus, index) => (
                        <tr
                            key={bus.id}
                            className={`transition duration-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-blue-50`}
                        >
                            <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-700">{bus.id}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4">{bus.numeroBus}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4">{bus.placa}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4">
                                <span
                                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${bus.activo ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {bus.activo ? "Activo" : "Inactivo"}
                                </span>
                            </td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4">{bus.marcaNombre}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                                <button
                                    onClick={() => onVerDetalle(bus.id)}
                                    className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition duration-200"
                                >
                                    Ver Detalle
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
