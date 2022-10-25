import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

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
                <Navbar.Brand href="#home">Treat Tutorials</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#courses">Tutorials</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
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