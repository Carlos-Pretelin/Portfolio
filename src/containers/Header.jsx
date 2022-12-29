import React from 'react'
import { Link } from 'react-router-dom';
//styles
import "../styles/Header.scss"
import menu from "../assets/Header/menu.svg"
import useInitialState from '../hooks/useInitialState';

const Header = () => {


  const {hamMenu, handleMenu} = useInitialState();

  return (
    <header>
      {/* <Link className='Header_item' to={"/"}>Home</Link>
      <Link className='Header_item' to={"/Projects"}>Projects</Link>
      <Link className='Header_item' to={"/Contact"}>Contact</Link> */}
      <img onClick={handleMenu} className='Header_Menu' src={menu} alt="icono menu" />
    </header>
  )
}

export default Header