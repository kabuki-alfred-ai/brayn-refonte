import Hero from './components/Hero'
import Clients from './components/Clients'
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
      <Clients />
      <Services />
      <UseCases />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
