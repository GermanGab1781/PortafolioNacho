import React from 'react';
import { motion } from 'framer-motion';
import imgej from '../media/imgEj.jpg';
import imgej2 from '../media/imgEj2.jpg';
import imgej3 from '../media/imgEj3.jpg';
import imgej4 from '../media/imgEj4.png';
import imgej5 from '../media/imgEj5.jpg';
import imgej6 from '../media/imgEj6.jpg';
import { Carousel } from 'react-bootstrap';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';

export default function FotografiaPage() {
const ImgEj = imgej;
const ImgEj2 = imgej2 ;
const ImgEj3 = imgej3 ;
const ImgEj4 = imgej4 ;
const ImgEj5 = imgej5 ;
const ImgEj6 = imgej6 ;

  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}} className="fotografiaPage">  
    
      <span className="titleSectionPages">Fotografia</span>
      <span className="trabajosTitle">Trabajos</span>
      
      <div className="trabajosWrapper">
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'>  
            <TrabajoBlock bgImg={ImgEj} title={"Boda Familia Gonzales"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={ImgEj2} title={"Festival de la Cerveza"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={ImgEj3} title={"Entrenando"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
          <TrabajoBlock bgImg={ImgEj4} title={"Pobreza en el pais"} description={"Boda familia"} />
          </NavLink>
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={ImgEj5} title={"Maldita sea no de nuevo"} description={"Boda familia"} />
          </NavLink>   
          <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
            <TrabajoBlock bgImg={ImgEj6} title={"Cagada a palos"} description={"Boda familia"} /> 
          </NavLink>
      </div>
      
      <Carousel className='carouselStyle' fade>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj6} alt="ej"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj3} alt="ej"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj5} alt="ej"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj3} alt="ej"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj2} alt="ej"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block carouselImg' src={ImgEj3} alt="ej"></img>
        </Carousel.Item>
      </Carousel>
      
      
    </motion.div>
  )
}

