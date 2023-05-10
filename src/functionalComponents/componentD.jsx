import React from 'react';
import { dataContext } from './componentA';

const ComponentD = () => {
  const countContext  =  React.useContext(dataContext)
  const {dispatch} = countContext
  
  return (
    <div>
      <h6>first grand child of A</h6>
      <p>componentD</p>
      <button onClick = {() => dispatch({type:'add'})}>+</button>
      <button onClick = {() => dispatch({type:'sub'})}>-</button>
      <button onClick = {() => dispatch({type:'mul'})}>*</button>
      <button onClick = {() => dispatch({type:'div'})}>/</button>
    </div>
  );
}

export default ComponentD;


