import React from 'react'

function Slid() {
  return (
    <>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='fix'>
      <img src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100"  alt="..." ></img>
      </div>
    </div>
    <div className="carousel-item">
    <div className='fix'>
      <img src="https://img.freepik.com/free-photo/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_613910-1176.jpg?w=740&t=st=1724432695~exp=1724433295~hmac=817a03a329611c2c174e6dabd179fa53d6cdae399b50e11518aa99397c03afa2" className="d-block w-100" alt="..."></img>
    </div>
    </div>
    <div className="carousel-item">
    <div className='fix'>
      <img src="https://img.freepik.com/free-photo/strong-athlete-lifting-barbell-exercising-gym_7502-10707.jpg?w=900&t=st=1724432867~exp=1724433467~hmac=227818a897c91ea0e7121da86800504133e2998b1680be1959e14fa9f6e27b85" className="d-block w-100" alt="..."></img>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}

export default Slid
