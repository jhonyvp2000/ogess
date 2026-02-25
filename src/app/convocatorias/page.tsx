import { Briefcase, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Convocatorias de Personal | OGESS Especializada Tarapoto",
};

export default function Convocatorias() {
    const convocatoriasDemo = [
        {
            id: "CAS-001-2026",
            titulo: "Convocatoria para Médico Especialista en Cuidados Intensivos",
            entidad: "Hospital II-2 Tarapoto",
            estado: "Vigente",
            fechaCierre: "15 de Marzo, 2026",
        },
        {
            id: "CAS-002-2026",
            titulo: "Convocatoria para Tecnólogo Médico",
            entidad: "Laboratorio Referencial",
            estado: "Vigente",
            fechaCierre: "18 de Marzo, 2026",
        },
    ];

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center p-3 bg-red-50 text-ogess-red rounded-xl mb-4">
                        <Briefcase size={28} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Convocatorias de Personal</h1>
                    <p className="text-gray-600">
                        Encuentre todas las ofertas laborales vigentes (Cas, Locadores) para las tres instituciones que administramos. Oportunidades centralizadas gestionadas por la OGESS Especializada.
                    </p>
                </div>

                <div className="grid gap-6">
                    {convocatoriasDemo.map((conv) => (
                        <div key={conv.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-ogess-red transition-colors">

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
                                        {conv.estado}
                                    </span>
                                    <span className="text-sm font-medium text-gray-400">{conv.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{conv.titulo}</h3>
                                <p className="text-sm text-gray-500 font-medium">Lugar de prestación: {conv.entidad}</p>

                                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span>Cierra: {conv.fechaCierre}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={16} className="text-gray-400" />
                                        <span>Hasta las 16:30 hrs</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">
                                <Button variant="outline">Ver Bases</Button>
                                <Button>Postular</Button>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">El historial y base completa se conectará desde el sistema central en la siguiente fase.</p>
                </div>

            </div>
        </div>
    );
}
