'use client'

import { motion } from 'framer-motion'
import { Target, Users, Rocket, Check } from 'lucide-react'
import { GlowCard } from './ui/spotlight-card'
import { MouseEvent } from 'react'

const services = [
  {
    icon: Target,
    title: 'Maturité 360°',
    description: "Diagnostic complet de votre maturité IA. Mesure de l'impact organisationnel, technologique, cyber et juridique.",
    features: ['Audit organisationnel', 'Technologie & Cyber', 'Conformité juridique', 'Architecture data'],
  },
  {
    icon: Users,
    title: 'Sensibilisation',
    description: "Conduite du changement et adoption de l'IA Générative à chaque niveau stratégique de votre entreprise.",
    features: ['Workshops exécutifs', 'Formations métiers', 'Acculturation globale', 'Montée en compétence'],
  },
  {
    icon: Rocket,
    title: 'Accompagnement',
    description: "Construction d'une fondation IA-Native pour rendre vos équipes parfaitement autonomes et opérationnelles.",
    features: ['Implémentation technique', 'Gouvernance IA', 'Déploiement RAG', 'Outils & tracking'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="h-full flex flex-col"
    >
      <GlowCard 
        glowColor="blue" 
        customSize={true}
        className="h-full group relative bg-[#050505] p-0 flex flex-col"
      >
        <div className="relative z-10 p-10 flex flex-col h-full">
          <div className="mb-14">
            <div className="w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center mb-8 group-hover:bg-white/[0.04] group-hover:scale-110 transition-all duration-700 ease-[0.16,1,0.3,1] shadow-[0_0_20px_rgba(255,255,255,0.0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <service.icon className="w-6 h-6 text-white/80" strokeWidth={1} />
            </div>
            
            <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{service.title}</h3>
            <p className="text-[15px] font-light text-white/50 leading-relaxed mb-8">
              {service.description}
            </p>
          </div>
          
          {/* Features list - sticks to bottom */}
          <div className="relative z-10 pt-8 mt-auto border-t border-white/[0.03] group-hover:border-white/[0.08] transition-colors duration-700">
            <ul className="space-y-4">
              {service.features.map((feature, i) => (
                <motion.li 
                  key={feature} 
                  className="flex items-center gap-4 text-[13px] tracking-wide font-light text-white/50 group-hover:text-white/70 transition-colors duration-500"
                >
                  <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors duration-500" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-40 px-6 lg:px-8 bg-black relative border-t border-white/5">
      {/* Deep Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.015] blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-100px' }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-white/20" />
              <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Aura Architecture</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight">
              L'intégration IA,<br />
              <span className="text-white/30 italic">parfaite et profonde.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-white/40 font-light leading-relaxed max-w-md pb-2"
          >
            De la vision stratégique au déploiement technique, nous façonnons l'infrastructure et la culture nécessaires.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
