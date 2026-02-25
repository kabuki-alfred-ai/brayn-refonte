'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => scrollTo(e, 'top')} className="flex items-center gap-3 group">
          <img 
            src="/LogoBrayn.jpg" 
            alt="BRAYN Logo" 
            className="h-7 sm:h-8 w-auto object-contain mix-blend-lighten opacity-90 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback style if logo is black on white
              const target = e.target as HTMLImageElement;
              target.style.filter = 'invert(1) brightness(1.2)';
              target.style.mixBlendMode = 'normal';
            }}
          />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors">Infrastructure</a>
          <a href="#cases" onClick={(e) => scrollTo(e, 'cases')} className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors">Cas d'usage</a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="text-sm font-medium tracking-wide text-white/50 hover:text-white transition-colors">Correspondance</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#050505] bg-white hover:bg-white/90 rounded-full transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Démarrer
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
