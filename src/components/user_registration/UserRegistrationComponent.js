import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import * as Yup from 'yup';
import './user_registration.scss';
import { Component } from 'react';

const UserRegistrationComponent = () => {

  return (
    <Formik
      initialValues={{
        email='',
        password='',
        confirmPassword=''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .matches(/[A-Z{2}\d{2}[A-Z]{2}\d{4}$/i, 'invalid password')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={fields => {
        console.log(fields)
        alert('Success!! :) ' + JSON.stringify(fields))
      }}
      render={({ errors, status, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? 'is-invalid' : '')} />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? 'is-invalid' : '')} />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="text" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} />
            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2"></button>
          </div>
        </Form>
      )}
    />
  )

}

export { UserRegistrationComponent };


