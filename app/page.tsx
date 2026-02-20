import Hero from './components/Hero'
import Services from './components/Services'
import UseCases from './components/UseCases'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <UseCases />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
