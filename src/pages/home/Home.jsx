import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import Gallery from '../gallery/Gallery'
import Menu from '../menu/Menu'
import TestimonialSec from '../testtimonialSec/TestimonialSec'
import AbtServices from '../abtsevices/AbtServices'
import OurTeam from '../ourteam/OurTeam'
import Certificate from '../../components/certificate/Certificate'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div id="Home">
        <Navbar />
        <Hero />
        <About />
        <Certificate />
        <AbtServices />
        <OurTeam />
        <Gallery />
        <Menu />
        <TestimonialSec />
        {/* <Contact /> */}
        <Footer/>
    </div>
  )
}

export default Home