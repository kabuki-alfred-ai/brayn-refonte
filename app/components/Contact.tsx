'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brayn-cyan font-medium mb-4 block">Contact</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Parlons de votre <span className="gradient-text">projet</span>
            </h2>
            <p className="text-brayn-gray-400 text-lg mb-12">
              Prêt a transformer votre entreprise avec l&apos;IA ? Discutons de vos objectifs 
              et voyons comment BRAYN peut vous accompagner.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brayn-cyan/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brayn-cyan" />
                </div>
                <div>
                  <div className="text-sm text-brayn-gray-500">Email</div>
                  <a href="mailto:contact@brayn-ai.com" className="text-white hover:text-brayn-cyan transition-colors">
                    contact@brayn-ai.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brayn-purple/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brayn-purple" />
                </div>
                <div>
                  <div className="text-sm text-brayn-gray-500">Localisation</div>
                  <span className="text-white">France</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="p-8 rounded-2xl glass">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brayn-gray-300 mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-brayn-gray-600 focus:outline-none focus:border-brayn-cyan/50 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brayn-gray-300 mb-2">Entreprise</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-brayn-gray-600 focus:outline-none focus:border-brayn-cyan/50 transition-colors"
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brayn-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-brayn-gray-600 focus:outline-none focus:border-brayn-cyan/50 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brayn-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-brayn-gray-600 focus:outline-none focus:border-brayn-cyan/50 transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brayn-cyan to-brayn-cyan/80 text-brayn-dark font-semibold rounded-xl hover:glow-cyan transition-all duration-300"
                >
                  Envoyer le message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
