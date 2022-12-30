import React from 'react'
import ConPic from "../assets/Contact/mypic.png"



const Contact = () => {
  return (
    <section className='Contact'>
      <h1>Contact</h1>

      <div className='Contact-Info'>

        <div className='Contact-Info-Picture'>
          <img src={ConPic} alt="" />
        </div>

        <div className='Contact-Info-item'>
          
        </div>

      </div>
    </section>
  )
}

export default Contact