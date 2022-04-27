import {Container, Carousel, Navbar, Nav } from "react-bootstrap";
import SectionBlock from "./components/SectionBlock";
import Companchiro from './imgEj.jpg';
import './index.css';
import './sectionBlock.css';

function App(){
const Nashetampicho = Companchiro;
return(
<div>
    <Navbar bg="dark" variant="dark">
        <Container fluid >
            <Navbar.Brand className="navFonts">COMPANCHIRO</Navbar.Brand>
            <Nav className="navFonts">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Photos</Nav.Link>
                <Nav.Link>Contact me</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    <div className="introductionWrapper">
        <span className="title">Nacho Garcia</span><br></br>
        <span className="subtitle">Fotografia</span>
    </div>
    
    <div className="sectionsWrapper">
        <SectionBlock bgImg={Nashetampicho} title="Bodas" description="XD"/>
        <SectionBlock bgImg={Nashetampicho} title="Arte" description="XD"/>
        <SectionBlock bgImg={Nashetampicho} title="Equipo" description="XD"/>
    </div>
    


    <Carousel className="carouselStyle">
        <Carousel.Item>
            <img className="d-block w-100" src={Nashetampicho} alt="first"></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Nashetampicho} alt="second"></img>
        </Carousel.Item>
    </Carousel>


</div>
)
}
export default App;