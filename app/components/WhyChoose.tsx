'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Fingerprint, Briefcase, XCircle } from 'lucide-react'

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Stratèges de l\'IA-GEN',
    description: 'Nous combinons une expertise technique pointue avec une compréhension tactique de vos enjeux métiers critiques.',
  },
  {
    icon: Fingerprint,
    title: 'Approche asymétrique',
    description: 'Orientée 100% sur la valeur. Pas de solutions pré-packagées, chaque architecture est dessinée sur-mesure.',
  },
  {
    icon: XCircle,
    title: 'Autonomie garantie',
    description: 'Nous structurons l\'organisation et passons le relais tech, mais ce sont vos propres équipes qui reprennent le manche.',
  },
  {
    icon: Briefcase,
    title: 'Design par la contrainte',
    description: 'L\'IA-GEN n\'est pas magique. Nous validons le produit par cycle rapide sans dérive technologique.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase">Notre ADN</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 font-nasalization">
              L'impact, <br className="hidden sm:block" />
              <span className="text-white/60">sans les buzzwords.</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-12">
              Nous concevons des stratégies de transformation pérennes. Pas d'expérimentations aléatoires, juste une exécution de l'état de l'art technologique.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#080808] shrink-0">
                    <item.icon className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white tracking-tight mb-2 font-nasalization">{item.title}</h3>
                    <p className="text-sm font-light text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Strictly Black & White */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-10"
          >
            <div className="relative p-12 rounded-3xl bg-[#080808] border border-white/[0.06] flex items-center flex-col justify-center text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative z-10 w-full">
                <div className="text-7xl font-medium tracking-tighter text-white mb-2">24<span className="text-3xl text-white/60">+</span></div>
                <div className="text-sm uppercase tracking-widest font-semibold text-white/90 mb-2">Années d'expérience</div>
                <div className="text-sm font-light text-white/60">Cumulées en transformation digitale</div>
                
                <div className="my-10 w-full h-px bg-white/5" />
                
                <div className="text-7xl font-medium tracking-tighter text-white mb-2">100<span className="text-3xl text-white/60">%</span></div>
                <div className="text-sm uppercase tracking-widest font-semibold text-white/90 mb-2">Orienté sur la valeur</div>
                <div className="text-sm font-light text-white/60">Rejet absolu des solutions préfabriquées</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
