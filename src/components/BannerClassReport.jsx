
// Cambiamos el nombre a algo más general ya que servirá para ambos
export function BannerPromocional({
  subtitulo = "PARA PRE-ESCOLAR",
  titulo = "Kinder Report",
  descripcion = "Si buscas una app más enfocada en la comunicación entre profesores y clases de pre-escolar.",
  textoBoton = "Conocer más",
  linkBoton = "#",
  imagenUrl,
  // Color por defecto morado, pero puedes pasarle el naranja
  colorTema = "#8424c4" 
}) {
  return (
    <section className="relative w-full bg-white mt-20 mb-20 flex flex-col md:block">
      
      {/* =========================================
          LADO DERECHO: IMAGEN PEGADA AL BORDE
          ========================================= */}
      <div className="w-full h-[300px] md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full z-0">
        {imagenUrl && (
          <img 
            src={imagenUrl} 
            alt={titulo} 
            className="w-full h-full object-cover object-left"
          />
        )}
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

          {/* Botón delineado (Outlined) Dinámico */}
          <a 
            href={linkBoton}
            className="w-max px-10 py-3 border-2 font-bold rounded-full transition-all duration-300 active:scale-95 hover:!bg-[var(--tema)] hover:!text-white text-center"
            style={{ 
              borderColor: colorTema, 
              color: colorTema,
              '--tema': colorTema // Inyectamos el color a Tailwind para el hover
            }}
          >
            {textoBoton}
          </a>
          
        </div>
      </div>

    </section>
  );
}