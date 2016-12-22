require('./App.sass')

import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Article } from './Components';
// import Header from './Components/header';

//  注意元件開頭第一個字母都要大寫
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return ( 
            <div>
                <Header />
                <h1> Hello, World! </h1>
                {<Article />}
            </div>
        );
    }
}

export default App;