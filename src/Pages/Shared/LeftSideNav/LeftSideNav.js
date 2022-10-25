import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LeftSideNav = () => {

    //for loading data
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tutorial-category')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[]);
    return (
        <div>
            <h4>All Tutorials: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to = {`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
           
        </div>
    );
};

export default LeftSideNav;