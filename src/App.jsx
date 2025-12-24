import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FloatingButton from './components/common/FloatingButton'
import Hero from './components/sections/Hero'
import WhyMason from './components/sections/WhyMason'
import Solutions from './components/sections/Solutions'
import Industries from './components/sections/Industries'
import CaseStudies from './components/sections/CaseStudies'
import Resources from './components/sections/Resources'
import CustomerSupport from './components/sections/CustomerSupport'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <WhyMason />
          <Solutions />
          <Industries />
          <CaseStudies />
          <Resources />
          <CustomerSupport />
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  )
}

export default App

