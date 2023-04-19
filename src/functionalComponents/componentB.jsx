import React from 'react';
import ComponentD from './componentD';
import ComponentE from './componentE';

const ComponentB = ({user,handleMessage}) => {
    const {name,age,gender} = user
  return (
    <div>
      <h3>first child of A</h3>
      <p>componentB</p>
      <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>gender:{gender}</p>
        <button onClick = { () => handleMessage(name)} >pass data</button>
      </div>
      <ComponentD />
      <ComponentE />
    </div>
  );
}

export default ComponentB;