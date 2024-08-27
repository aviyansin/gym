import React from 'react'

function Push({limitimg,head,para}) {
  return (
   <>
   
   <div className='limit'>

    <img src={limitimg} alt="" />
    <h1>{head}</h1>
    <p>{para}</p>
   </div>
   
   
   
   </>
  )
}

export default Push
