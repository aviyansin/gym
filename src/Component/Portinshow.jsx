import React from 'react'
import Protin from './Protin'

function Portinshow() {
  return (
   <>
   <div className='proback'>
  
  <div className='row'>
   <div className='col-lg-12 col-md-6 col-sm-12'>
  <div className='prosection'>

    <h1>Protein Products</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget <br />dolor. Aenean massa. Cum sociis Theme natoque</p>

  </div>


   </div>




   <div className='col-lg-3 col-md-3 col-sm-12'>
 
   {/* Green images */}

    <Protin
    
    tinimg={"https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-1-550x550.png"}
    
    rang={"Protein 100% Light Green"}
    price={"$89"}
    
    />


</div>

{/* Purple images */}



<div className='col-lg-3 col-md-3 col-sm-12'>


    <Protin
    tinimg={"https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-2-550x550.png"}
    
    rang={"Protein 100% Dark Purple"}
    price={"$85"}

    
    />
  
</div>  

{/* Sea Green images */}


<div className='col-lg-3 col-md-3 col-sm-12'>


    <Protin
    tinimg={"https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-3-550x550.png"}
    
    rang={"Protein 100% Sea Green"}
    price={"$95"}

    
    />
  
</div>  

{/* 
REd images */}


<div className='col-lg-3 col-md-3 col-sm-12'>


    <Protin
    tinimg={"https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-4-550x550.png"}
    
    rang={"Protein 100% Cherry Red"}
    price={"$95"}

    
    />
  
</div>  





  </div>


  
   
   </div>
   
   </>
  )
}

export default Portinshow
