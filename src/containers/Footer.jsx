import React from 'react'
import "../styles/Footer.scss"
import face from "../assets/Footer/fb.svg"
import insta from "../assets/Footer/insta.svg"
import twitt from "../assets/Footer/twit.svg"
import linkd from "../assets/Footer/Linkedin.svg"

const Footer = () => {
  return (
    <div className='Footer'>
      
        

          <div className='Footer_SocialMedia'>

              <div className='Footer_SocialMedia-item'>
                <img src={face} alt="" />
              </div>

              <div className='Footer_SocialMedia-item'>
                <img src={insta} alt="" />
              </div>
                

              <div className='Footer_SocialMedia-item'>
                <img src={twitt} alt="" />
              </div>

              <div className='Footer_SocialMedia-item'>
                <img src={linkd} alt="" />
              </div>

        </div>  
        <p>Copyright ©2022 All rights reserved</p>

      
    </div>
  )
}

export default Footer