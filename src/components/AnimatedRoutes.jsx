import React from 'react';
import { Route , Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import TrabajosPage from '../pages/TrabajosPage';
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import TrabajoEjemploPage from '../pages/TrabajoEjemploPage';

function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes  location={location} key={location.pathname}>
            <Route path='/PortafolioNacho' element={<HomePage />}/>
            <Route path='/Trabajos' element={<TrabajosPage/>}/>
            <Route path='/TrabajoEjemplo' element={<TrabajoEjemploPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;