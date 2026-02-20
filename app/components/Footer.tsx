import { Brain, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brayn-cyan to-brayn-purple flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">BRAYN</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#services" className="text-brayn-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#cases" className="text-brayn-gray-400 hover:text-white transition-colors">Cas d&apos;usage</a>
            <a href="#contact" className="text-brayn-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brayn-gray-400 hover:text-brayn-cyan hover:bg-white/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brayn-gray-400 hover:text-brayn-cyan hover:bg-white/10 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-brayn-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BRAYN. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
