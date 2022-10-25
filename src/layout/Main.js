import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* <Col lg= '3' className='d-none d-lg-block'> */}
                    <Col lg= '3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg = '9'>
                        <Outlet></Outlet>
                    </Col>

                    {/* 2 col hobe */}
                    {/* <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col> */}
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;