import { FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Documentos Oficiales | OGESS Especializada Tarapoto",
};

export default function Documentos() {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Documentos Oficiales</h1>
                    <p className="text-gray-600 text-lg">
                        Repositorio de Resoluciones Directorales y Directivas de cumplimiento obligatorio para nuestras entidades administradas.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full sm:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por número o asunto..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ogess-red focus:border-transparent text-sm"
                            />
                        </div>
                        <select className="border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-ogess-red">
                            <option>Todos los años</option>
                            <option>2026</option>
                            <option>2025</option>
                        </select>
                    </div>

                    <div className="p-12 text-center text-gray-500">
                        <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                        <p>El repositorio de documentos se conectará a la base de datos central en la siguiente fase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
