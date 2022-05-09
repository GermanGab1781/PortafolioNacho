import React from 'react';
import { motion } from 'framer-motion';
import Companchiro from '../imgEj.jpg';
import AMUI from '../imgEj2.jpg';
import { Carousel } from 'react-bootstrap';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';

export default function FilmmakingPage() {
  const Rengoku = AMUI ;
  const Nashetampicho = Companchiro;
    return (
      <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}} className="fotografiaPage">  
      
        <span className="titleSectionPages">Filmmaking</span>
        <span className="trabajosTitle">Trabajos</span>
        
        <div className="trabajosWrapper">
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'>  
            <TrabajoBlock bgImg={Rengoku} title={"Boda Familia Gonzales"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={Nashetampicho} title={"Festival de la Cerveza"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={Rengoku} title={"Entrenando"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
          <TrabajoBlock bgImg={Nashetampicho} title={"Pobreza en el pais"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={Nashetampicho} title={"Maldita sea no de nuevo"} description={"Boda familia"} />
          </NavLink>   
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={Nashetampicho} title={"Cagada a palos"} description={"Boda familia"} /> 
          </NavLink>
        </div>
        
        <Carousel className='carouselStyle' fade>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Rengoku} alt="ej"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Nashetampicho} alt="ej"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Rengoku} alt="ej"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Nashetampicho} alt="ej"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Rengoku} alt="ej"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block carouselImg' src={Nashetampicho} alt="ej"></img>
          </Carousel.Item>
        </Carousel>
        
        
      </motion.div>
  )
}
