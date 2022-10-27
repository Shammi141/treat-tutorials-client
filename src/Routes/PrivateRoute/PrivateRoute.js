import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    //managing loading time
    if(loading){
        return <h2 className='text-warning'>I am loading. Wait Please..!</h2>
    }

    if(!user){
        return <Navigate to= '/login' state = {{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;