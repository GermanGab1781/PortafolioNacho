import { motion } from 'framer-motion';
import React from 'react';
import '../index.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:2}}}
                exit={{opacity:0}}   
                className='navbar'>         
        <NavLink className={({isActive})=> isActive ? 'navButton active' : 'navButton notActive'} to='/Fotografia'>Fotografia </NavLink>
        <NavLink className={({isActive})=> isActive ? 'navButton active' : 'navButton notActive'} to='/Filmmaking'>Filmmaking </NavLink>
        <NavLink className={({isActive})=> isActive ? 'navButton activeBrand brand' : 'navButton notActive brand'} to='/PortafolioNacho'>Inicio</NavLink>      
    </motion.div>
  )
}
