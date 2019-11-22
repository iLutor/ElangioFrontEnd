import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.scss'


const HeaderComponent = () => {

    return (
        <>
            <Container className="h-100" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <Row>
                    <Col md={12} xs={12} sm={12} lg={12} >
                        <h3>Hi Sebastian Acuña,</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12} sm={12} lg={12} >
                        <h3>Welcome back</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )


}

export default HeaderComponent