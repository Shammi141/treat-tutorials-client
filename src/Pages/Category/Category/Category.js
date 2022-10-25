import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    //loading data
    const tutorial = useLoaderData();
    
    return (
        <div>
            
            <h2>this is category: {tutorial.length}</h2>
        </div>
    );
};

export default Category;