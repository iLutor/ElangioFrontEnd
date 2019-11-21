import React from 'react';
import { Card,Button } from 'react-bootstrap';
import '../assets/scss/main.scss'

const CardComponent = (props) => {    
    return(
        <Card className="card-component">
            <Card.Img src="logo_small.png"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;