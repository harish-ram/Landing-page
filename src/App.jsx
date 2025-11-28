import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CloudLogos from './components/CloudLogos'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <CloudLogos />
        <Features />
        <HowItWorks />
        <Calculator />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
