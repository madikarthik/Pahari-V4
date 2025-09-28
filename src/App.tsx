import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect  } from 'react'
import { Menu, X, Instagram, MessageCircle, Mail } from 'lucide-react'   

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Transparent only on Home top; solid everywhere else
  useEffect(() => {
    const applyScrollState = () => {
      if (isHome) {
        setScrolled(window.scrollY > 30) // solid after slight scroll
      } else {
        setScrolled(true) // always solid on non-home pages
      }
    }
    applyScrollState()

    if (isHome) {
      window.addEventListener('scroll', applyScrollState, { passive: true })
      return () => window.removeEventListener('scroll', applyScrollState)
    }
  }, [isHome])


  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/blogs', label: 'Blogs' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
          scrolled
            ? 'bg-brand-50/90 backdrop-blur supports-[backdrop-filter]:bg-brand-50/80 border-brand-100'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container-pg flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* <span
              className={`h-9 w-9 rounded-full inline-flex items-center justify-center font-bold transition-colors duration-300 ${
                scrolled ? 'bg-brand-600 text-white' : 'bg-white/30 text-white'
              }`}
            >
              PG
            </span> */}
            <span
              className={`text-base md:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Pahari Goodness
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-lg transition-colors duration-300 ${
                    scrolled
                      ? (isActive ? 'text-brand-700' : 'text-brand-800 hover:text-brand-700')
                      : 'text-white hover:text-brand-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Contact button (desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`btn transition-colors duration-300 ${
                scrolled ? 'btn-primary' : 'bg-white text-brand-900 hover:bg-brand-100'
              }`}
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu dropdown */}
            {menuOpen && (
              <div
                className={`absolute left-0 right-0 top-full md:hidden shadow-lg ring-1 ${
                  scrolled ? 'bg-brand-50/95 backdrop-blur ring-brand-100'
                            : 'bg-black/70 backdrop-blur ring-white/10'
                } z-50`}
              >
                <div className="container-pg flex flex-col items-center text-center py-4 gap-4">
                  {navLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg font-medium ${
                        scrolled
                          ? 'text-gray-800 hover:text-brand-700'
                          : 'text-white hover:text-brand-200'
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  ))}

                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={`btn px-6 py-2 text-lg ${
                      scrolled
                        ? 'btn-primary'
                        : 'bg-white text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            )}


        </div>
      </header>


      <main className="flex-1 ">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="container-pg py-8 text-sm text-gray-600">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="space-y-1">
              <p>© {new Date().getFullYear()} Pahari Goodness · Crafted in the Himalayas · Sustainable · Small-batch · Community-first</p>
              {/* <p className="text-gray-500">Sustainable · Small-batch · Community-first</p> */}
            </div>

            {/* Right — socials */}
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/your_handle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-800/70 hover:text-gold-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-brand-800/70 hover:text-gold-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="mailto:hello@paharigoodness.in"
                aria-label="Email"
                className="text-brand-800/70 hover:text-gold-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
