import { Button } from "@/components/ui/Button";
import { ArrowRight, Building2, Droplets, TestTube2, FileText, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-ogess-red text-sm font-medium mb-8 border border-red-100">
              <span className="flex h-2 w-2 rounded-full bg-ogess-red"></span>
              Órgano Desconcentrado DIRESA San Martín
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Gestión articulada para la <span className="text-ogess-red">alta complejidad</span> en salud.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              La OGESS Especializada Tarapoto, órgano desconcentrado de la DIRESA San Martín, lidera la gestión y provisión de servicios de salud especializados, garantizando soporte, calidad prestacional y atención según las necesidades de la población.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Convocatorias Vigentes
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base group">
                Mesa de Partes Virtual
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access to Dependencies Section */}
      <section className="py-20 bg-gray-50 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Nuestras Entidades Administradas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brindamos soporte gerencial y administrativo permanente a instituciones pilar de la salud en nuestra región.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hospital II-2 */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hospital II-2 Tarapoto</h3>
              <p className="text-gray-600 mb-6 text-sm">Centro referencial de alta resolución y mayor complejidad del nororiente peruano con atención quirúrgica y especializada.</p>
              <div className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Ir al Portal del Hospital <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            {/* Banco de Sangre */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-red-50 text-ogess-red rounded-xl flex items-center justify-center mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Banco de Sangre Regional</h3>
              <p className="text-gray-600 mb-6 text-sm">Garantiza el abastecimiento oportuno y seguro de componentes sanguíneos para la red hospitalaria de la región San Martín.</p>
              <div className="flex items-center text-sm font-semibold text-ogess-red hover:text-ogess-red-hover transition-colors">
                Ir al Portal del Banco <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            {/* Laboratorio Referencial */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <TestTube2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Laboratorio Referencial</h3>
              <p className="text-gray-600 mb-6 text-sm">Unidad de diagnóstico epidemiológico de alta complejidad, fundamental para la vigilancia en salud pública regional.</p>
              <div className="flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
                Ir al Portal del Laboratorio <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Corporate Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Transparencia y Gestión Documental</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Como unidad ejecutora central, nuestro deber es reportar, normar y dar soporte a los procesos técnicos, legales y de recursos humanos de nuestras dependencias.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Resoluciones Directorales Generales</h4>
                    <p className="text-sm text-gray-500">Documentos oficiales que rigen el macro-funcionamiento de las instituciones adscritas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Convocatorias de Personal (CAS y Locadores)</h4>
                    <p className="text-sm text-gray-500">Procesos de selección centralizados para las tres entidades administradas.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Ver Resoluciones
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mesa de Partes Administrativa</h3>
              <p className="text-sm text-gray-600 mb-6">Para dejar correspondencia relacionada con facturación de proveedores, requerimientos de personal y trámites de unidades orgánicas.</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">Horario de Atención Presencial</p>
                  <p className="text-sm text-gray-600 mt-1">Lunes a Viernes de 8:00 a.m. a 5:00 p.m.</p>
                </div>
                <Button className="w-full">
                  Ingresar Documento Virtual
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
