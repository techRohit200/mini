import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className="logo">
        Company
      </div>
      <div className="display-menu">
        <Link className='menu' to={"/"}>Home</Link>
        <Link className='menu' to={"/products"}>Products</Link>
        <Link className='menu' to={"/reviews"}>Reviews</Link>
        <Link className='menu' to={"/contact"}>Contact</Link>
      </div>
    </header>
  )
}

export default NavBar;