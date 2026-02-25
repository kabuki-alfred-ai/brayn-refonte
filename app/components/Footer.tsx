'use client'

import { Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => scrollTo(e as any, 'top')}>
            <img 
              src="/LogoBrayn.jpg" 
              alt="BRAYN Logo" 
              className="h-6 w-auto object-contain mix-blend-lighten opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.filter = 'invert(1) brightness(1.2)';
                target.style.mixBlendMode = 'normal';
              }}
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="text-sm font-light text-white/70 hover:text-white transition-colors">Superstructure</a>
            <a href="#cases" onClick={(e) => scrollTo(e, 'cases')} className="text-sm font-light text-white/70 hover:text-white transition-colors">Résultats</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="text-sm font-light text-white/70 hover:text-white transition-colors">Correspondance</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/braynai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 bg-[#080808] flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} BRAYN INTEL. TOUS DROITS RÉSERVÉS.
          </p>
          <p className="text-white/40 text-xs font-light tracking-wider uppercase">
            Designed for Impact.
          </p>
        </div>
      </div>
    </footer>
  )
}
