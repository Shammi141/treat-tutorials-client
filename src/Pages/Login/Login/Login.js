import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const {signIn} = useContext(AuthContext);
    //for error
    const [error, setError] = useState('');
    //for redirection
    const navigate = useNavigate();
    //for setup previous user location
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(error => {
            console.error('error: ', error)
            setError(error.message);
        })
    }

    //google signIn process
    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error('Error: ', error))
    }
    //github signin process
    const handelGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error('Error: ', error))
    }

    return (
        <Form onSubmit = {handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "password" type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
{/* rendering register page */}
            <p>Don't have account? Create account now <Link to ="/register">Register here</Link> </p>
            <ButtonGroup vertical>
                <Link>
                    <Button onClick={handelGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                </Link>
                <Link>
                    <Button onClick={handelGithubSignIn} className='mb-2' variant='outline-primary'><FaGithub></FaGithub> Login with GitHub</Button>
                </Link>
            </ButtonGroup>
        </Form>
    );
};

export default Login;