import React from 'react'
import Nav from '../Components/Nav'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Hour from '../Components/Hour'
import Brands from '../Components/Brands'
import Testimonials from '../Components/Testimonials'
import Contacts from '../Components/Contacts'
const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Hour />
      <Brands />
      <Testimonials />
      <Contacts />
    </>
  )
}

export default Home