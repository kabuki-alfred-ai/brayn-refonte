'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { GlowCard } from './ui/spotlight-card'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase">Échange confidentiel</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 font-nasalization">
              Initier le <br />
              <span className="text-white/60">mouvement.</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-12 max-w-md">
              Prêt à transformer votre entreprise avec l'IA ? Discutons de vos enjeux de façon transparente et confidentielle.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-[#080808] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-1">Email direct</div>
                  <a href="mailto:contact@brayn-ai.com" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                    contact@brayn-ai.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-[#080808] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-1">Bureau</div>
                  <span className="text-sm font-medium text-white/80">Paris, France</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard glowColor="cyan" customSize={true} className="p-0 border-none bg-transparent h-full rounded-2xl">
              <form className="p-10 sm:p-12 rounded-2xl bg-[#080808]/80 backdrop-blur-md border border-white/[0.08] relative z-10">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-semibold text-white/90 mb-3">Nom</label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/10 transition-all font-light text-sm"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-semibold text-white/90 mb-3">Organisation</label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/10 transition-all font-light text-sm"
                        placeholder="Entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-white/90 mb-3">Email Pro</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/10 transition-all font-light text-sm"
                      placeholder="jean@entreprise.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-white/90 mb-3">Contexte</label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/10 transition-all font-light text-sm resize-none"
                      placeholder="Quels sont vos enjeux stratégiques actuels ?"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl overflow-hidden transition-transform hover:scale-[1.01] active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <span className="relative font-medium text-sm">Transmettre la demande</span>
                      <Send className="w-4 h-4 ml-1 relative group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
