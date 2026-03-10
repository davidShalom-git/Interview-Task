import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const fullText = "Karur's Best Television Repair Service"
  const [text, setText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (text.length === fullText.length) {
      setIsComplete(true)
      return
    }
    const timeout = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1))
    }, 80)
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <>
     <section className="relative z-10 min-h-[50vh] flex flex-col items-center justify-center px-4 py-20 md:py-28 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 max-w-4xl leading-tight">
        {text}
        {!isComplete && (
          <span
            className="inline-block w-0.5 h-[0.9em] bg-gray-900 align-middle ml-0.5 animate-pulse"
            style={{ minWidth: '2px' }}
            aria-hidden
          />
        )}
      </h1>
      <p className="text-center mt-8 text-gray-500 text-lg md:text-xl font-medium max-w-2xl">
        Most Trustable Service Provider in Karur
      </p>

      {/* Wavy curve between hero and dark section */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="block w-full h-16 md:h-24"
        >
          <path
            d="M0,40 Q200,70 400,40 Q600,10 800,40 Q1000,70 1200,40 L1200,80 L0,80 Z"
            fill="rgb(17, 24, 39)"
          />
          <path
            d="M0,40 Q200,70 400,40 Q600,10 800,40 Q1000,70 1200,40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
    </>
   
  )
}

export default HeroSection
