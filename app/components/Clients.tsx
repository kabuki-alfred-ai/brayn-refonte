'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'BPI France', logo: '/clients/bpi.png' },
  { name: 'Fnac Darty', logo: '/clients/fnacdarty.png' },
  { name: 'Laboratoires Pierre Fabre', logo: '/clients/pf.png' },
  { name: 'Tick & Live', logo: '/clients/tnl.png' },
  { name: 'AGMA', logo: '/clients/agma1.png' },
  { name: 'Euroquity', logo: '/clients/euroquity.png' },
]

const repeatedClients = [...clients, ...clients]

export default function Clients() {
  return (
    <section className="py-24 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />

      <div className="mx-auto relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-16 px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] text-white/30 uppercase">Ils dirigent l'évolution avec nous</span>
        </motion.div>

        <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Render two identical halves to create a perfect loop */}
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max shrink-0">
                {repeatedClients.map((client, i) => (
                  <div
                    key={`${client.name}-${i}`}
                    className="relative flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-500"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      /* Use grayscale+invert and screen blending to knock out white backgrounds and turn logos to white */
                      className="max-h-12 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] mix-blend-screen"
                      style={{ filter: "grayscale(1) invert(1) brightness(2) contrast(1.2)" }} 
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
