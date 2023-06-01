import React from 'react'
import Hero from '../components/Hero'
import heroAbout from "../images/hero-about.png"

const About = () => {
  return (
   <>
    
   
   <Hero headingText="Welcome to About page"  btnText="About us" btnLink="/" imgSrc={heroAbout}/>
   
    </>
  )
}

export default About