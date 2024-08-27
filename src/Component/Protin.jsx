import React from 'react'

function Protin({tinimg,rang,price}) {
  return (
<>
<div className='pro'>

    <img src={tinimg} alt="" />

    <h2>{rang}</h2>
    <p>{price}</p>
</div>



</>
  )
}

export default Protin
