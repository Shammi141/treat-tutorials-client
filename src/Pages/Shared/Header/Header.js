import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="../../../../public/icon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Brand><Link className='text-white fw-bold fs-3 txt' to = '/'>Treat Tutorials</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='text-white txt' to ="/">Tutorials</Link></Nav.Link>
                        <Nav.Link><Link className='text-white txt' to ="/blogs">Blogs</Link></Nav.Link>
                        <Nav.Link><Link className='text-white txt' to ="/faq">FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    {/* <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;