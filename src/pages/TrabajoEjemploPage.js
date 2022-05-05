import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import Companchiro from '../imgEj.jpg';
import AMUI from '../imgEj2.jpg';


export default function TrabajoEjemploPage() {
  const Rengoku = AMUI ;
  const Nashetampicho = Companchiro;
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1,transition:{duration:2}}}exit={{opacity:0}}>
        <span className="titleSectionPages"> Trabajo Ejemplo</span>
        
        <div className="trabajoEjWrapper">
            <div className="trabajoEjDesc">
                <span>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
                    desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                    el cual incluye versiones de Lorem Ipsum.</span>
            </div>
            <div className="trabajoEjCarousel">
                <Carousel className="trabajoEjCarouselStyle"  fade>
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
            </div>

            <div className="trabajoEjImgs">
                <img className="trabajoEjImg" src={Rengoku} alt="XD"/>
                <img className="trabajoEjImg" src={Companchiro} alt="XD"/>
                <img className="trabajoEjImg" src={Rengoku} alt="XD"/>
                <img className="trabajoEjImg" src={Rengoku} alt="XD"/>
            </div>
        </div>

        

    </motion.div>
  )
}
