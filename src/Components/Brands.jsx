import React, { useState } from 'react'

const brands = [
  { name: 'LG', img: 'lg.png' },
  { name: 'SONY', img: 'sony.png' },
  { name: 'TOSHIBA', img: 'toshiba.png' },
  { name: 'SAMSUNG', img: 'samsung.png' },
  { name: 'PHILIPS', img: 'philips.png' },
  { name: 'Panasonic', img: 'panasonic.png' },
  { name: 'SANSUI', img: 'sansui.png' },
  { name: 'ONIDA', img: 'onida.png' },
]

const BrandCard = ({ name, img }) => {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="flex h-20 min-w-[140px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors group-hover:border-white/20 group-hover:bg-white/10 md:h-24 md:min-w-[160px]">
      {!imgFailed ? (
        <img
          src={`/images/${img}`}
          alt={name}
          className="max-h-10 max-w-[120px] object-contain opacity-90 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-12"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-sm font-semibold tracking-wide text-white/90 md:text-base">
          {name}
        </span>
      )}
    </div>
  )
}

const Brands = () => {
  return (
    <section className="overflow-hidden bg-gray-900 py-12 md:py-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        Brands We Service
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80 md:text-base">
        We repair all leading TV brands — quality service you can trust.
      </p>

      <div
        className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex w-max items-center gap-6 animate-[marquee_30s_linear_infinite] md:gap-10">
          {brands.concat(brands).map((b, i) => (
            <BrandCard key={`${b.name}-${i}`} name={b.name} img={b.img} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
