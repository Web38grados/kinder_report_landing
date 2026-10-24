
export function FormularioRegistro({
  subtitulo = "INICIA TU PROCESO Y",
  titulo = "Registra tu Colegio Aquí",
  colorText = 'text-[#e9004b]',
  accent= '[#e9004b]',
  bgColor = '[#e9004b]',
  bgColorHover = 'hover:bg-[#c4003d]'
}) {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-5">
      <div className="mb-10 text-left">
        <h4 className={`${colorText} text-sm font-bold tracking-widest uppercase mb-1`}>{subtitulo}</h4>
        <h2 className={`${colorText} text-3xl md:text-5xl font-extrabold`}>{titulo}</h2>
      </div>

      <form className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* ==========================================
              COLUMNA 1: CONTACTO DE LA ESCUELA
              ========================================== */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-800 text-sm tracking-widest uppercase mb-4">Contacto de la escuela</h3>
            
            {/* Nombre de la institución */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre de la institución educativa <span className={`${colorText}`}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="Ingresa el nombre de tu institución educativa" 
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]" 
              />
            </div>

            {/* Tipo de escuela (Radios) */}
            <div>
               <label className="block text-xs font-semibold text-slate-700 mb-2">
                 Tipo de escuela <span className={`${colorText}`}>*</span>
               </label>
               <div className="flex gap-6">
                 <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                   <input type="radio" name="tipoEscuela" className="mr-2 w-4 h-4 accent-[#e9004b]" defaultChecked /> Pública
                 </label>
                 <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                   <input type="radio" name="tipoEscuela" className="mr-2 w-4 h-4 accent-[#e9004b]" /> Privada
                 </label>
               </div>
            </div>

            {/* Sitio web */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sitio web de la Institución Educativa
              </label>
              <input 
                type="url" 
                placeholder="Ingresa el URL del sitio web de tu institución" 
                className={`w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]`} 
              />
            </div>
            
            {/* Cantidad de alumnos */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cantidad de alumnos <span className={`${colorText}`}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="Ejemplo: 1000" 
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]" 
              />
            </div>

            {/* Uso actual de Workspace (Radios) */}
            <div>
               <label className="block text-xs font-semibold text-slate-700 mb-2">
                 ¿Tu organización actualmente usa Google Workspace for Education? <span className={`${colorText}`}>*</span>
               </label>
               <div className="flex gap-6">
                 <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                   <input type="radio" name="usaWorkspace" className={`mr-2 w-4 h-4 accent-${accent}`} defaultChecked /> Si
                 </label>
                 <label className="flex items-center text-sm text-slate-700 cursor-pointer">
                   <input type="radio" name="usaWorkspace" className={`mr-2 w-4 h-4 accent-${accent}`} /> No
                 </label>
               </div>
            </div>

            {/* Plan de Workspace (Select) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Plan de Workspace <span className="${colorText}">*</span>
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-500 focus:outline-none focus:border-[#e9004b] appearance-none">
                <option value="">Seleccionar plan</option>
                <option value="fundamentals">Education Fundamentals</option>
                <option value="standard">Education Standard</option>
                <option value="upgrade">Teaching and Learning Upgrade</option>
                <option value="plus">Education Plus</option>
              </select>
            </div>

          </div>

          {/* ==========================================
              COLUMNA 2: DATOS DE CONTACTO
              ========================================== */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-800 text-sm tracking-widest uppercase mb-4">Datos de contacto</h3>
            
            {/* Nombre */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre <span className={`${colorText}`}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="Ingresa tu nombre" 
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]" 
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Correo <span className={`${colorText}`}>*</span>
              </label>
              <input 
                type="email" 
                placeholder="Ejemplo: nombre@example.com" 
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]" 
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Teléfono <span className={`${colorText}`}>*</span>
              </label>
              <input 
                type="tel" 
                placeholder="Ingresa tu número de contacto" 
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-[#e9004b]" 
              />
            </div>

            {/* País (Select) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                País <span className={`${colorText}`}>*</span>
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2 text-sm text-slate-500 focus:outline-none focus:border-[#e9004b] appearance-none">
                <option value="">Seleccionar país</option>
                <option value="PE">Perú</option>
                <option value="MX">México</option>
                <option value="CO">Colombia</option>
                {/* Agrega más países si lo necesitas */}
              </select>
            </div>
          </div>
          
        </div>

        {/* Botón de Enviar */}
        <div className="mt-12 flex justify-center">
          <button 
            type="submit" 
            className={`bg-${bgColor} ${bgColorHover} text-white px-10 py-3 rounded-full font-bold transition-colors text-sm`}
          >
            Enviar formulario
          </button>
        </div>
      </form>
    </section>
  );
}