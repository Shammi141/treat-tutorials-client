import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='my-5'>
            <h3 className='mb-3'>Everything You Need To Know</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the main purpose of the Treat Tutorial?</Accordion.Header>
                    <Accordion.Body>
                        The main purpose of Treat Tutorial is share &explore knowledge with others. Also helps to know that how frontend and backend interacts. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What should I know to start this course?</Accordion.Header>
                    <Accordion.Body>
                        You need nothing to know previously just stay tune and practice more and more on time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Who can learn from this site?</Accordion.Header>
                    <Accordion.Body>
                        Everyone from every profession can learn from this.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How long the session will take?</Accordion.Header>
                    <Accordion.Body>
                        There is no time limits. As soon as you can finished from your side.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;