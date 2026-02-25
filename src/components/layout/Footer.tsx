import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white text-ogess-red flex items-center justify-center font-bold text-xl rounded-md">
                                O
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-tight text-white">OGESS</span>
                                <span className="text-sm text-gray-400 font-medium">ESPECIALIZADA TARAPOTO</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-6 max-w-sm">
                            Órgano desconcentrado de la Dirección Regional de Salud de San Martín,
                            encargado de la gestión administrativa y prestación de servicios especializados
                            de alcance regional.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            <li><Link href="/nosotros" className="text-sm hover:text-white transition-colors">La Institución</Link></li>
                            <li><Link href="/convocatorias" className="text-sm hover:text-white transition-colors">Convocatorias de Personal</Link></li>
                            <li><Link href="/documentos" className="text-sm hover:text-white transition-colors">Portal de Transparencia</Link></li>
                            <li><Link href="/contacto" className="text-sm hover:text-white transition-colors">Mesa de Partes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Sede Administrativa</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-gray-500 shrink-0 mt-0.5" />
                                <span className="text-sm">Jr. Ángel Delgado Morey cdra. 4 s/n<br />Barrio de Partido Alto<br />Tarapoto, San Martín, Perú</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-gray-500 shrink-0" />
                                <span className="text-sm">(042) 522020</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-gray-500 shrink-0" />
                                <span className="text-sm">mesadepartes@hospitaltarapoto.gob.pe</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} OGESS Especializada Tarapoto. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-sm text-gray-500">GORE San Martín</span>
                        <span className="text-sm text-gray-500">·</span>
                        <span className="text-sm text-gray-500">DIRESA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
