import React from 'react';


function setDisplay(props){
  let number="0";
  if(props.number.length>0)
      number=props.number
  if(number.indexOf(".")<0)
      number=number+".";
  return (
  <div id="display">
    {number}
  </div>
);
}

export default setDisplay;
