import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Card from './components/CardAnimation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechStack from './components/Techstack'
import Work from './components/Work'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
      </main>
      <main className='relative max-w-7xl mx-auto'>
        <About />
        <Services />
        <TechStack />
        <Work />
        <Pricing />
        <Card />
        <Contact />
      </main>
      <div className='w-full h-0.5 bg-zinc-700'></div>
      <Footer />
    </>
  )
}

export default App