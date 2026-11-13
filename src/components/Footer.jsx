import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FOOTER_COMPANY, SERVICE_LINKS, SITE } from '../data/site'

const heading = 'text-[11px] font-bold uppercase tracking-[0.18em] text-accent'
const link = 'text-sm text-white/75 transition hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-base font-semibold italic leading-snug text-accent">
            &ldquo;{SITE.motto}&rdquo;
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
            Reliable services for every need, every day.
          </p>
        </div>

        <div>
          <h4 className={heading}>Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className={link}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>Company</h4>
          <ul className="mt-5 space-y-3">
            {FOOTER_COMPANY.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className={link}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className={link}>
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className={link}>
                {SITE.email}
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© 2026 {SITE.fullName} · RC No: [add CAC number]</p>
          <p>
            <a href="#" className="hover:text-white">Privacy</a> ·{' '}
            <a href="#" className="hover:text-white">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
