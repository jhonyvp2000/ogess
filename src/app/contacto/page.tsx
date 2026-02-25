import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Mesa de Partes y Contacto | OGESS Especializada Tarapoto",
};

export default function Contacto() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Breve */}
            <section className="bg-white border-b border-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Mesa de Partes & Contacto</h1>
                    <p className="text-gray-600">
                        Canales exclusivos para atención administrativa, facturación de proveedores y trámites con la Dirección General.
                        **Atención Médica y Citas se gestionan directamente en el portal del Hospital II-2.**
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Información Contacto Física */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestra Sede Administrativa Central</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h3>
                                        <p className="text-gray-600">Jr. Ángel Delgado Morey cdra. 4 s/n<br />Barrio de Partido Alto, Tarapoto, San Martín, Perú.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-12 w-12 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Horario Presencial</h3>
                                        <p className="text-gray-600">Lunes a Viernes<br />8:00 a.m. a 13:00 p.m. y 14:00 p.m. a 17:00 p.m.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-12 w-12 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Central Telefónica</h3>
                                        <p className="text-gray-600">(042) 522020</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-12 w-12 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Correo para orientaciones</h3>
                                        <p className="text-gray-600">mesadepartes@hospitaltarapoto.gob.pe</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulario MPV */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesa de Partes Virtual</h2>
                            <form className="space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Tipo de Documento</label>
                                        <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ogess-red focus:bg-white transition-colors">
                                            <option>Carta / Oficio</option>
                                            <option>Expediente de Contratación</option>
                                            <option>Factura Electrónica</option>
                                            <option>Queja Administrativa</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">DNI/RUC Remitente</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ogess-red focus:bg-white transition-colors"
                                            placeholder="Ingrese el número..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Asunto</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ogess-red focus:bg-white transition-colors"
                                        placeholder="Resumen del requerimiento..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Archivo Principal (PDF)</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                        <p className="text-sm text-gray-500">Arrastre su documento firmado en PDF aquí<br />o haga clic para examinar (Max. 10MB)</p>
                                    </div>
                                </div>

                                <Button className="w-full h-12 text-base gap-2" type="button">
                                    <Send size={18} />
                                    Enviar Documento
                                </Button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    * Este formulario es un mockup preparado para integrarse con la API de Trámite Documentario en el backend.
                                </p>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
