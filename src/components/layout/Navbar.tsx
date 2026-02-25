"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Directorio", href: "/directorio" },
        { name: "Documentos", href: "/documentos" },
        { name: "Convocatorias", href: "/convocatorias" },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                            {/* Aquí iría el Logo. Por ahora texto formateado */}
                            <div className="w-10 h-10 bg-ogess-red text-white flex items-center justify-center font-bold text-xl rounded-md">
                                O
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-tight text-gray-900">OGESS</span>
                                <span className="text-xs text-ogess-red font-medium">ESPECIALIZADA TARAPOTO</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-ogess-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="#tramites"
                            className="bg-ogess-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-ogess-red-hover transition-colors shadow-soft"
                        >
                            Mesa de Partes
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ogess-red"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ogess-red hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="#tramites"
                            className="block w-full text-center mt-4 bg-ogess-red text-white px-4 py-2 rounded-md text-base font-medium hover:bg-ogess-red-hover"
                        >
                            Mesa de Partes Virtual
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
