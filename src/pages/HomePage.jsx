import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurMission from '../components/OurMission'
import OurVision from '../components/OurVision'
import OurPartners from '../components/OurPartners'
import OurServices from '../components/OurServices'
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return (
    <div className='mt-[65px]'>
      <HeroSection />
      <AboutUs />
      <OurMission />
      <OurVision />
      <OurPartners />
      <OurServices />
      <ContactUs />
    </div>
  )
}

export default HomePage
