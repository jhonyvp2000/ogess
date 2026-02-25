import { Building2, Target, Eye, ShieldCheck, Users } from "lucide-react";

export const metadata = {
    title: "Nosotros | OGESS Especializada Tarapoto",
    description: "Conoce nuestra Misión, Visión, Funciones y Autoridades de la OGESS Especializada Tarapoto.",
};

export default function Nosotros() {
    const autoridades = [
        { cargo: "Director General", nombre: "Carlos Javier Mego Silva" },
        { cargo: "Director del Hospital II-2 Tarapoto", nombre: "Manuel Isaac Pérez Kuga" },
        { cargo: "Director de Gestión Prestacional", nombre: "Luis Gerardo Pacheco Chávez" },
        { cargo: "Director de Planificación y Administración", nombre: "Jaime Flores Mera" },
        { cargo: "Directora de Recursos Humanos y Docencia", nombre: "Elsa Del Pilar Saavedra Sandoval" },
        { cargo: "Jefe de Asesoría Legal", nombre: "Jim Pol Vega Sandoval" },
    ];

    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-white border-b border-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">La Institución</h1>
                        <p className="text-xl text-gray-600">
                            Somos el órgano desconcentrado de la Dirección Regional de Salud de San Martín, responsables de gestionar y asegurar los servicios especializados con alcance en toda la región.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mision y Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <div className="bg-white p-10 rounded-2xl shadow-card border border-gray-100">
                            <div className="h-12 w-12 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center mb-6">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Gestionar y proveer servicios de salud especializados de alcance regional y brindar el apoyo necesario a las IPRESS especializadas. Nuestro objetivo principal es optimizar los servicios de salud que se brindan a la población de San Martín.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-card border border-gray-100">
                            <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Eye size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Consolidarnos como la institución referente a nivel regional en prestaciones de salud especializadas, garantizando calidad, oportunidad y eficiencia en la atención de los pacientes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Funciones Principales */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Funciones Principales</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Como ente rector y administrador de las principales unidades prestadoras.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 bg-gray-50 text-ogess-gray rounded-full flex items-center justify-center mb-4">
                                <Building2 size={28} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Gestión y Prestación</h3>
                            <p className="text-sm text-gray-500">Gestión administrativa y prestación directa de servicios de salud especializados.</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 bg-gray-50 text-ogess-gray rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Servicios de Apoyo</h3>
                            <p className="text-sm text-gray-500">Asegurar la provisión constante de servicios de diagnóstico (laboratorio, banco de sangre).</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 bg-gray-50 text-ogess-gray rounded-full flex items-center justify-center mb-4">
                                <Users size={28} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Operatividad</h3>
                            <p className="text-sm text-gray-500">Coordinar, administrar y supervisar la operatividad del Hospital II-2 y otras IPRESS.</p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto h-16 w-16 bg-gray-50 text-ogess-gray rounded-full flex items-center justify-center mb-4">
                                <Target size={28} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Implementación</h3>
                            <p className="text-sm text-gray-500">Ejecutar las políticas regionales y nacionales de salud dentro de nuestro ámbito.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directorio / Autoridades */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Directorio de Funcionarios</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Conozca a las autoridades que lideran la gestión de la Corporación OGESS.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <ul className="divide-y divide-gray-100">
                            {autoridades.map((autoridad, index) => (
                                <li key={index} className="p-6 sm:px-8 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-ogess-red tracking-wider uppercase mb-1">{autoridad.cargo}</p>
                                        <p className="text-lg font-medium text-gray-900">{autoridad.nombre}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}
