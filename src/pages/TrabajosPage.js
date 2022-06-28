import { motion} from 'framer-motion';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';
import BodaThumbnail from '../media/Fotografia/BodaEj/boda1.jpg'
import CulturalThumbnail from '../media/Fotografia/EventoCulturalEj/Cultural1.jpg'
import ConciertoThumbnail from '../media/Fotografia/ConciertoEj/concierto1.jpg'
import ArcaneThumbnail from '../media/Filmmaking/Arcane/Arcane1.jpg'
import RevolucionThumbnail from '../media/Filmmaking/Revolucion/Revolucion1.jpg'
export default function TrabajosPage() {

const bodaThumbnail = BodaThumbnail;
const culturalThumbnail = CulturalThumbnail;
const conciertoThumbnail = ConciertoThumbnail;
const arcaneThumbnail = ArcaneThumbnail;
const revolucionThumbnail = RevolucionThumbnail;

return (   
  <motion.div className="TrabajosPageWrapper" initial={{opacity:0,y:"150%"}} animate={{opacity:1,y:0,transition:{duration:1}}} exit={{y:"-150%",transition:{duration:0.3}}}>
    <span className="trabajosTitle">Fotografia</span>
    <div className="trabajosWrapper">
      <NavLink to='/TrabajoEjemplo'>  
        <TrabajoBlock  bgImg={bodaThumbnail} title={"Boda Familia Gonzales"} description={"Boda familia Gonzales"} />
      </NavLink>
      <NavLink to='/TrabajoEjemplo'> 
        <TrabajoBlock  bgImg={culturalThumbnail} title={"Cultura en Oxaca"} description={"Tradicion cultural Oxaca"} />
      </NavLink>
      <NavLink to='/TrabajoEjemplo'> 
        <TrabajoBlock bgImg={conciertoThumbnail} title={"Festival de la Cerveza"} description={"Festival de la cerveza"} />
      </NavLink>
    </div>
    <span className="trabajosTitle">Filmmaking</span>
    <div className="trabajosWrapper filmmaking">
      <NavLink to='/TrabajoEjemplo'>  
        <TrabajoBlock bgImg={arcaneThumbnail} title={"Arcane"} description={"Miniserie Arcane de Riot Games"} />
      </NavLink>
      <NavLink to='/TrabajoEjemplo'> 
        <TrabajoBlock bgImg={revolucionThumbnail} title={"Revolución"} description={"Pelicula revolucion del procer San Martin"} />
      </NavLink>
    </div>
  </motion.div>
)
}

