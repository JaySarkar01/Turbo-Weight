import AboutUs from '@/components/AboutUs'
import BenefitsSection from '@/components/BenefitSection'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import InsuranceServices from '@/components/InsuranceServices'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import TestimonialsSection from '@/components/TestimonialSection'
import WhyBetter from '@/components/WhyBetter'
import React from 'react'

const Home = () => {
  return (
    <div>
      <section>
      <Navbar/>
      </section>
      <section>

      <HeroSection/>
      </section>

      <section>
        <BenefitsSection/>
      </section>

      <section>
        {/* <ResponsiveFeature/> */}
        <AboutUs/>
      </section>

      <section>
        <InsuranceServices/>
      </section>

      <section>
        <WhyBetter/>
      </section>

      <section>
        <FaqSection/>
      </section>

      <section>
        <TestimonialsSection/>
      </section>

      <section>
        <QuoteForm/>
      </section>

      <section>
      <Footer/>
      </section>
      
       
    </div>
  )
}

export default Home
