import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

/**
 * VKQAV logo image.
 * `light` uses the version made for dark backgrounds (footer, dark sections).
 * `className` controls size, e.g. "h-12".
 */
export default function Logo({ light = false, className = 'h-25 sm:h-11' }) {
  const src = light ? '/images/logo-dark.webp' : '/images/logo-light.webp'

  return (
    <Link to="/" className="inline-flex items-center" aria-label={`${SITE.fullName} home`}>
      <img
        src={src}
        width={780}
        height={270}
        alt={`${SITE.fullName} logo`}
        className={`${className} w-auto`}
      />
    </Link>
  )
}
