import React from 'react'
import ConPic from "../assets/Contact/contactPic.jpg"
//styles
import "../styles/Contact.scss"


const Contact = () => {
  return (
    <section className='Contact'>

      <div className='Contact-Greeting'>
        <span>Send me a message!</span>
        <p>Im looking for an entry level oportunity!</p>
      </div>


      <div className='Contact-Socials'>
        
        <div className='Contact-Socials-item'>
          <span><i class="fa-solid fa-envelope"></i> E-Mail</span>
          <p>carlosppretelin@gmail.com</p>
        </div>


        <div className='Contact-Socials-item'>
          <span><i class="fa-solid fa-phone"></i> Phone</span>
          <p>+52 229 530 6311</p>
        </div>


        {/* <div className='Contact-Socials-item'>
          <h2>Socials</h2>
          <div className='SocialMedia-Wrapper'>
            
          


          </div>
        </div> */}

        
      </div>
      

    </section>
  )
}

export default Contact