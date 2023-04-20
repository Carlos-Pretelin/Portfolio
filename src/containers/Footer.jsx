import React from 'react'
import "../styles/Footer.scss"
//import face from "../assets/Footer/fb.svg"
//import insta from "../assets/Footer/insta.svg"
//import twitt from "../assets/Footer/twit.svg"
//import linkd from "../assets/Footer/Linkedin.svg"

const Footer = () => {
  return (
    <div className='Footer'>
      
        

          <div className='Footer_SocialMedia'>

              <div className='Footer_SocialMedia-item'>
                <a href="https://www.facebook.com/carlos.pretelin.3/">
                <i className="fa-brands fa-facebook"></i>
                </a>
              </div>

              <div className='Footer_SocialMedia-item'>
                <a href="https://www.instagram.com/carlospretelin/">
                <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
                

              <div className='Footer_SocialMedia-item'>
                <a href="https://twitter.com/">
                <i className="fa-brands fa-github"></i>
                </a>
              </div>

              <div className='Footer_SocialMedia-item'>
                <a href="https://www.linkedin.com/in/carlos-pretelin/">
                <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>

        </div>  
        <p>Copyright ©2022 All rights reserved</p>

      
    </div>
  )
}

export default Footer