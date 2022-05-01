import React from 'react';
import FotografiaPage from '../pages/FotografiaPage';
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route , Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/PortafolioNacho' element={<HomePage/>}/>
            <Route path='/PortafolioNacho/Fotografia' element={<FotografiaPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;