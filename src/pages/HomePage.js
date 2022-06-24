import React from 'react';
import '../index.css';
import Fotografo from '../media/fotografo.jpg'
import { motion } from 'framer-motion';
export default function HomePage() {
  const fotografo = Fotografo;
  
  return (
    <motion.div className="HomePageWrapper" initial={{opacity:0,scale:.6}} animate={{opacity:1,scale:1,transition:{duration:1.7}}}exit={{x:window.innerWidth,transition:{duration:0.3}}}>
        <div className="introductionWrapper">
            <span className="titleHome">Nacho Garcia</span><br></br>
            <span className="subtitleHome">Filmmaker  Fotoperiodista</span>
            <img alt="backgroundImage" className="backgroundHome" src={fotografo}></img>
        </div>
    </motion.div>
  )
}

