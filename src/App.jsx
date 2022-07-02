import { BrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from "react";

function App(){
return(
    <BrowserRouter>
        <Navbar/>
        <AnimatedRoutes/>
    </BrowserRouter>
);
}
export default App;