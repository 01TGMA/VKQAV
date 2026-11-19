import { useEffect, useState } from 'react'

/**
 * Full-bleed hero with auto-rotating background photos and a dark green overlay.
 * Rotation pauses on hover or focus and is off for visitors who prefer reduced motion.
 */
export default function HeroSlider({ slides, children }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === index ? s.alt : ''}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: s.pos || 'center' }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-900/70 to-transparent" />

      {children}

      {slides.length > 1 && (
        <div className="absolute right-4 top-4 flex gap-2 sm:right-6 lg:right-8" role="group" aria-label="Choose hero photo">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-7 bg-accent' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
