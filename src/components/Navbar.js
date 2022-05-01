import React from 'react';
import { NavLink} from 'react-router-dom';
import '../index.css';


export default function Navbar() {
  return (
    <div className="navbar">         
        <NavLink className="navButton navLinkAnimation" to='/PortafolioNacho/Fotografia'>Mis trabajos </NavLink>
        <NavLink className="navButton navLinkAnimation" to='/PortafolioNacho'>Home</NavLink>      
    </div>
  )
}
