import React from 'react'
import CardComponent from '../card/CardComponent'
import { MDBContainer, MDBRow, MDBCol  } from "mdbreact"


const ContentComponent = () => {


    const rowStyle = {
        marginTop: '20px',
        marginBottom: '30px'
    }

    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Word" />
                    </MDBCol>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Pronunciation" />
                    </MDBCol>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Listen" />
                    </MDBCol>
                </MDBRow>
                <MDBRow style={rowStyle}>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Chat" />
                    </MDBCol>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Movie phrases" />
                    </MDBCol>
                    <MDBCol md="6" xs="12" sm="12" lg="4" >
                        <CardComponent name="Statistics" />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    )


}

export default ContentComponent