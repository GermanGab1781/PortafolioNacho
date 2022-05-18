import React, { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import imgej from '../media/imgEj.jpg';
import imgej2 from '../media/imgEj2.jpg';
import imgej3 from '../media/imgEj3.jpg';
import imgej4 from '../media/imgEj4.png';
import imgej5 from '../media/imgEj5.jpg';
import imgej6 from '../media/imgEj6.jpg';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';

export default function FotografiaPage() {
const ImgEj = imgej;
const ImgEj2 = imgej2 ;
const ImgEj3 = imgej3 ;
const ImgEj4 = imgej4 ;
const ImgEj5 = imgej5 ;
const ImgEj6 = imgej6 ;
const variants={
  hidden:{opacity:0.5,scale:.2},
  hidden2:{scale:.7},
  visible:{opacity:1,scale:1,transition:{duration:1}},
  loading:{opcaciy:1,scale:1, transition:{duration:2.5}}
}
const [show,setShow]= useState(true);
  useEffect(()=>{
    const timer= setTimeout(()=>{setShow(false);},1111110);
    return()=> clearTimeout(timer);
  },[]);

  return (   
    <div>  
      <div className={show ? 'loading' : 'finishedLoading' }>
        <span className='loadingText'>Cargando</span>
        <div className='loadingPropsWrapper'>
          <motion.div className='loadingProp'  initial={"hidden"} animate={"loading"} variants={variants}>
            <TrabajoBlock  bgImg={ImgEj} title={"Cargando..."} description={"Loading prop"}/>
          </motion.div>
          <motion.div className='loadingProp' initial={"hidden"} animate={"loading"} variants={variants}>
            <TrabajoBlock  bgImg={ImgEj2} title={"Cargando..."} description={"Loading prop"}/>
          </motion.div>
          <motion.div className='loadingProp' initial={"hidden"} animate={"loading"} variants={variants}>
            <TrabajoBlock  bgImg={ImgEj3} title={"Cargando..."} description={"Loading prop"}/>
          </motion.div>
          <motion.div className='loadingProp' initial={"hidden"} animate={"loading"} variants={variants}>
            <TrabajoBlock  bgImg={ImgEj4} title={"Cargando..."} description={"Loading prop"}/>
          </motion.div>
        </div>
      </div>
        
        
      <motion.div initial="hidden" animate={show ? "hidden2" : "visible"} variants={variants}>
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
      </motion.div>
    
    </div>
  )
}

