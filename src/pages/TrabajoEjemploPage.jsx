import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function TrabajoEjemploPage() {
  const imagesUrls = [{src:require("../media/Fotografia/BodaEj/boda1.jpg"),alt:"Imagen de la Boda numero uno"},
                      {src:require("../media/Fotografia/BodaEj/boda2.jpg"),alt:"Imagen de la Boda numero dos"},
                      {src:require("../media/Fotografia/BodaEj/boda3.jpg"),alt:"Imagen de la Boda numero tres"},
                      {src:require("../media/Fotografia/ConciertoEj/concierto1.jpg"),alt:"Imagen del Concierto numero uno"},
                      {src:require("../media/Fotografia/ConciertoEj/concierto2.jpg"),alt:"Imagen del Concierto numero dos"},
                      {src:require("../media/Fotografia/ConciertoEj/concierto3.jpg"),alt:"Imagen del Concierto numero tres"},
                      {src:require("../media/Fotografia/EventoCulturalEj/Cultural1.jpg"),alt:"Imagen del Eventocultural numero uno"},
                      {src:require("../media/Fotografia/EventoCulturalEj/Cultural2.jpg"),alt:"Imagen del Eventocultural numero dos"},
                      {src:require("../media/Fotografia/EventoCulturalEj/Cultural3.jpg"),alt:"Imagen del Eventocultural numero tres"},
  ];
  const [visible, setVisible]= useState(false);
  const [indexId, setIndexId]= useState(0);
  function openImgViewer(index){
    setVisible(true);
    setIndexId(index);
  }
  useEffect(() => {
    document.body.style.overflowY="scroll";
  }, [visible])  

  
return (
  <motion.div className="TrabajoEjPageWrapper" initial={{y:"-100%"}}animate={{y:0}}exit={{transitionEnd:{display:"none",}}}>
    <span className="titleSectionPages"> Trabajo Ejemplo</span>
    <div className="trabajoEjWrapper">
      <div className="trabajoEjDesc">
        <span>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
  desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas "Letraset", 
  las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, 
        </span>
        <br/><br/><p className='clickeame'>IMAGENES PANTALLA COMPLETA AL CLICKEARLAS</p>
      </div>
      <div className='trabajoVid'>
        <ReactPlayer controls="true" width={"35vw"} height={"25vw"} url="https://www.youtube.com/watch?v=Zasx9hjo4WY"/>
      </div>
      
      <div className="trabajoEjImgs">
        {imagesUrls.map((img,index)=>{
          return(
            <img key={index} className='trabajoEjImg' onClick={()=>{openImgViewer(index)}} src={img.src} alt={img.alt}/>
          )
        })
        }
      </div>
      <NavLink onClick={()=>{document.body.style.overflowY="hidden"}} className="trabajoEjBackButton" to="/Trabajos"  >Volver a Trabajos</NavLink>
    </div>
    <Viewer visible={visible} activeIndex={indexId} onClose={()=>setVisible(false)} images={imagesUrls}/>
  </motion.div>
)
}
