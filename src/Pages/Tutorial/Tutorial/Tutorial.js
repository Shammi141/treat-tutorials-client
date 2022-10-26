import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Tutorial = () => {
    const tutorial = useLoaderData();
    const {title, details, image_url} = tutorial;

    return (
        <Card className='mb-5' >
            <Card.Img className='img-height' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Tutorial;