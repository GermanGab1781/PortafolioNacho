import React from 'react';
import '../index.css';
import '../pageAnimations.css'
import { motion } from 'framer-motion';
import Companchiro from '../imgEj.jpg';

export default function FotografiaPage() {
  const Nashetampicho = Companchiro;
  return (
    <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
    >  
      <img className='d-block w-50' src={Nashetampicho} alt="ej"></img>
      <img className='d-block w-25' src={Nashetampicho} alt="ej"></img>
    </motion.div>
  )
}

