import { BrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App(){
return(
<BrowserRouter>
    <Navbar/>
    <AnimatedRoutes/>
</BrowserRouter>
)
}
export default App;