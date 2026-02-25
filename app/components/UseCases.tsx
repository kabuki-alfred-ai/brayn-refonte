'use client'

import { motion } from 'framer-motion'
import { Building2, Shield, Wallet, Users } from 'lucide-react'
import { GlowCard } from './ui/spotlight-card'

const useCases = [
  {
    icon: Building2,
    title: 'Chatbot recherche interne',
    client: 'Banque de détail',
    problem: "Accès rapide à l'information dans un contexte multilingue",
    solution: 'Assistant IA multilingue avec architecture RAG et ontologie',
    impact: ['Réduction de 95% du temps de recherche', '180% de ROI sur 6 mois'],
  },
  {
    icon: Wallet,
    title: 'Analyse de dossiers',
    client: "Banque d'investissement",
    problem: 'Traitement automatisé des demandes de financement',
    solution: 'Extraction OCR avancée et génération automatisée',
    impact: ['65% de réduction du délai', '+32% de volume traité'],
  },
  {
    icon: Users,
    title: 'Gestion fournisseurs',
    client: 'Entreprise de retail',
    problem: 'Évaluation complexe et asymétrique',
    solution: 'Analyse multi-sources, scoring via LLM',
    impact: ['Baisse de 35% des incidents', '22% d\'économies directes'],
  },
  {
    icon: Shield,
    title: 'Conseiller augmenté',
    client: "Mutuelle d'assurance",
    problem: 'Personnalisation insuffisante (8% de conversion)',
    solution: 'Moteur de recommandation RAG + IA hybride',
    impact: ['+47% de conversion', '-68% temps de conseil'],
  },
]

export default function UseCases() {
  return (
    <section id="cases" className="py-32 px-6 lg:px-8 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-xs font-medium tracking-wide text-white/50 uppercase">Résultats mesurables</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 font-nasalization">
            L'excellence opérationnelle,<br />
            <span className="text-white/40">prouvée.</span>
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Pas de théorie. Découvrez comment nos stratégies se traduisent en indicateurs de performance réels pour les leaders de leur marché.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="h-full flex flex-col">
                <GlowCard 
                  glowColor="purple" 
                  customSize={true} 
                  className="h-full p-0 border-none bg-transparent rounded-2xl flex flex-col"
                >
                  <div className="p-10 flex flex-col h-full z-10 relative bg-[#080808]/80 backdrop-blur-md border border-white/[0.08] group-hover:border-white/[0.15] rounded-2xl transition-colors duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black shrink-0">
                        <useCase.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 font-medium tracking-wide uppercase">{useCase.client}</span>
                        <h3 className="text-lg font-medium text-white tracking-tight font-nasalization">{useCase.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-6 flex-grow">
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold block mb-2">Problème</span>
                        <p className="text-sm font-light text-white/60 leading-relaxed">{useCase.problem}</p>
                      </div>
                      
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold block mb-2">Résolution</span>
                        <p className="text-sm font-light text-white/60 leading-relaxed">{useCase.solution}</p>
                      </div>
                    </div>

                    <div className="pt-6 mt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
                      <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold block mb-4">Impact</span>
                      <div className="flex flex-wrap gap-2">
                        {useCase.impact.map((item) => (
                          <span key={item} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wide">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
