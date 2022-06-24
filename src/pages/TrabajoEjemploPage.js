import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import ReactPlayer from 'react-player';



export default function TrabajoEjemploPage() {
      const imagesUrls = [{}
                      
                      
                    ];
    
      const [visible, setVisible]= useState(false);
      const [indexId, setIndexId]= useState(0);
      function openImgViewer(index){
        setVisible(true);
        setIndexId(index);
      }


  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1,transition:{duration:2}}}exit={{opacity:0}}>
        <span className="titleSectionPages"> Trabajo Ejemplo</span>
        
        <div className="trabajoEjWrapper">
            <div className="trabajoEjDesc">
                <span>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
                    desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, 
                    el cual incluye versiones de Lorem Ipsum.</span>
                    <br/><br/><p className='clickeame'>IMAGENES PANTALLA COMPLETA AL CLICKEARLAS</p>
            </div>

            <div className='trabajoVid'>
                <ReactPlayer controls="true" width={"35vw"} height={"25vw"} url="https://www.youtube.com/watch?v=Zasx9hjo4WY"/>
            </div>
            
            <div className="trabajoEjImgs">
                
                {imagesUrls.map((img,index)=>{
                    return(
                        <img className='trabajoEjImg' onClick={()=>{openImgViewer(index)}} src={img.src} alt={img.alt}/>
                    )
                })}
                
            </div>
        </div>
        
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <Viewer visible={visible} activeIndex={indexId} onClose={()=>{setVisible(false);}} images={imagesUrls}/>
        </motion.div>
        
        

    </motion.div>
  )
}
