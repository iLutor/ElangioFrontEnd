import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent';
import LoginComponent from './components/login/LoginComponent';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeComponent} />
                    <Route path='/login' component={LoginComponent} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;


