import React, { Component } from 'react';
import './App.css';
import SetDisplay from './components/SetDisplay';
import SetButtons from './components/SetButtons';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history:[{
      display: "",
      number: null,
      operation: null
    }]
    }
    document.addEventListener('keydown', function(event) {
        let x = event.key;   // Get the Unicode value
          console.log(event.key);
    });

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(e){
    const state = this.state.history[this.state.history.length-1];
    let history = this.state.history.slice();
    if(!isNaN(e.target.innerHTML)){
        if(state.operation === "bEquals")
          history.push({...state,operation: null, display: e.target.innerHTML});
        else
          history.push({...state, display: state.display  + e.target.innerHTML});
        this.setState({history:history});
       return;
     }
    switch(e.target.id){
        case "bDeci":
          history.push({...state,display:state.display+"."});
          this.setState({history:history});
          console.log("new state:" + this.state);
          return;
        case "bBack":
          console.log("backspace");
          if(history.length !==1)
            history= history.slice(0,history.length-1);
          this.setState({history:history});
          return;
        case "bPlus":
        case "bMinus":
        case "bDiv":
        case "bMul":
        case "bPer":
          if(state.operation !==null && state.operation !== "bEquals"){
            let number =doArithmatic(state.number,state.operation,parseFloat(state.display));
            history.push({...state,display:number.toString(),number:number,operation:e.target.id});
            this.setState({history:history});
          }
          else
            history.push({...state,display:"",number:parseFloat(state.display),operation:e.target.id})
            this.setState({history:history});
          return;
        case "bEquals":
          if(state.operation !==null && state.operation !== "bEquals"){
            let number = doArithmatic(state.number,state.operation,parseFloat(state.display));
            console.log(state.number +" " +state.display+ "="+number);
            history.push({...state,display:number.toString(),number:number,operation:e.target.id});
            this.setState({history:history});
          }
          return;
        case "bPlusMinus":
          if(state.display !==""){
            if(state.display.indexOf("-")===0)
              history.push({...state,display:state.display.substring(1,)})
            else
              history.push({...state,display:"-"+state.display});
            this.setState({history:history});
          }
          return;
        case "bClear":
          history.push({...state,display:"",number:null,operation:null})
          this.setState({history:history});
          return;
        default:
          return;
        }

  }

  render() {
    const history = this.state.history;
    const mystate = history[history.length-1];
    return (
      <div className="App">
        <SetDisplay number={ mystate.display}/>
        <SetButtons onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

function doArithmatic(number1,operation,number2){
    switch(operation){
      case "bPlus":
        return(number1+number2);
      case "bMinus":
        return(number1-number2);
      case "bDiv":
        return(number1/number2);
      case "bMul":
        return(number1*number2);
      case "bPer":
        return(number1/100*number2);
      default:
        return;
    }
}
export default App;
