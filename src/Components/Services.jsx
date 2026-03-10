import React from 'react'

const services = [
  {
    title: 'TV Repair',
    description: 'Expert television repair and maintenance for all brands.',
    image: '/images/tv-repair.png',
  },
  {
    title: 'Mobile Repair',
    description: 'Smartphone and mobile device repair and screen replacement.',
    image: '/images/mobile-repair.png',
  },
  {
    title: 'DVD Repair',
    description: 'DVD players, set-top boxes and disc drive repairs.',
    image: '/images/dvd-repair.png',
  },
]

const Services = () => {
  return (
    <section className="relative z-0 bg-gray-900 -mt-14 md:-mt-20 pt-16 md:pt-24 pb-24 md:pb-32 px-4">
      <div className="max-w-5xl mx-auto pb-12 md:pb-16">
        <h2 className="text-white text-3xl font-semibold text-center mb-10 md:mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isWhite = index === 0 || index === 2
            return (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border transition-colors ${
                isWhite
                  ? 'bg-white border-slate-200 hover:border-slate-300'
                  : 'bg-gray-800/80 border-gray-700/50 hover:border-gray-600'
              }`}
            >
              <div className={`aspect-4/3 flex items-center justify-center p-4 ${isWhite ? 'bg-slate-50' : 'bg-gray-800'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className={`text-xl font-semibold mb-2 ${isWhite ? 'text-black' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isWhite ? 'text-black/80' : 'text-gray-400'}`}>
                  {service.description}
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {/* Decorative undulating bottom border (leaf-style wave) */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-0">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="block w-full h-16 md:h-20"
        >
          {/* Dark fill with scalloped / undulating bottom */}
          <path
            d="M0,0 L1200,0 L1200,80 Q1050,45 900,80 Q750,35 600,80 Q450,45 300,80 Q150,35 0,80 Z"
            fill="rgb(17, 24, 39)"
          />
          {/* Decorative wavy line along the edge */}
          <path
            d="M0,80 Q150,35 300,80 Q450,45 600,80 Q750,35 900,80 Q1050,45 1200,80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  )
}

export default Services
