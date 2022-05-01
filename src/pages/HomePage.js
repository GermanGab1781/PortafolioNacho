import React from 'react'
import {Container, Carousel, Navbar, Nav } from "react-bootstrap";
import SectionBlock from "../components/SectionBlock";
import { NavLink } from 'react-router-dom';
import '../index.css';
import Companchiro from '../imgEj.jpg';
import { motion } from 'framer-motion';

export default function HomePage() {
const Nashetampicho = Companchiro;
  return (
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        {/*
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
        */}

        <div className="introductionWrapper">
            <span className="title">Nacho Garcia</span><br></br>
            <span className="subtitle">Fotografia</span>
        </div>
        
        <div className="sectionsWrapper">
            <NavLink to='/PortafolioNacho/Fotografia'>
                <SectionBlock bgImg={Nashetampicho} title="Filmmaking" description="XD"/>
            </NavLink>
            <SectionBlock bgImg={Nashetampicho} title="Fotografia" description="XD"/>
        </div>
        
        {/*
        <div className="carouselsWrapper">
            <Carousel className="carouselStyle side1">
                <Carousel.Item>
                    <img className="d-block w-100" src={Nashetampicho} alt="first"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Nashetampicho} alt="second"></img>
                </Carousel.Item>
        </Carousel>

            <Carousel className="carouselStyle side2">
                <Carousel.Item>
                    <img className="d-block w-100 " src={Nashetampicho} alt="first"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Nashetampicho} alt="second"></img>
                </Carousel.Item>
            </Carousel>

            <Carousel className="carouselStyle side3">
                <Carousel.Item>
                    <img className="d-block w-100" src={Nashetampicho} alt="first"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Nashetampicho} alt="second"></img>
                </Carousel.Item>
            </Carousel>

        </div>
        */}

    </motion.div>
  )
}
