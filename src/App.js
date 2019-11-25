import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent'
import LoginComponent from './components/login/LoginComponent'
import SignInComponent from './components/sign_in/SignInComponent'

const App = () => {
	return (
		<div className="App">
			{a}
			<Router>
				<Switch>
					<Route path='/' exact component={HomeComponent} />
					<Route path='/npmlogin' component={LoginComponent} />
					<Route path='/sign-in' component={SignInComponent} />
				</Switch>
			</Router>
		</div>
	)
}

export default App


