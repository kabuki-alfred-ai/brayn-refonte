'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Fingerprint, Briefcase, Users, XCircle } from 'lucide-react'

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Strateges de l\'IA-GEN',
    description: 'Nous combinons expertises techniques pointues avec comprehension profonde des enjeux metiers.',
  },
  {
    icon: Fingerprint,
    title: 'Approche personnalisee',
    description: 'Orientee valeur plutot que solutions generiques. Chaque accompagnement est unique.',
  },
  {
    icon: XCircle,
    title: 'Pas une ESN',
    description: 'Nous vous accompagnons organisationnellement et techniquement, mais ce sont vos equipes qui restent a la manoeuvre.',
  },
  {
    icon: Briefcase,
    title: 'Design Thinking',
    description: 'Nous ne considerons pas l\'IA-GEN comme une solution universelle. Demarche produit forte garantie.',
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brayn-dark/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brayn-cyan font-medium mb-4 block">Pourquoi BRAYN ?</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Ce qui nous <span className="gradient-text">differencie</span>
            </h2>
            <p className="text-brayn-gray-400 text-lg mb-8">
              Nous ne vendons pas de l&apos;IA. Nous construisons des strategies 
              qui transforment durablement votre entreprise.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brayn-cyan/20 to-brayn-purple/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brayn-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-brayn-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl glass">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brayn-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brayn-purple/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="font-display text-6xl font-bold gradient-text mb-4">24+</div>
                <div className="text-brayn-gray-300 mb-2">annees d&apos;experience</div>
                <div className="text-sm text-brayn-gray-500">en conseil et transformation digitale</div>
                
                <div className="my-8 border-t border-white/10" />
                
                <div className="font-display text-6xl font-bold gradient-text mb-4">100%</div>
                <div className="text-brayn-gray-300 mb-2">oriente valeur</div>
                <div className="text-sm text-brayn-gray-500">pas de solutions generiques</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
