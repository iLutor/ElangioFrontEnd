import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    

    return (
        <div>
            <Header />
            <Content />
        </div>
    )

}


ReactDOM.render(<App />, document.getElementById('root'));

