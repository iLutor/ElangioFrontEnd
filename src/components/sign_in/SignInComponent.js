import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignInComponent = () => {

	return (
		<div className="center ">
			<div className="create-user-form">
				<h4>Sign In user: </h4>
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email('Email is invalid')
							.required('Email is required'),
						password: Yup.string()
							.min(6, 'Password must be at least 6 characters')
							//.matches(/[A-Z{2}\d{2}[A-Z]{2}\d{4}$/i, 'invalid password need numbers and letters')
							.required('Password is required')
					})}
					onSubmit={fields => {
						console.log(fields)
						alert('Success!! :) ' + JSON.stringify(fields))
						//signIn(fields);
					}}
					//render={({ errors, status, touched }) => (
					render={({ errors, touched }) => (
						<Form>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
								<ErrorMessage name="email" component="div" className="invalid-feedback" />
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
								<ErrorMessage name="password" component="div" className="invalid-feedback" />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary mr-2">Sign In</button>
							</div>
						</Form>
					)}
				/>
			</div>
		</div>
	)
}

export default SignInComponent