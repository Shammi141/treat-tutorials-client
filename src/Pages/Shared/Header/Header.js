import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css'
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    //getting user info from context
    const {user} = useContext(AuthContext);
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
                        
    {/* showing user info */}
                        <Nav.Link eventKey={2} href="#memes">
                            <OverlayTrigger overlay={<Tooltip>{user?.displayName}</Tooltip>}>
                                <span>
                                    {
                                        user.photoURL ?
                                            <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                                            : <FaUser></FaUser>
                                    }
                                </span>
                            </OverlayTrigger>
                        </Nav.Link>

                        <Nav.Link href="#deets"><Button>Login</Button></Nav.Link>
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