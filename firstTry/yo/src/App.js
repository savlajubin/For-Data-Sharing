import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
  <Yo init={'Jubin'} />
        </p>
      </div>
    );
  }
}

class Yo extends Component {
    constructor(props){
        super(props);
        this.state = {ekVariable: this.props.init};
//        this.clickFun=this.clickFun.bind(this);
    }
    
    clickFun = () => {
        this.setState({yo:'clicked'});
    }
    render() {
        return(
                <div>
                <p>yoyoyoyoyo</p>
                <button onClick={this.clickFun}>click karo</button>
                <p>{this.state.ekVariable} --- {this.state.yo}</p>
        <p>{JSON.stringify(this.state)}</p>
                </div>
                );
    }
}

export default App;
