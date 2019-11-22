import React from 'react'
import { Card } from 'react-bootstrap'
import './card.scss'

const CardComponent = (props) => {
    return (
        <Card className="card-component">
            <Card.Img src="logo_small.png" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardComponent