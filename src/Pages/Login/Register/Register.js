import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const handelSubmit = (event) =>{
        event.preventDefault();
        
    }
    return (
        <Form onSubmit = {handelSubmit} className='w-75 ms-5'>
            <h2 className='text-primary my-4 text-center'>Registration form</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name = "name" type="text" placeholder="Enter name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name = "photoURL" type="text" placeholder="Enter photoU" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "password" type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    );
};

export default Register;