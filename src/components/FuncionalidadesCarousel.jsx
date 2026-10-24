
// IMPORTA TUS IMÁGENES AQUÍ (ajusta las rutas según tu proyecto)
import imgInicio from '../assets/service/classReport/iPhone15.png'; // Suponiendo que tienes una para Inicio
import imgAvisos from '../assets/service/classReport/iPhone16.png'
import imgAgenda from '../assets/service/classReport/iPhone17.png';
import imgGaleria from '../assets/service/classReport/iPhone14.png';
import imgSalud from '../assets/service/classReport/iPhone18.png';
import { useState } from 'react';

// 1. ARREGLO DE DATOS DE FUNCIONALIDADES
const funcionalidades = [
  {
    id: 'inicio',
    titulo: 'Inicio',
    descripcion: 'Vista general del perfil del alumno y acceso rápido a todas las secciones.',
    // Usa tu imagen de inicio real si la tienes, o usa una de relleno temporal
    img: imgInicio, 
  },
  {
    id: 'avisos',
    titulo: 'Avisos',
    descripcion: 'Mantente al día con comunicados importantes y firmas de autorizaciones de la dirección.',
    img: imgAvisos,
  },
  {
    id: 'agenda',
    titulo: 'Agenda',
    // La descripción exacta de tu diseño para Agenda
    descripcion: 'Tarjetas de información de cómo ha ido el progreso de las tareas para el alumno.',
    img: imgAgenda,
  },
  {
    id: 'galeria',
    titulo: 'Galería',
    descripcion: 'Visualiza y descarga fotos de las actividades escolares y eventos especiales.',
    img: imgGaleria,
  },
  {
    id: 'salud',
    titulo: 'Salud',
    descripcion: 'Registro detallado de medicación y antecedentes médicos importantes del alumno.',
    img: imgSalud,
  }
];

export function FuncionalidadesCarousel() {
  // Estado para controlar qué índice está activo (empezamos con el del centro, índice 2: Agenda)
  const [activeIndex, setActiveIndex] = useState(2);

  // Función para ir al slide anterior
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? funcionalidades.length - 1 : prevIndex - 1
    );
  };

  // Función para ir al slide siguiente
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === funcionalidades.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        
        {/* =========================================
            HEADER: TÍTULOS Y BOTONES
            ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <h4 className="text-[#8424c4] text-sm font-bold tracking-widest uppercase mb-1">
              CLASS REPORT Y SUS
            </h4>
            <h2 className="text-[#8424c4] text-4xl md:text-5xl font-black">
              Funcionalidades
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#8424c4] hover:bg-[#e06535] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all text-sm text-center">
              Descargar en Google PlayStore
            </button>
            <button className="bg-[#8424c4] hover:bg-[#e06535] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all text-sm text-center">
              Descargar en iOS AppStore
            </button>
          </div>
        </div>

        {/* =========================================
            ZONA DEL CARRUSEL (TELÉFONOS)
            ========================================= */}
        <div className="relative w-full py-12 flex justify-center items-center h-[500px] md:h-[650px]">
          
          {/* Franja de fondo naranja oscuro */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[30%] md:h-[35%] bg-[#8424c4] z-0"></div>

          {/* Botón Flecha Izquierda */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-10 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Contenedor de los Teléfonos */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {funcionalidades.map((funcionalidad, index) => {
              
              // Calcular posición relativa al elemento activo
              let offset = index - activeIndex;
              // Manejo de scroll infinito simulado para 5 elementos
              if (offset < -2) offset += funcionalidades.length;
              if (offset > 2) offset -= funcionalidades.length;

              // Determinar clases basadas en el offset (posición)
              let zIndex = 10;
              let transform = 'translate-x-0 scale-100 opacity-100';
              
              if (offset === 0) {
                // ACTIVO (Centro)
                zIndex = 20;
                transform = 'translate-x-0 scale-[1.15] opacity-100 z-20 shadow-2xl';
              } else if (offset === -1 || offset === 1) {
                // LATERALES CERCANOS
                zIndex = 15;
                const sign = offset === -1 ? '-' : '';
                transform = `translate-x-[${sign}80%] scale-[0.85] opacity-90 z-15`;
              } else if (offset === -2 || offset === 2) {
                // LATERALES LEJANOS (Extremos)
                zIndex = 10;
                const sign = offset === -2 ? '-' : '';
                // En móviles ocultamos los extremos lejanos, en desktop los mostramos
                transform = `translate-x-[${sign}160%] scale-[0.70] opacity-0 md:opacity-60 z-10`;
              }

              return (
                <div 
                  key={funcionalidad.id}
                  className={`absolute top-0 bottom-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out cursor-pointer`}
                  style={{ zIndex }}
                  // Usamos un estilo inline para transformaciones complejas dinámicas
                  style={{ 
                    zIndex, 
                    transform: offset === 0 
                      ? 'translateX(0) scale(1.2)' 
                      : `translateX(${offset * 174}px) scale(${1 - Math.abs(offset) * 0.15})`,
                      opacity: Math.abs(offset) >= 1 ? 0.99 : (offset === 0 ? 1 : 0.8)

                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <img 
                    src={funcionalidad.img} 
                    alt={`Pantalla de ${funcionalidad.titulo}`} 
                    className="h-full max-h-[400px] md:max-h-[500px] w-auto object-contain drop-shadow-xl rounded-[2.5rem]"
                  />
                  

                </div>
              );
            })}
          </div>

          {/* Botón Flecha Derecha */}
          <button 
            onClick={handleNext}
            className="absolute right-2 md:right-10 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

        {/* =========================================
            TEXTO DESCRIPTIVO (Cambia dinámicamente)
            ========================================= */}
        <div className="text-center mt-8 max-w-2xl mx-auto h-24">
          <h3 className="text-[#8424c4] text-3xl font-bold mb-3 transition-all">
            {funcionalidades[activeIndex].titulo}
          </h3>
          <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed transition-all">
            {funcionalidades[activeIndex].descripcion}
          </p>
        </div>

      </div>
    </section>
  );
}