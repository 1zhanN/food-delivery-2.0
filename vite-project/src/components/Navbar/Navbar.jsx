/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




const Navbar = () => {
  return (
    <div>
        <ul className='list-group list-group-horizontal'>
        <li className='list-group-item'><Link to="/">Home</Link></li>
        <li className='list-group-item'><Link to="/cart">Cart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar