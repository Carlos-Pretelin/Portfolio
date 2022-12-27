import React from 'react'
import ProfilePic from "../assets/Profile/CarlosPic.png"
import "../styles/Profile.scss"


const Profile = () => {
  return (
    <div className='Profile'>
        <img src={ProfilePic} alt="Foto de Carlos Pretelin" />
        <section className='Profile-Details'>
            <h1>Hi, im Carlos Frontend Developer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur  quam ametutem sit eos dolor non magnam. Cupiditate doloribus maxime ratione quidem.</p>
            <a href="#">Download Resume</a>
        </section>
    </div>
  )
}

export default Profile