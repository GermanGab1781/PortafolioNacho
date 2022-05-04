import React from 'react';
import SectionBlock from "../components/SectionBlock";
import { NavLink } from 'react-router-dom';
import '../index.css';
import Companchiro from '../imgEj.jpg';
import AMUI from '../imgEj2.jpg';
import { motion } from 'framer-motion';

export default function HomePage() {
const Rengoku = AMUI ;
const Nashetampicho = Companchiro;
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1,transition:{duration:2}}}exit={{opacity:0}}>

        <div className="introductionWrapper">
            <span className="title">Nacho Garcia</span><br></br>
            <span className="subtitle">Fotografia</span>
        </div>
        
        <div className="sectionsWrapper">
            <NavLink to='/PortafolioNacho/Fotografia'>
                <SectionBlock bgImg={Nashetampicho} title="Fotografia" description="XD"/>
            </NavLink>
            <SectionBlock bgImg={Rengoku} title="Filmmaking" description="XD"/>
        </div>

    </motion.div>
  )
}
