import React from 'react';
import { motion } from 'framer-motion';

import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';

export default function FilmmakingPage() {

    return (
      <motion.div initial={{opacity:0,scale:.7}}animate={{opacity:1,scale:1,transition:{duration:1}}}exit={{opacity:0}} className="fotografiaPage">  
      
        <span className="titleSectionPages">Filmmaking</span>
        <span className="trabajosTitle">Trabajos</span>
        
        <div className="trabajosWrapper">
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'>  
            <TrabajoBlock bgImg={''} title={"Boda Familia Gonzales"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={''} title={"Festival de la Cerveza"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={''} title={"Entrenando"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
          <TrabajoBlock bgImg={''} title={"Pobreza en el pais"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={''} title={"Maldita sea no de nuevo"} description={"Boda familia"} />
          </NavLink>   
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={''} title={"Cagada a palos"} description={"Boda familia"} /> 
          </NavLink>
        </div>
        
        
      </motion.div>
  )
}
