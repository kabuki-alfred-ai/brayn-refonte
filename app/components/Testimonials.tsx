'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "L'intervention de BRAYN ne s'est pas résumée à du conseil technique. Ils ont redéfini notre vision stratégique pour la décennie à venir, avec une exécution implacable.",
    author: 'Directeur Général',
    company: 'Secteur Retail',
    highlight: 'Vision transformée',
  },
  {
    quote: "Leur approche critique nous a évité l'écueil des POC isolés. Chaque étape de l'intégration IA a été justifiée par un retour sur investissement mesurable.",
    author: 'Président',
    company: 'Industrie Pharmacologique',
    highlight: 'Approche pragmatique',
  },
  {
    quote: "BRAYN opère avec le niveau d'exigence des meilleurs cabinets de conseil en stratégie, couplé à une maîtrise technologique de pointe.",
    author: 'Directeur de l\'innovation',
    company: 'Mutuelle d\'Assurance',
    highlight: 'Partenariat stratégique',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-black relative border-t border-white/5">
      {/* Background detail */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.01))] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-24 max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium tracking-wide text-white/70 uppercase">Confiance & Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 font-nasalization">
            Ceux qui ont <br />
            <span className="text-white/60">franchi le pas.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="group"
            >
              <div className="p-10 rounded-3xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.15] transition-colors duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-24 h-24 text-white" strokeWidth={1} />
                </div>
                
                <p className="text-lg text-white/80 leading-relaxed font-light flex-grow mb-12 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="pt-6 mt-auto border-t border-white/5 relative z-10">
                  <div className="font-medium text-white tracking-tight mb-1">{testimonial.author}</div>
                  <div className="text-sm text-white/60 font-light mb-4">{testimonial.company}</div>
                  <div className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wide">
                    {testimonial.highlight}
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
