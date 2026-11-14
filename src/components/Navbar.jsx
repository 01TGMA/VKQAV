import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, SERVICE_LINKS, SITE } from '../data/site'

function UtilityBar() {
  return (
    <div className="bg-brand-900 text-[11px] text-white/80">
      <div className="container-x flex h-8 items-center justify-between">
        <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-white">
          <Phone className="h-3 w-3 text-accent" />
          {SITE.phone}
        </a>
        <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-white">
          <Mail className="h-3 w-3 text-accent" />
          {SITE.email}
        </a>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const onServices = location.pathname.startsWith('/services')

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    const esc = (e) => e.key === 'Escape' && setServicesOpen(false)
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', esc)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClass = (active) =>
    `relative py-5 text-[13px] font-medium transition-colors hover:text-brand ${
      active ? 'text-brand font-semibold' : 'text-slate-600'
    }`

  const underline = (
    <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" aria-hidden />
  )

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <UtilityBar />
      <div className="border-b border-slate-100 bg-white">
        <div className="container-x flex h-16 items-center justify-between lg:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((o) => !o)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={`${linkClass(onServices)} flex items-center gap-1`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                    {onServices && underline}
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
                      {SERVICE_LINKS.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-mint hover:text-brand"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    linkClass(isActive && !link.to.includes('#'))
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && !link.to.includes('#') && underline}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/quote" className="btn-accent hidden sm:inline-flex">
              Get a Free Quote
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-brand hover:bg-mint lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-brand-900/60 transition-opacity ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 text-brand hover:bg-mint"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-mint"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 border-l-2 border-accent/60 pl-3">
                      {SERVICE_LINKS.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-mint hover:text-brand"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-mint"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="border-t border-slate-100 p-4">
            <Link to="/quote" className="btn-accent w-full">
              Get a Free Quote
            </Link>
          </div>
        </aside>
      </div>
    </header>
  )
}
