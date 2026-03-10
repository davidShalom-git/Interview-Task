import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contacts'
import About from './Pages/About'
const App = () => {
  return (
   <>
   <Router>
    <Nav />
    <main className="pt-24 md:pt-28 min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-gray-100/80">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
    </main>
    <Footer />
   </Router>
   
   
   
   
   </>
  )
}

export default App