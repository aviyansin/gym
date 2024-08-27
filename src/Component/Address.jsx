import React from 'react'

function Address() {
  return (
  <>
  
  <div className='conback'>
    <div className='container'>
     <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>


         
      <div className='add'>
      

       <h1><i class="fa-solid fa-phone"></i>CALL US</h1>
       <h3>+9873260124</h3>
       <br />
       <h1><i class="fa-solid fa-location-dot"></i>LOCATION</h1>
        <h3>Golbal Tower 404 4th Floor</h3>
        <br />
           <h1><i class="fa-solid fa-business-time"></i>BUISNESS HOURS</h1>
           <h3>Mon-Fri......10am - 8pm</h3>
      </div>

      </div>


      <div className='col-lg-6 col-md-6 col-sm-12'>
     
     <div className='cont'>

   <h1>Contact Us</h1>
     <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mobile No</label>
    <input type="Number" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <br />
  <button type="submit" class="btn btn-primary">Save</button>
</form>



     </div>

      </div>




     </div>
    </div>
     </div>

  
  
  
  </>
  )
}

export default Address
