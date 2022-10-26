import React from 'react';
import './TutorialSummaryCard.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TutorialSummaryCard = ({tutorial}) => {

    const {title, _id, details, image_url} = tutorial;

        return (
        <Card className='mb-5' style={{ width: '70%' }}>
            <Card.Img className='img-height' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='mb-2'>
                    {
                    details.length > 150 ?
                    <p>{details.slice(0, 150) + '...'} <Link  to = {`/tutorial/${_id}`}>Read More</Link></p>
                    :
                    <p>{details}</p>
                    }
                </Card.Text>
                    <Button variant="outline-success">Download</Button>
            </Card.Body>
        </Card>
    );
};

export default TutorialSummaryCard;