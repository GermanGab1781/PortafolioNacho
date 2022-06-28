import React from 'react';
import '../index.css';
import Fotografo from '../media/fotografo.jpg'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
export default function HomePage() {
  const fotografo = Fotografo;
  
  return (
    <motion.div className="HomePageWrapper" initial={{x:"6%",opacity:0,scale:.4}} animate={{x:0,opacity:1,scale:1,transition:{duration:1}}}exit={{x:"6%",opacity:0,scale:.5,transition:{duration:0.4}}}>
        <NavLink className="introductionWrapper" to="/Trabajos">
            <span className="titleHome">Nacho Garcia</span><br></br>
            <span className="subtitleHome">Filmmaker  Fotoperiodista</span>
            <img alt="backgroundImage" className="backgroundHome" src={fotografo}></img>
        </NavLink>
    </motion.div>
  )
}

