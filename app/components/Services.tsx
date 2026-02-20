'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Rocket, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Maturite 360°',
    description: 'Diagnostic complet de votre maturite IA. Organisation, technologie, cybersecurite, qualite des donnees et aspects juridiques.',
    features: ['Audit organisationnel', 'Evaluation technique', 'Conformite juridique', 'Analyse des donnees'],
  },
  {
    icon: Users,
    title: 'Sensibilisation',
    description: 'Embarquez vos equipes dans la transformation IA. Changement de culture et adoption a chaque niveau de l\'entreprise.',
    features: ['Formations sur mesure', 'Workshops interactifs', 'Communication interne', 'Montee en competences'],
  },
  {
    icon: Rocket,
    title: 'Accompagnement',
    description: 'Construisez les fondations d\'une entreprise IA-Native. Pratiques organisationnelles et techniques pour l\'autonomie.',
    features: ['Implementation technique', 'Gouvernance IA', 'Outils et composants', 'Suivi et optimisation'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brayn-cyan font-medium mb-4 block">Nos Services</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Une offre <span className="gradient-text">complete</span>
          </h2>
          <p className="text-brayn-gray-400 text-lg max-w-2xl mx-auto">
            De la sensibilisation a l&apos;implementation, nous vous accompagnons a chaque etape 
            de votre transformation par l&apos;IA.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-500 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brayn-cyan/20 to-brayn-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brayn-cyan/20 to-brayn-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-brayn-cyan" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-brayn-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-brayn-gray-300">
                        <CheckCircle className="w-4 h-4 text-brayn-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
