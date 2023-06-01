import React from 'react'
import Card from '../components/Card';

import cardsData from './../data/Cardsdata';


const Services = () => {
  return (

    <>
    <div className="container">

<div className="row justify-content-center">
<div className="col-md-10 text-center">

<h1 className="my-5">Our Services</h1>

</div>
</div>


    <div className="row">    
{
cardsData.map(({cardImage, cardTitle}, ind) => {
  return(<Card imgsrc={cardImage} cardTitle={cardTitle}/>)
})
}   
    </div></div>
    </>
  )
}

export default Services