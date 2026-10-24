
import heroKinderReport from '../src/assets/hero_ninos.png'; 
import ventajasImg from '../src/assets/ventajas_kinder.png';
import { FormularioRegistro } from './components/FormularioRegistro';
import { PasoAPaso } from './components/PasoAPaso';
import { TestimoniosWorkspace } from './components/Testimonios';
import imgBannerClass from '../src/assets/banner.png'
import imgTestimonioKinder from '../src/assets/testimonio.png'
import { FuncionalidadesCarousel } from './components/FuncionalidadesCarousel';
import { BannerPromocional } from './components/BannerPromocional';


// Mismos pasos que Class Report, listos para usar
const pasosKinderReport = [
  {
    title: "CONFIGURACIÓN",
    description: "Gestionamos el dominio en internet de la institución con terminación \".edu.mx\", en caso de contar con este.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  },
  {
    title: "IMPLEMENTACIÓN",
    description: "Facilitamos el proceso de migrar todos los procesos actuales de la institución a Google Workspace for Education.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
    )
  },
  {
    title: "CAPACITACIÓN",
    description: "Capacitamos al personal directivo, docente y administrativo para el uso de las herramientas de Google Workspace for Education.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    )
  },
  {
    title: "CERTIFICACIÓN",
    description: "Ofrecemos la posibilidad de acompañar en el proceso de certificación al personal docente con las insignias Google Educator, niveles 1 y 2.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    )
  },
  {
    title: "SOPORTE",
    description: "Contamos con asesoría y soporte de alta calidad de 5x8 días en situaciones técnicas y académicas que se presenten en la institución.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    )
  },
  {
    title: "ACOMPAÑAMIENTO",
    description: "Brindamos asistencia técnica, así como pedagógica y académica a docentes, administrativos y directivos de la institución.",
    icon: ({ size, strokeWidth }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )
  }
];

export default function KinderReport() {
  return (
    <div className="w-full bg-white">
      
      {/* =========================================
          1. SECCIÓN HERO (TEMA MORADO)
          ========================================= */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[700px] bg-white overflow-hidden flex items-stretch pt-16 md:pt-20">
        
        {/* IMAGEN DE FONDO */}
        <img 
          src={heroKinderReport} 
          alt="Niños en Kinder" 
          className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom" 
        />

        {/* DEGRADADO MORADO: Deja transparente la izquierda y se vuelve morado sólido a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% to-[#8424c4] to-70% md:bg-gradient-to-r md:from-transparent md:from-[35%] md:to-[#8424c4] md:to-[75%] z-0"></div>

        {/* CONTENEDOR DEL CONTENIDO */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row h-full">
          
          {/* Lado Izquierdo: ESPACIO VACÍO + LOGO FLOTANTE BLANCO */}
          <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-0 flex-shrink-0">
             {/* Logo flotante pegado a la esquina inferior izquierda (como en el Figma) */}

          </div>

          {/* Lado Derecho: TEXTOS Y BOTONES */}
          <div className="w-full md:w-1/2 p-6 pb-16 md:p-16 flex flex-col justify-end md:justify-center text-white h-full z-10">
            <div className="max-w-lg md:ml-auto">
              
              {/* Título Principal */}
              <div className="flex items-center gap-4 mb-5 animate-fade-in-up delay-100">
                {/* Título Principal con el Ícono de Lucide integrado */}
              <div className="flex items-center gap-4 mb-5 animate-fade-in-up delay-100">
                
                {/* Ícono SVG Blanco (Portapapeles con Lápiz) */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="90" 
                  height="90" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white flex-shrink-0"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                  <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/>
                  <path d="M4 13.5V6a2 2 0 0 1 2-2h2"/>
                </svg>

                {/* Textos del título */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-[70px] font-black leading-none text-white tracking-tight">Kinder</h1>
                  <h1 className="text-5xl md:text-6xl lg:text-[70px] font-black leading-none text-white tracking-tight">Report</h1>
                </div>
                
              </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight">Kinder</h1>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight">Report</h1>
                </div>
              </div>

              <p className="text-white text-base md:text-[17px] font-medium mb-8 leading-relaxed animate-fade-in-up delay-200">
                App de comunicación entre Centros Infantiles y familias de forma segura y efectiva con medidas de seguridad avanzadas. Disponible en Android y iOS.
              </p>

              <div className="animate-fade-in-up delay-300">
                <h3 className="text-lg md:text-[22px] font-bold text-white mb-6">
                  Accede a tu prueba gratuita por 15 Días
                </h3>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-[#8424c4] font-bold py-3.5 px-6 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg text-sm text-center w-full sm:w-auto">
                    Descargar en Google PlayStore
                  </button>
                  <button className="bg-white text-[#8424c4] font-bold py-3.5 px-6 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg text-sm text-center w-full sm:w-auto">
                    Descargar en iOS AppStore
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 md:left-6  bg-white px-8 py-6 rounded-tr-3xl shadow-xl flex flex-col items-center justify-center animate-fade-in-up">
  
              {/* Ícono de Lucide (Clipboard Edit) en Morado */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#8424c4] mb-2"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/>
                <path d="M4 13.5V6a2 2 0 0 1 2-2h2"/>
              </svg>

              <span className="text-[#8424c4] font-bold text-lg leading-none mt-1">Kinder Report</span>
            </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. SECCIÓN VENTAJAS (TEMA MORADO)
          ========================================= */}
      <section className="w-full max-w-6xl mx-auto py-24 px-5">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Lado Izquierdo: Texto y Lista */}
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h4 className="text-[#8424c4] text-sm font-bold tracking-widest uppercase mb-2">
                CONOCE LAS
              </h4>
              <h2 className="text-[#8424c4] text-4xl md:text-5xl font-extrabold leading-tight">
                Ventajas de<br/>Kinder Report
              </h2>
            </div>

            <p className="text-slate-700 text-base md:text-lg mb-8 font-medium leading-relaxed">
              Kinder Report fue cuidadosamente diseñada para centros infantiles, enfatizando en la seguridad de los siguientes puntos:
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8424c4] flex items-center justify-center text-white shadow-sm">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                </div>
                <span className="text-[#2b3a4a] font-bold text-lg">Regulación de exposición innecesaria</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8424c4] flex items-center justify-center text-white shadow-sm">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <span className="text-[#2b3a4a] font-bold text-lg">Alta privacidad y seguridad</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8424c4] flex items-center justify-center text-white shadow-sm">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-[#2b3a4a] font-bold text-lg">Bloqueo de contenido inadecuado</span>
              </li>
            </ul>
          </div>

          {/* Lado Derecho: Imagen */}
          <div className="w-full md:w-1/2 relative">
             <img src={ventajasImg} alt="Ventajas Kinder Report" className="w-full h-auto rounded-3xl shadow-xl object-cover" />
          </div>
        </div>
      </section>

      {/* =========================================
          3. SECCIÓN PASO A PASO (RECICLADA)
          ========================================= */}
      <PasoAPaso
        steps={pasosKinderReport} 
        color="text-[#8424c4]" 
        shadowColor="text-[#f3e5f5]" // Un tono morado muy claro para la sombra de los números
        bottomBanner={'Puedes entrar en cualquiera de los pasos, así que no te preocupes... ¡Nos adaptamos a tus necesidades!'}
        bannerBg='bg-[#8424c4]'
      />

      {/* =========================================
          4. FUNCIONALIDADES (CARRUSEL ESTATICO MORADO)
          ========================================= */}
        <FuncionalidadesCarousel></FuncionalidadesCarousel>

      {/* =========================================
          5. FORMULARIO REGISTRO (RECICLADO MORADO)
          ========================================= */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 py-10">
        <h4 className="text-[#8424c4] text-sm font-bold tracking-widest uppercase mb-1">INICIA TU PROCESO Y</h4>
        <h2 className="text-[#8424c4] text-4xl md:text-5xl font-black mb-10">Registra tu Jardín Aquí</h2>
      </div>
      <FormularioRegistro
        colorText='text-[#8424c4]'
        accent='[#8424c4]'
        bgColor='[#8424c4]'
        bgColorHover='hover:bg-[#6c1d9f]'
      />

      {/* =========================================
          6. BANNER CROSS-SELL (NARANJA - CLASS REPORT)
          ========================================= */}
      {/* Usamos el componente inverso que hiciste, o lo maquetas directamente aquí para el bloque de "PARA COLEGIOS Class Report" */}

      <BannerPromocional
        subtitulo="PARA COLEGIOS"
        titulo="Class Report"
        descripcion="Si buscas una app más enfocada en la comunicación entre profesores y clases de primaria y secundaria."
        colorTema="#ff7a45"
        imagenUrl={imgBannerClass}
        degradado='0%'
      />
      {/* =========================================
          7. TESTIMONIOS (RECICLADO MORADO)
          ========================================= */}
      <TestimoniosWorkspace
        colorTema="#8424c4"
        subtitulo="NUESTROS CLIENTES Y SUS"
        titulo="Testimonios"
        etiqueta="LA MEJOR ALTERNATIVA VIRTUAL INMEDIATA"
        testimonio="Gracias a la App y el constante contacto con los padres, las entradas y salidas de niños son mucho más rápidas aunque no los acompañen los padres"
        autor="Todos abordo, Entre Ríos, Amelia Condo"
        textoAdicional="Conoce todos los servicios que en 38° Lab ofrecemos a aquellos que se dedican a la educación"
        textoBoton="Ir a Servicios for Education"
        linkBoton="#"
        imagenUrl={imgTestimonioKinder} 
      />

    </div>


  );
}