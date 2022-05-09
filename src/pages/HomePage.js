import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';


export default function HomePage() {


  return (
    <motion.div initial={{opacity:0,scale:.7}}animate={{opacity:1,scale:1,transition:{duration:1}}}exit={{opacity:0}}>

        <div className="introductionWrapper">
            <span className="titleHome">Nacho Garcia</span><br></br>
            <span className="subtitleHome">Fotografia</span>
        </div>

    </motion.div>
  )
}
