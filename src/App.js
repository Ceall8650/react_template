require('./App.sass')

import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Article, Nav} from './Components';

//  注意元件開頭第一個字母都要大寫
class App extends React.Component {
    // constructor它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。
    //透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
    constructor(props) {
        super(props);
        this.state = {};
    }
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return ( 
            <div>
                <Header />
                <hr></hr>
                <Nav />
                <hr></hr>
                <Article />
            </div>
        );
    }
}

export default App;