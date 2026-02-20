'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'BRAYN nous a permis de passer d\'une vision technique de l\'IA generative a une vision strategique qui redefinit notre position sur le marche.',
    author: 'Directeur General',
    company: 'Entreprise de retail',
    highlight: 'vision transformee',
  },
  {
    quote: 'Leur approche critique et pragmatique nous a evite les pieges des effets de mode et nous a permis de concentrer nos investissements sur les initiatives a fort impact.',
    author: 'President',
    company: 'Entreprise pharmacologique',
    highlight: 'approche distinctive',
  },
  {
    quote: 'Plus qu\'un prestataire, BRAYN est devenu un partenaire strategique qui nous aide a naviguer dans la complexite de l\'IA generative avec clarte et vision.',
    author: 'Directeur General',
    company: 'Mutuelle d\'assurance',
    highlight: 'partenariat strategique',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brayn-cyan font-medium mb-4 block">Temoignages</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Ce qu&apos;ils disent de <span className="gradient-text">nous</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl glass h-full flex flex-col">
                <Quote className="w-10 h-10 text-brayn-cyan/30 mb-6" />
                
                <p className="text-brayn-gray-300 leading-relaxed flex-grow mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-white/10">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-brayn-gray-500">{testimonial.company}</div>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-brayn-purple/10 text-brayn-purple text-xs font-medium">
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
