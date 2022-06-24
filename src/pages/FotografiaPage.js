import { motion} from 'framer-motion';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import BodaThumbnail from '../media/BodaEj/boda1.jpg'
import CulturalThumbnail from '../media/EventoCulturalEj/Cultural1.jpg'
import ConciertoThumbnail from '../media/ConciertoEj/concierto1.jpg'
export default function FotografiaPage() {

const bodaThumbnail = BodaThumbnail;
const culturalThumbnail = CulturalThumbnail;
const conciertoThumbnail = ConciertoThumbnail;
const[exitAnimationType,setExitAnimationType]=useState('exitLeft');
const variants = {
  exitLeft:{x:"-100%",transition:{duration:0.3}},
  exitRight:{x:"100%",transition:{duration:0.3}},
  exitTop:{y:"-150%",transition:{duration:0.3}}
}
function handleChange (animationType){
  if((typeof animationType==="string")){
    setExitAnimationType(animationType)
  }
  return
}
return (   
  <motion.div className="FotografiaPageWrapper" initial={{x:"100%"}} animate={{x:0,transition:{duration:0.5}}} exit={exitAnimationType} variants={variants}>
    <span className="trabajosTitle">Fotografia</span>
    {/*<NavLink onClick={()=>handleChange('exitLeft')} to='/Filmmaking'>
      <span>LEFTEXIT</span>
    </NavLink>
    <NavLink onClick={()=>handleChange('exitRight')} to='/PortafolioNacho'>
      <span>RIGHTEXIT</span>
      </NavLink>*/}

    <div className="trabajosWrapper">
      <NavLink onClick={()=>handleChange('exitTop')} to='/PortafolioNacho/TrabajoEjemplo'>  
        <TrabajoBlock  bgImg={bodaThumbnail} title={"Boda Familia Gonzales"} description={"Boda familia Gonzales"} />
      </NavLink>
      <NavLink onClick={()=>handleChange('exitTop')} to='/PortafolioNacho/TrabajoEjemplo'> 
        <TrabajoBlock  bgImg={culturalThumbnail} title={"Cultura en Oxaca"} description={"Tradicion cultural Oxaca"} />
      </NavLink>
      <NavLink onClick={()=>handleChange('exitTop')} to='/PortafolioNacho/TrabajoEjemplo'> 
        <TrabajoBlock bgImg={conciertoThumbnail} title={"Festival de la Cerveza"} description={"Festival de la cerveza"} />
      </NavLink>
    </div>

    <span className="trabajosTitle">Filmmaking</span>
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

