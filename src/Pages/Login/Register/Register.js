import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    //for error
    const [error, setError] = useState('');

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })

    }
    return (
        <Form onSubmit = {handelSubmit} className='w-75 ms-5'>
            <h2 className='text-primary my-4 text-center'>Registration form</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name = "name" type="text" placeholder="Enter name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Email address</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail3">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name = "photoURL" type="text" placeholder="Enter photoURL" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "password" type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;