require('./App.sass')

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div><h1> Hello, World! </h1></div>
        );
    }
}

export default App;