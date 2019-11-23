import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import './header.scss'


const HeaderComponent = () => {

    return (
        <>
            <MDBContainer className="h-100" style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <MDBRow>
                    <MDBCol  md="12" xs="12" sm="12" lg="12" >
                        <h3>Hi Sebastian Acuña,</h3>
                    </MDBCol >
                </MDBRow>
                <MDBRow>
                    <MDBCol  md="12" xs="12" sm="12" lg="12" >
                        <h3>Welcome back</h3>
                    </MDBCol >
                </MDBRow>
            </MDBContainer>
        </>
    )


}

export default HeaderComponent