import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">

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
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/add">Add New</Nav.Link>
                                    <Nav.Link as={Link} to="/manageinventory">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/myitem">MY Item</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button className='btn btn-link text-primary text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;