import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

//premium courses info
const Premium = () => {
    const tutorialInfo = useLoaderData();
    const { title, details, image_url } = tutorialInfo;
    return (
        <div>
            <h2 className='mb-5 text-primary'>Congratulation! You are a premium client now!!</h2>
            <Card className='mb-5' >
                <div className='d-flex justify-content-between align-items-center my-2 mx-2'>
                    <Card.Title>{title}</Card.Title>
                </div>
                <Card.Img className='img-height' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text >
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Premium;