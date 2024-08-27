import React from 'react'

function Footer() {
  return (
    <>

    <div className='footbox'>
 <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-4">
               <div className='text-uppercase'>
               <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/logo-light-heder.png" alt="" />
            </div>
            
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-4">
                <h3 className="text-uppercase">Links</h3>
                <ul className="list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="gallery">Gallery</a></li>
                    <li><a href="plan">Plan</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-4">
                <div className='addres'>
                   <h3>CONTACT US</h3>
                   <h4>Golbal Tower - 404 4th Floor sector- 56 Gurgaon(Haryana
) </h4>
                    <h5> <i class="fa-solid fa-phone"></i>+91 9873260124</h5>
                    <h5><i class="fa-solid fa-envelope"></i>Profit@care.in</h5>
                </div>
            </div>

            
        </div>
        
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:Profit@care.in
        
    <div className='fonticon'>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
    </div>
   

</footer>
</div>


    </>
  )
}

export default Footer
