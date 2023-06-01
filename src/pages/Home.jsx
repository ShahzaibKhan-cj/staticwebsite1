import React from 'react'
import Hero from './../components/Hero';
import heroHome from "../images/hero-home.png"


const Home = () => {
  return (
    <>
  <Hero headingText="Grow your buisness with"  btnText="Get started" btnLink="/" imgSrc={heroHome}/>

  
    </>
  )
}

export default Home