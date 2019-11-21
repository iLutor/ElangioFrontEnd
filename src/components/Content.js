import React from 'react';
import CardComponent from './CardComponent.js';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
    

    const rowStyle = {
        marginTop: '20px',
        marginBottom: '30px'
    }

    return(
        <>
        <Container>
            <Row>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Word" />
                </Col>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Pronunciation"/>
                </Col>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Listen"/>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Chat"/>
                </Col>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Movie phrases"/>
                </Col>
                <Col md={6} xs={12} sm={12} lg={4} >
                    <CardComponent name="Statistics"/>
                </Col>
            </Row>
        
        </Container>
        </>
    )


}

export default Content;