import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="m-auto">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="justify-content-end">
                <Nav.Link as={Link} to ="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
                <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;