import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const Tutorial = () => {
    const tutorial = useLoaderData();
    const {title, details, image_url} = tutorial;

    return (
        <Card className='mb-5' >
            <div className='d-flex justify-content-between align-items-center my-2 mx-2'>
                <Card.Title>{title}</Card.Title>
                <Button variant="outline-primary">Download PDF</Button>
            </div>
            <Card.Img className='img-height' variant="top" src={image_url} />
            <Card.Body>  
                <Card.Text >
                    {details}
                </Card.Text>
            </Card.Body>
            <Link to ={`/tutorial/premium-checkout/${tutorial._id}`}>
                <Button className='w-100' variant="outline-primary">Get Premium Access</Button>
            </Link>
        </Card>
    );
};

export default Tutorial;