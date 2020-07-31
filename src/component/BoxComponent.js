import React, { Component } from 'react';
var styleA1 = {
    width: '200px',
    height: '200px',
    background: 'blue',
    color: 'white',
    fontSize: '24pt',
    cursor: 'pointer'
};
var styleA2 = {
    color: 'orange',
    fontStyle: 'bold'
}
var textA = "BEFORE";
var styleB1 = {
    width: '200px',
    height: '200px',
    background: 'orange',
    color: 'white',
    fontSize: '24pt',
    cursor: 'pointer'
};
var styleB2 = {
    color: 'blue',
    fontStyle: 'bold'
}
var textB = "AFTER";

class BoxComponent extends Component {
    constructor(props){
      super(props)
      this.state ={
        currentStyle: 0,
        allStyle: [[styleA1,styleA2],[styleB1,styleB2]],
        currentText: [textA,textB]
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        let selection = Number(!Boolean(this.state.currentStyle));
        this.setState({
            currentStyle: selection
        })
    }
    render(){
        return (
        <div style={{background:'#61DAFB',padding:'0 10px',borderRadius:'10px 10px'}}>
            <h3>Box color change.</h3>
            <div style={this.state.allStyle[this.state.currentStyle][0]} onClick={this.handleChange}>
                Click<br />here
            </div>
            <h2 style={this.state.allStyle[this.state.currentStyle][1]}>{this.state.currentText[this.state.currentStyle]}</h2>
        </div>
        );
    }
  }

  export default BoxComponent;