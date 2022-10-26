import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGooglePlusG, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {

    //for loading data
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tutorial-category')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[]);

    //google signIn process
    const {providerLogin} = useContext(AuthContext);
    const googleProvider  = new GoogleAuthProvider();
    const handelGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error('Error: ', error))
    }
    return (
        <div>
            <h4 className='my-4'>Find Your Tutorials</h4>
            <div>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to = {`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant='outline-primary'><FaGooglePlusG></FaGooglePlusG> Login with Email</Button>
                    <Button onClick={handelGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button className='mb-2' variant='outline-primary'><FaGithub></FaGithub> Login with GitHub</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;