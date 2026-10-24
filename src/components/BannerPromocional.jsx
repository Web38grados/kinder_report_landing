
export function BannerPromocional({
  subtitulo = "PARA COLEGIOS",
  titulo = "Class Report",
  descripcion = "Si buscas una app más enfocada en la comunicación entre profesores y clases de primaria y secundaria.",
  textoBoton = "Conocer más",
  linkBoton = "#",
  imagenUrl,
  // 1. PROP PARA ELEGIR EL COLOR (Naranja por defecto)
  colorTema = "#ff7a45",
  degradado = '100%'
}) {
  return (
    <section className="relative w-full bg-white mt-20 mb-20 flex flex-col md:block">
      
      {/* =========================================
          LADO DERECHO: IMAGEN PEGADA AL BORDE CON FILTRO DE COLOR
          ========================================= */}
      <div className="w-full h-[300px] md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full z-0 relative">
        {imagenUrl && (
          <img 
            src={imagenUrl} 
            alt={titulo} 
            className="w-full h-full object-cover object-left"
          />
        )}
        
        {/* 2. CAPA DE DEGRADADO DINÁMICO SOBRE LA IMAGEN */}
        {/* Usa el colorTema para hacer una transición de transparente al color sólido */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            background: `linear-gradient(to right, #ffffff00 ${degradado}, ${colorTema} 100%)`
          }}
        ></div>
      </div>

      {/* =========================================
          LADO IZQUIERDO: TEXTO CONTENIDO DINÁMICO
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-8 flex">
        
        <div className="w-full md:w-1/2 md:pr-16 py-12 md:py-24 flex flex-col justify-center bg-white md:bg-transparent">
          
          <h4 
            className="text-sm md:text-base font-bold tracking-widest uppercase mb-2"
            style={{ color: colorTema }}
          >
            {subtitulo}
          </h4>
          
          <h2 
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
            style={{ color: colorTema }}
          >
            {titulo}
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-md">
            {descripcion}
          </p>

          {/* 3. BOTÓN CON BORDES Y HOVER DINÁMICOS */}
          <a 
            href={linkBoton}
            className="w-max px-10 py-3 border-2 font-bold rounded-full transition-all duration-300 active:scale-95 text-center hover:!text-white"
            style={{ 
              borderColor: colorTema, 
              color: colorTema,
              // Usamos una variable CSS inline para que el hover funcione dinámicamente con Tailwind
              '--tw-hover-bg': colorTema 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colorTema}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {textoBoton}
          </a>
          
        </div>
      </div>

    </section>
  );
}