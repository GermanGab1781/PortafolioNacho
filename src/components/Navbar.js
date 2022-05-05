import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:2}}}
                exit={{opacity:0}}   
                className='navbar'>         
        <NavLink className="navButton" to='/PortafolioNacho/Fotografia'>Fotografia </NavLink>
        <NavLink className="navButton" to='/PortafolioNacho/Filmmaking'>Filmmaking </NavLink>
        <NavLink className="navButton" to='/PortafolioNacho'>Home</NavLink>      
    </motion.div>
  )
}
