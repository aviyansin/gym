import React from 'react'

function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-white ">
  <div className="container-fluid">
  <div className='logo'><a href=""><img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/logo-light-heder.png" alt="" /></a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="plan">Plan</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="contact">Contact</a>
        </li>
        <button type="button" className="btn btn-danger">SignIn</button>
      </ul>
      
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Header
