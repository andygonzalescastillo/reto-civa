import type { Bus } from "../types/Bus";

interface Props {
    bus: Bus | null;
    onCerrar: () => void;
    cargando: boolean;
}

export const ModalDetalleBus = ({ bus, onCerrar, cargando }: Props) => {
    if (!bus) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onCerrar}
            />

            <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-[90%] max-w-sm sm:max-w-md md:max-w-lg animate-fadeIn z-10">
                {cargando ? (
                    <p className="text-blue-600 font-semibold">Cargando detalle...</p>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
                            Detalle del Bus
                        </h2>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>ID:</strong> {bus.id}</li>
                            <li><strong>Número:</strong> {bus.numeroBus}</li>
                            <li><strong>Placa:</strong> {bus.placa}</li>
                            <li><strong>Características:</strong> {bus.caracteristicas}</li>
                            <li>
                                <strong>Activo:</strong>{" "}
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${bus.activo ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {bus.activo ? "Sí" : "No"}
                                </span>
                            </li>
                            <li><strong>Marca:</strong> {bus.marcaNombre}</li>
                        </ul>
                    </>
                )}

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onCerrar}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                    >
                        Cerrar
                    </button>
                    <button
                        onClick={onCerrar}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}
