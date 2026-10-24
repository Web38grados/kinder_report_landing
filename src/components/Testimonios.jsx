import Colegio_Francia from '../assets/testimonio.png'

export function TestimoniosWorkspace({
  subtitulo = "Nuestros clientes y sus",
  titulo = "Testimonios",
  etiqueta = "La mejor alternativa virtual inmediata",
  testimonio = "Desde hace 4 años CAFFE ha sido un gran aliado para el Colegio Francia, primero para la implementación de Google For Education, gracias a ello la migración actual a clases virtuales fue más fácil para nuestra comunidad educativa, y ahora, fortaleciendo nuestro programa de capacitación docente para la generación de recursos educativos digitales",
  autor = "Colegio Francia, Acapulco México",
  textoAdicional = "Conoce todos los servicios que en 38° Lab ofrecemos a aquellos que se dedican a la educación",
  textoBoton = "Ir a Servicios for Education",
  linkBoton = "#",
  imagenUrl = Colegio_Francia,
  // 1. AGREGAMOS LA PROP DEL COLOR (Por defecto rojo para que Workspace no se rompa)
  colorTema = "#e9004b"
}) {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* =========================================
            TÍTULO DE LA SECCIÓN
            ========================================= */}
        <div className="mb-10 relative z-10">
          <h4 
            className="text-sm font-bold tracking-widest uppercase mb-1"
            style={{ color: colorTema }} // Aplicamos el color dinámico
          >
            {subtitulo}
          </h4>
          <h2 
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: colorTema }} // Aplicamos el color dinámico
          >
            {titulo}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          
          {/* =========================================
              LADO IZQUIERDO: TEXTO DEL TESTIMONIO
              ========================================= */}
          <div className="w-full md:w-3/5 md:pr-16">
            <h3 
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: colorTema }} // Aplicamos el color dinámico
            >
              {etiqueta}
            </h3>
            
            <p className="text-slate-700 text-base md:text-[17px] leading-relaxed mb-4 font-medium">
              "{testimonio}"
            </p>
            
            <p className="text-right text-xs font-semibold text-slate-800 mb-8">
              {autor}
            </p>

            {/* Línea divisoria dinámica */}
            <hr 
              className="border-t-2 mb-6" 
              style={{ borderColor: colorTema }} // Aplicamos el color dinámico al borde
            />

            {/* Llamado a la acción inferior */}
            <p className="text-slate-600 text-xs font-medium mb-6">
              {textoAdicional}
            </p>

            <a 
              href={linkBoton}
              /* hover:brightness-90 oscurece cualquier color que le pases por style al hacer hover */
              className="inline-block text-white px-6 py-2.5 rounded-full font-bold transition-all text-sm shadow-md hover:brightness-90 active:scale-95"
              style={{ backgroundColor: colorTema }} // Aplicamos el color dinámico al fondo
            >
              {textoBoton}
            </a>
          </div>

          {/* =========================================
              LADO DERECHO: IMAGEN DEL TESTIMONIO
              ========================================= */}
          <div className="w-full md:w-2/5 mt-16 md:mt-0 relative flex justify-center items-center">
            
            {imagenUrl ? (
              <img 
                src={imagenUrl} 
                alt={`Testimonio de ${autor}`} 
                className="w-full max-w-[450px] object-contain scale-110" 
              />
            ) : (
              <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-sm">
                Falta imagen
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}