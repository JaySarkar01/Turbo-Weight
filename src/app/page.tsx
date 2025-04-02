import AboutUs from '@/components/AboutUs'
import BenefitsSection from '@/components/BenefitSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import InsuranceServices from '@/components/InsuranceServices'
import Navbar from '@/components/Navbar'
import WhatsAppInput from '@/components/Whatsapp'
import WhyBetter from '@/components/WhyBetter'
import React from 'react'

const Home = () => {
  return (
    <div>

      <Navbar/>

      <section id='home'>

      <HeroSection/>
      </section>

      <section id='be'>
        <BenefitsSection/>
      </section>

      <section id='aboutus'>
        <AboutUs/>
      </section>

      <section id='products'>
        <InsuranceServices/>
      </section>

      <section>
        <WhyBetter/>  
      </section>

      <section id='contact'>
        <WhatsAppInput/>
      </section>
      <section>
      <Footer/>
      </section>
      
       
    </div>
  )
}

export default Home
