import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Card from './components/CardAnimation'
import TechStack from './components/Techstack'
import Work from './components/Work'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        {/* <Work /> */}
        <Pricing />
        {/* <Card /> */}
        <Contact />
      </main>
      <div className='w-full h-0.5 bg-zinc-700'></div>
      <Footer />      
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App