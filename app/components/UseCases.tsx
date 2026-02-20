'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Clock, Users, Building2, Shield, Wallet } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: 'Chatbot recherche interne',
    client: 'Banque de detail',
    problem: 'Acces rapide a l\'information dans un contexte multilingue',
    solution: 'Assistant IA multilingue avec architecture RAG et ontologie',
    impact: ['95% de reduction du temps de recherche', 'Economie de 500K eur/an'],
  },
  {
    icon: Wallet,
    title: 'Analyse dossiers financement',
    client: 'Banque d\'investissement',
    problem: 'Traitement automatise des demandes de financement PME',
    solution: 'Analyse automatisee avec OCR et generation de rapports',
    impact: ['65% de reduction du temps', '+32% du volume traite'],
  },
  {
    icon: Users,
    title: 'Gestion fournisseurs',
    client: 'Entreprise de retail',
    problem: 'Evaluation complexe des fournisseurs',
    solution: 'Analyse multi-sources avec modeles adaptes',
    impact: ['35% de reduction des incidents', '22% d\'economies'],
  },
  {
    icon: Shield,
    title: 'Conseiller digital',
    client: 'Mutuelle d\'assurance',
    problem: 'Personnalisation insuffisante des offres (8% conversion)',
    solution: 'Scoring multidimensionnel + moteur de recommandation hybride',
    impact: ['+47% de taux de conversion', '-68% de temps de conseil', '+32% satisfaction client'],
  },
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-brayn-dark/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brayn-purple font-medium mb-4 block">Cas d&apos;usage</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-brayn-gray-400 text-lg max-w-2xl mx-auto">
            Decouvrez comment nous avons aide nos clients a transformer leur activite grace a l&apos;IA.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-500 h-full border border-white/5 hover:border-brayn-cyan/30">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brayn-purple/20 to-brayn-cyan/20 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-brayn-cyan" />
                  </div>
                  <div>
                    <span className="text-xs text-brayn-cyan font-medium uppercase tracking-wider">{useCase.client}</span>
                    <h3 className="font-display text-xl font-bold mt-1">{useCase.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-brayn-gray-500 uppercase tracking-wider">Problematique</span>
                    <p className="text-brayn-gray-300 text-sm mt-1">{useCase.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-brayn-gray-500 uppercase tracking-wider">Solution</span>
                    <p className="text-brayn-gray-300 text-sm mt-1">{useCase.solution}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs text-brayn-cyan uppercase tracking-wider">Impact</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {useCase.impact.map((item) => (
                        <span key={item} className="px-3 py-1 rounded-full bg-brayn-cyan/10 text-brayn-cyan text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
