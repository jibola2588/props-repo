import React from 'react';
import { dataContext } from './componentA';

const ComponentF= () => {
  const countContext  =  React.useContext(dataContext)
const {dispatch} = countContext

  return ( 
    <div>
      <h6>third grand child of A</h6>
      <p>componentF</p>
      <button onClick = {() => dispatch({type:'add'})}>+</button>
      <button onClick = {() => dispatch({type:'sub'})}>-</button>
      <button onClick = {() => dispatch({type:'mul'})}>*</button>
    </div>
  );
}

export default ComponentF;