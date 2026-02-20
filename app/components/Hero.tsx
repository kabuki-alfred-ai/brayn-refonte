'use client'

import { motion } from 'framer-motion'
import { Brain, Sparkles, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brayn-cyan/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brayn-purple/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-brayn-cyan" />
          <span className="text-sm text-brayn-gray-300">Cabinet de Conseil en IA Générative</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Donnez du sens a votre{' '}
          <span className="gradient-text">strategie IA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-brayn-gray-400 mb-4 max-w-3xl mx-auto"
        >
          L&apos;IA fait evoluer le monde,{' '}
          <span className="text-white font-medium">BRAYN transforme votre entreprise</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-brayn-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Cabinet de conseil strategique innovant specialise dans l&apos;accompagnement 
          autour de l&apos;IA Generative et des nouvelles technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brayn-cyan to-brayn-cyan/80 text-brayn-dark font-semibold rounded-full hover:glow-cyan transition-all duration-300"
          >
            Demarrer votre transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            Decouvrir nos services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '95%', label: 'reduction temps de recherche' },
            { value: '65%', label: 'gain productivite' },
            { value: '47%', label: 'augmentation conversion' },
            { value: '500K', label: 'euros economises/an' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-brayn-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
