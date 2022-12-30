import React from 'react'
import { Link } from 'react-router-dom';

//styles
import "../styles/HamMenu.scss"


const HamMenu = () => {

  

  return (
    <div className='HamMenu'>
        <Link className='Header_item' to={"/"}><i className="fa-solid fa-house"></i>Home</Link>
        <Link className='Header_item' to={"/Projects"}><i className="fa-solid fa-file"></i>Projects</Link>
        <Link className='Header_item' to={"/Contact"}><i className="fa-solid fa-envelope"></i>Contact</Link>
    </div>
  )
}

export default HamMenu