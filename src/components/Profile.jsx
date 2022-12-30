import React from 'react'
import ProfilePic from "../assets/Profile/CarlosPic.png"
import "../styles/Profile.scss"


const Profile = () => {
  return (
    <div className='Profile'>
        <img src={ProfilePic} alt="Foto de Carlos Pretelin" />
        <section className='Profile-Details'>
            <h1>Hi, im Carlos, Frontend Developer</h1>
            <p>I'm up-to-date with the newest development tools and methods, and have knowledge of various platforms, languages and embedded systems. </p>
            <a href="#">Download Resume</a>
        </section>
    </div>
  )
}

export default Profile