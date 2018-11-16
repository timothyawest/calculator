import React from 'react';


function setButtons(props){
  return (
  <div id="buttons">
    <button id="b7" className="button btn-num" onClick={props.onClick}>7</button>
    <button id="b8" className="button btn-num" onClick={props.onClick}>8</button>
    <button id="b9" className="button btn-num" onClick={props.onClick}>9</button>
    <button id="bDiv" className="button btn-fn" onClick={props.onClick}>{String.fromCharCode(247)}</button>
    <button id="bClear" className="button btn-clr" onClick={props.onClick}>C</button>

    <div></div>
    <button id="b4" className="button btn-num" onClick={props.onClick}>4</button>
    <button id="b5" className="button btn-num" onClick={props.onClick}>5</button>
    <button id="b6" className="button btn-num" onClick={props.onClick}>6</button>
    <button id="bMul" className="button btn-fn" onClick={props.onClick}>{String.fromCharCode(215)}</button>
    <button id= "bBack" className="button btn-clr" onClick={props.onClick}>{String.fromCharCode(9003)}</button>
   
    <div></div>
    <button id="b1" className="button btn-num" onClick={props.onClick}>1</button>
    <button id="b2" className="button btn-num" onClick={props.onClick}>2</button>
    <button id="b3" className="button btn-num" onClick={props.onClick}>3</button>
    <button id="bMinus" className="button btn-fn" onClick={props.onClick}>-</button>
    <button id="bPer" className="button btn-fn" onClick={props.onClick}>%</button>
   
    <div></div>
    <button id="b0" className="button btn-num" onClick={props.onClick}>0</button>
    <button id="bDeci" className="button btn-num" onClick={props.onClick}>.</button>
    <button id="bPlusMinus" className="button btn-num" onClick={props.onClick}>{String.fromCharCode(177)}</button>
    <button id="bPlus" className="button btn-fn" onClick={props.onClick}>+</button>
    <button id="bEquals" className="button btn-fn" onClick={props.onClick}>=</button>
  </div>
  );
}

export default setButtons;
