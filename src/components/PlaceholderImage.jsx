import { Camera } from 'lucide-react'

const TONES = {
  teal: 'from-[#0F5C57] via-[#1B6B66] to-[#2D7A6B]',
  gold: 'from-[#8A6A1A] via-[#A67C1E] to-[#B8892A]',
  bronze: 'from-[#6B5A44] via-[#86704F] to-[#7A6648]',
  forest: 'from-[#0B2E28] via-[#134E4A] to-[#1D5A4A]',
}

/**
 * Placeholder for future photography.
 * Swap by passing `src` once real images exist.
 */
export default function PlaceholderImage({
  icon: Icon,
  label,
  tone = 'teal',
  ratio = 'aspect-[16/10]',
  src,
  className = '',
}) {
  if (src) {
    return (
      <div className={`overflow-hidden rounded-2xl ${ratio} ${className}`}>
        <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
      </div>
    )
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-sm ${TONES[tone]} ${ratio} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.35), transparent 55%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {Icon && <Icon className="h-1/3 w-1/3 text-white/20" strokeWidth={1.25} />}
      </div>
      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-black/35 px-2 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
        <Camera className="h-3 w-3" />
        Photo · {label}
      </span>
    </div>
  )
}
