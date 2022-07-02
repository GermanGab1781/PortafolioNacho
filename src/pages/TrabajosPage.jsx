import { motion} from 'framer-motion';
import TrabajoBlock from '../components/TrabajoBlock';
import BodaThumbnail from '../media/Fotografia/BodaEj/boda1.jpg'
import CulturalThumbnail from '../media/Fotografia/EventoCulturalEj/Cultural1.jpg'
import ConciertoThumbnail from '../media/Fotografia/ConciertoEj/concierto1.jpg'
import ArcaneThumbnail from '../media/Filmmaking/Arcane/Arcane1.jpg'
import RevolucionThumbnail from '../media/Filmmaking/Revolucion/Revolucion1.jpg'
import { useState } from 'react';
export default function TrabajosPage() {

const [exitAnimation, setExitAnimation] = useState('exitTop');
const variants ={
  exitTop:{y:"-200%",transition:{duration:0.4}},
  exitBottom:{y:"-50%",transition:{duration:0.3}}
}

return (   
  <motion.div className="TrabajosPageWrapper" initial={{opacity:0,y:"10%"}} animate={{opacity:1,y:0,transition:{duration:1.2}}} exit={exitAnimation} variants={variants}>
    <span className="trabajosTitle">Fotografia</span>
    <div className="trabajosWrapper">
        <TrabajoBlock to='/TrabajoEjemplo' setExit={()=>setExitAnimation('exitBottom')} bgImg={BodaThumbnail} title={"Boda Familia Gonzales"} description={"Boda familia Gonzales"} />      
        <TrabajoBlock to='/TrabajoEjemplo' setExit={()=>setExitAnimation('exitBottom')} bgImg={CulturalThumbnail} title={"Cultura en Oxaca"} description={"Tradicion cultural Oxaca"} />       
        <TrabajoBlock to='/TrabajoEjemplo' setExit={()=>setExitAnimation('exitBottom')} bgImg={ConciertoThumbnail} title={"Festival de la Cerveza"} description={"Festival de la cerveza"} />
    </div>
    <span className="trabajosTitle">Filmmaking</span>
    <div className="trabajosWrapper filmmaking">      
      <TrabajoBlock to='/TrabajoEjemplo' setExit={()=>setExitAnimation('exitBottom')} bgImg={ArcaneThumbnail} title={"Arcane"} description={"Miniserie Arcane de Riot Games"} />     
      <TrabajoBlock to='/TrabajoEjemplo' setExit={()=>setExitAnimation('exitBottom')} bgImg={RevolucionThumbnail} title={"Revolución"} description={"Pelicula revolucion del procer San Martin"} />
    </div>
  </motion.div>
)
}

