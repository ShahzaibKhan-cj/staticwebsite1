import React from 'react'


const Card = ({cardTitle, imgsrc}) => {
  return (
    <>
  

<div className="col-md-4 mb-4">

    <div className="card sevice-card " >
    <img className="card-img-top" src={imgsrc} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">{cardTitle}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button className='btn outline-btn'>Read more</button>
    </div>
  </div>
  </div>
    </>
  )
}

export default Card