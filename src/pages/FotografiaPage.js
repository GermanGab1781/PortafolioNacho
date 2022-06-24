import { motion} from 'framer-motion';
import TrabajoBlock from '../components/TrabajoBlock';
import { NavLink } from 'react-router-dom';

export default function FotografiaPage() {



return (   
  <motion.div className="FotografiaPageWrapper" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth,transition:{duration:1}}}>
    <span className="titleSectionPages">Fotografia</span>
    <span className="trabajosTitle">Trabajos</span>

    <div className="trabajosWrapper">
      <NavLink to='/PortafolioNacho/TrabajoEjemplo'>  
        <TrabajoBlock bgImg={''} title={"Boda Familia Gonzales"} description={"Boda familia"} />
      </NavLink>
      <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
        <TrabajoBlock bgImg={''} title={"Festival de la Cerveza"} description={"Boda familia"} />
      </NavLink>
      <NavLink to='/PortafolioNacho/TrabajoEjemplo'> 
        <TrabajoBlock bgImg={''} title={"Festival de la Cerveza"} description={"Boda familia"} />
      </NavLink>
    </div>
  </motion.div>
)
}

