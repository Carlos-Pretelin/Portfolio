import React from 'react'
import ConPic from "../assets/Contact/mypic.png"
//styles
import "../styles/Contact.scss"


const Contact = () => {
  return (
    <section className='Contact'>
      <h1>Contact</h1>

      <div className='Contact-Info'>

        <div className='Contact-Info-Profile'>
          <img src={ConPic} alt="Profile Picture" />

          <h1>Carlos Pretelin</h1>
          <p>Junior Front-End Web Developer | HTML/CSS, JAVASCRIPT/REACT.JS | Seeking entry level opportunity</p>
        </div>
        
        
        <div className='Contact-Wrapper'>

          <div className='Contact-Info-item'>
            <a href="">
              <i className="fa-brands fa-google"></i>
              <span>E-Mail: carlosppretelin@gmail.com</span>
            </a>
            
          </div>

          <div className='Contact-Info-item'>
          <i class="fa-brands fa-linkedin"></i>
            <span>Linkedin/Carlos-Pretelin</span>
          </div>

          <div className='Contact-Info-item'>
          <i class="fa-brands fa-github"></i>
            <span>GitHub/Carlos-Pretelin</span>
          </div>



        </div>
        

      </div>
    </section>
  )
}

export default Contact