import { BrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Preload from 'react-preload';
import imgej from './imgEj.jpg';
import imgej2 from './imgEj2.jpg';
import imgej3 from './imgEj3.jpg';
import imgej4 from './imgEj4.png';
import imgej5 from './imgEj5.jpg';
import imgej6 from './imgEj6.jpg';

function App(){
const ImgEj = imgej;
const ImgEj2 = imgej2 ;
const ImgEj3 = imgej3 ;
const ImgEj4 = imgej4 ;
const ImgEj5 = imgej5 ;
const ImgEj6 = imgej6 ;
const loading = (<div className="titleHome">Loading....</div>);
const imagesToLoad=[ImgEj,ImgEj2,ImgEj3,ImgEj4,ImgEj5,ImgEj6];
return(
<Preload
    loadingIndicator={loading}
    images={imagesToLoad}
    autoResolveDelay={1}
    resolveOnError={true}
    mountChildren={true}
>
    <BrowserRouter>
        <Navbar/>
        <AnimatedRoutes/>
    </BrowserRouter>
</Preload>
)
}
export default App;