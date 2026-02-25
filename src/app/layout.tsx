import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OGESS Especializada Tarapoto | Sitio Oficial",
  description: "Portal Oficial de la Oficina de Gestión de Servicios de Salud Especializada Tarapoto, entidad administradora del Hospital II-2, Banco de Sangre y Laboratorio Referencial San Martín.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-gray-50`}>
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
