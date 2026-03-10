import React from 'react'

const tags = [
  { label: 'Quick response', icon: '💬' },
  { label: 'Expert help', icon: '🛠️' },
  { label: 'All devices', icon: '📱' },
  { label: 'Affordable', icon: '✓' },
  { label: 'Local service', icon: '📍' },
]

const Hour = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Why choose us?
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
          {/* Left: text block */}
          <div className="flex-1 min-w-0">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Support
            </p>
            <h3 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              24/7 Support for Your Repairs
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              We provide 24/7 support for our customers. Get help whenever you need it—expert advice, booking, and follow-up for TV, mobile, and DVD repairs.
            </p>
          </div>

          {/* Right: pill tags in a proper grid */}
          <div className="shrink-0 w-full lg:w-auto lg:min-w-[280px]">
            <div className="grid grid-cols-2 gap-3 justify-center lg:justify-end">
              {tags.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-50 text-gray-800 text-sm font-medium border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <span className={item.icon === '✓' ? 'text-green-600 font-bold' : ''}>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hour
