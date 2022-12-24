import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Header.scss"

const Header = () => {
  return (
    <header>
      <Link className='Header_item' to={"/"}>Home</Link>
      <Link className='Header_item' to={"/Projects"}>Projects</Link>
      <Link className='Header_item' to={"/Contact"}>Contact</Link>
      <i class="fa-solid fa-bars"></i>
    </header>
  )
}

export default Header