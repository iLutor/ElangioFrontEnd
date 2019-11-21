import React from 'react';
import { Card,Button } from 'react-bootstrap';

const CardC = (props) => {
    
    return(
        <>
        <Card  style={{ width: '17rem' }}>
            <Card.Img  variant="top" src="logo192.png" style={{padding: '10px'}} />
            <Card.Body>
                <Card.Title className='text-center'>{props.name}</Card.Title>
                {/*
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                */}
            </Card.Body>
        </Card>
        </>
    )

}

export default CardC;