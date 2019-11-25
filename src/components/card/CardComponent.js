import React from 'react'
import './card.scss'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact'

const CardComponent = (props) => {
	return (
		<MDBCard className="d-flex align-items-center card-component">
			<MDBCardImage className="" src="logo_small.png" />
			<MDBCardBody>
				<MDBCardTitle>{props.name}</MDBCardTitle>
			</MDBCardBody>
		</MDBCard >
	)
}

export default CardComponent