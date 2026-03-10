import React from 'react'

const Data = [
  {
    title: 'Ramesh',
    description: 'I had a great experience with this company. They were very professional and they fixed my TV in no time. I would definitely recommend them to my friends and family.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    meta: 'Karur',
  },
  {
    title: 'Lakshmi',
    description: 'I had a great experience with this company. They were very professional and they fixed my TV in no time. I would definitely recommend them to my friends and family.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    meta: 'Thanthonimalai',
  },
  {
    title: 'Murugan',
    description: 'I had a great experience with this company. They were very professional and they fixed my TV in no time. I would definitely recommend them to my friends and family.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    meta: 'Vengamedu',
  },
  {
    title: 'Kavitha',
    description: 'I had a great experience with this company. They were very professional and they fixed my TV in no time. I would definitely recommend them to my friends and family.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    meta: 'Karur',
  },
]

const Testimonials = () => {
  return (
    <section className="relative z-0 bg-gray-50 pt-16 md:pt-24 pb-20 md:pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-3">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-10">
          What our customers say after service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Data.map((t, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-gray-100 shrink-0 bg-gray-100">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-gray-900 font-semibold leading-tight truncate">
                    {t.title}
                  </h3>
                  <p className="text-gray-500 text-sm truncate">{t.meta}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                  {t.description}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1 text-yellow-500">
                <span aria-hidden>★</span>
                <span aria-hidden>★</span>
                <span aria-hidden>★</span>
                <span aria-hidden>★</span>
                <span aria-hidden>★</span>
                <span className="ml-2 text-xs text-gray-500">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
