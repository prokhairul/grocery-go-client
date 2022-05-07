import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import Logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">

                        <img
                            src={Logo}
                            width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Register</Nav.Link>
                            <Nav.Link href="#">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;