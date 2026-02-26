'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { Entropy } from './ui/entropy'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  // Interactive Aura Tracking
  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calcul relatif au centre de l'écran pour déplacer l'aura
      const x = (e.clientX - window.innerWidth / 2) * 0.2
      const y = (e.clientY - window.innerHeight / 2) * 0.2
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden selection:bg-white/20">
      
      {/* Ambient Moving Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0], 
            y: [0, -100, 100, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0], 
            y: [0, 150, -150, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] -right-[10%] w-[1000px] h-[1000px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, 50, -50, 0],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[40%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)' }}
        />
      </div>

      {/* Dynamic Interactive Aura (Follows cursor) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -mt-[500px] -ml-[500px] rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)',
          willChange: 'transform'
        }}
      />
      
      {/* Entropy Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 flex items-center justify-center -mt-20">
        <Entropy size={1200} className="scale-125" />
      </div>

      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none block" />
      <div className="absolute inset-x-0 bottom-[-1px] h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />

      {/* Hero Content with Parallax */}
      <motion.div 
        style={{ y }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20"
      >


        {/* Main Title - Awwwards Style Reveal */}
        <div className="text-center max-w-5xl mx-auto mb-10 flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[1.15] flex flex-col items-center font-nasalization">
            <span className="overflow-hidden block py-2 -my-2">
              <motion.span 
                initial={{ y: '120%', rotateZ: 2 }}
                animate={{ y: 0, rotateZ: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block origin-bottom-left pb-2"
              >
                Donnez du sens à
              </motion.span>
            </span>
            <span className="overflow-hidden block py-4 -my-4">
              <motion.span 
                initial={{ y: '120%', rotateZ: 2 }}
                animate={{ y: 0, rotateZ: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block origin-bottom-left text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/30 pb-2"
              >
                votre stratégie IA.
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Subtitle - High contrast separation */}
        <div className="max-w-2xl mx-auto text-center mb-14 overflow-hidden">
          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-white/70 font-light leading-relaxed tracking-wide"
          >
            L'intelligence artificielle fait évoluer le monde. BRAYN donne une direction claire à cette évolution. Nous transformons les entreprises qui veulent diriger plutôt que de suivre.
          </motion.p>
        </div>

        {/* Action Center - Magnetic Feel */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button */}
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-15px_rgba(255,255,255,0.5)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative font-medium text-sm tracking-wide">Déployer l'infrastructure</span>
            <div className="relative w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
            </div>
          </button>

          {/* Secondary Button */}
          <button 
            onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white transition-colors duration-500"
          >
            <span className="font-medium text-sm tracking-wide">Explorer les KPIs</span>
            <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </motion.div>

        {/* Stats Grid - Floating effect */}
        <motion.div
           initial={{ opacity: 0, filter: 'blur(10px)' }}
           animate={{ opacity: 1, filter: 'blur(0px)' }}
           transition={{ duration: 1.5, delay: 0.8 }}
           className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {[
            { metric: '95%', label: 'Gain en vitesse de recherche' },
            { metric: '65%', label: 'Hausse de la productivité' },
            { metric: '47%', label: 'Amélioration de conversion' },
            { metric: '500k', label: 'Euros économisés par an' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 text-center lg:text-left group relative"
            >
              <div className="absolute -inset-4 bg-white/0 group-hover:bg-white/[0.02] rounded-2xl transition-colors duration-500 pointer-events-none" />
              <span className="text-4xl font-medium text-white tracking-tighter group-hover:text-white transition-colors">{stat.metric}</span>
              <span className="text-xs font-light text-white/60 uppercase tracking-widest leading-relaxed">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
