import React from 'react'
import ReactDOM from 'react-dom'
import ContentComponent from './components/content/ContentComponent'
import HeaderComponent from './components/header/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

const App = () => {
    return (
        <div>
            <HeaderComponent />
            <ContentComponent />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

