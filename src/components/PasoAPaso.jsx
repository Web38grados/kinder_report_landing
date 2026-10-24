import React from 'react';

export function PasoAPaso({ 
  subtitle = "TE ACOMPAÑAMOS",
  title = "Paso a Paso", 
  steps = [], 
  bottomBanner,
  color = "text-[#e6007e]",
  shadowColor = "text-[#fce7f3]", // Rosado clarito para la sombra del número
  bannerBg = "bg-[#9b0b43]" // Color vino del banner inferior
}) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className=" max-w-6xl mx-auto px-5 lg:px-8 relative">
        <p className="text-[#9b0b43] text-sm font-bold uppercase tracking-widest mb-1">{subtitle}</p>
        <h2 className={`text-4xl md:text-5xl font-black mb-16 ${color}`}>
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps?.map((step, idx) => (
            <div key={idx} className="relative bg-white border border-slate-100 rounded-3xl p-8 pt-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow min-h-[220px] flex flex-col items-center text-center mt-6 md:mt-0">
              
              {/* Número Gigante con sombra desplazada (Efecto 3D) */}
              <div className="absolute -top-6 -left-2 text-[100px] font-black leading-none tracking-tighter select-none">
                {/* Sombra */}
                <span className={`absolute top-2 left-2 ${shadowColor} z-0`}>{idx + 1}</span>
                {/* Número Principal */}
                <span className={`relative ${color} z-10`}>{idx + 1}</span>
              </div>
              
              {/* Contenido (Ícono, Título y Texto Centrados) */}
              <div className="flex flex-col items-center w-full mt-2 relative z-20">
                {step.icon && (
                  <div className={`mb-4 ${color}`}>
                    <step.icon size={36} strokeWidth={2} />
                  </div>
                )}
                <h3 className={`text-[15px] font-black uppercase mb-3 ${color} tracking-wide`}>
                  {step.title}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Inferior Color Vino */}
        {bottomBanner && (
          <div className="relative mt-16 w-full md:w-[85%] ml-auto text-white text-right py-6 px-10 rounded-l-md rounded-r-none">
            <div className={`absolute top-0 left-0 w-[100vw] h-full ${bannerBg} rounded-l-md z-0`}></div>
            <p className="relative z-10 text-sm md:text-[17px] font-medium leading-relaxed text-white">
              {bottomBanner.split('...').map((text, i, arr) => (
                <React.Fragment key={i}>
                  {text}{i !== arr.length - 1 && '...'}
                  {i === 0 && <br className="hidden md:block" />}
                </React.Fragment>
              ))}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}