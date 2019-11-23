import React from 'react'
import ReactDOM from 'react-dom'
import ContentComponent from './components/content/ContentComponent'
import HeaderComponent from './components/header/HeaderComponent'

import './assets/scss/main.scss'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
    return (
        <div>
            <HeaderComponent />
            <ContentComponent />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

