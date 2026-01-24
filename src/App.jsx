import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Card from './components/CardAnimation'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden text-white">
        <Hero />
      </main>
      <main className='relative max-w-7xl mx-auto'>
        <About />
        <Services />
        <Pricing />
        <Card />
      </main>
    </>
  )
}

export default App