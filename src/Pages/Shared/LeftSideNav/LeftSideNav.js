import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaCloudSun } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {

    //for loading data
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://treat-tutorials-server.vercel.app/tutorial-category')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[]);

    
    const {providerLogin} = useContext(AuthContext);
    const googleProvider  = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //google signIn process
    const handelGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error('Error: ', error))
    }

    //github signin process
    const handelGithubSignIn = () =>{
        providerLogin(githubProvider)
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
                        <Button variant="info" className='tutorials'>
                            <Link className="text-white text-decoration-none" class to={`/category/${category.id}`}>{category.name}</Link>
                        </Button>
                    </p>)
                }
            </div>
            <div>
        {/* for 3types of login button */}
                <ButtonGroup vertical>
                    <Link>
                        <Button onClick={handelGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                    </Link>
                    <Link>
                        <Button onClick={handelGithubSignIn} className='mb-2' variant='outline-primary'><FaGithub></FaGithub> Login with GitHub</Button>
                    </Link>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;