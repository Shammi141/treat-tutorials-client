import React from 'react';
import './TutorialSummaryCard.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TutorialSummaryCard = ({tutorial}) => {

    const {title, _id, details, image_url} = tutorial;

        return (
        <Card className='mb-5' style={{ width: '70%' }}>
            <Card.Img className='img-height' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                    details.length > 150 ?
                    <p>{details.slice(0, 150) + '...'} <Link to = {`/tutorial/${_id}`}>Read More</Link></p>
                    :
                    <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TutorialSummaryCard;