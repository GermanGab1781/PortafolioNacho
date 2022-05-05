import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
  <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}} className="notFoundWrapper">
    <p>Dirección no encontrada</p>
    <NavLink to="/PortafolioNacho">Volver al inicio</NavLink>
  </motion.div>
  )
}
