import React from 'react'
import { IoTimerSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='home-nav'>
            <IoTimerSharp/>
           <input placeholder='Search' type="text"/>
           <button><Link to="/login">Login</Link></button>
           <button><Link to="/signup">Sign up</Link></button>
    </div>
  )
}

export default Navbar