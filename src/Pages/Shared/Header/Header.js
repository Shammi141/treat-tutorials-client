import React from 'react';
import './Header.css';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {

    //getting user info from context
    const {user, logOut} = useContext(AuthContext);

    const handelLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error('error:', error))
    }
    return (
        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
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
                        <Nav.Link>
                            {/* user name tooltips */}
                            <OverlayTrigger overlay={<Tooltip>
                                {user?.displayName}
                                </Tooltip>}>
                                <span>
                                    {
                                        user?.photoURL ?
                                            <Image style={{ height: '47px' }} roundedCircle src={user.photoURL}></Image>
                                            : <FaUser></FaUser>
                                    }
                                </span>
                            </OverlayTrigger>
                            {
                                user?.uid ?
                                <> 
                                        <Button className="ms-3" onClick={handelLogOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Button className='ms-3'>
                                            <Link className='text-white tutorial-text ' to='/login'>Login</Link>
                                    </Button>
                                    {/* <Link to = '/register'>Register</Link> */}
                                </>
                            }
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