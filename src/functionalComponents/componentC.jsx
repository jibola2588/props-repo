import React from 'react';
import ComponentF from './componentF';
import ComponentG from './componentG';

const ComponentC = () => {
  return (
    <div>
      <h3>second child of A</h3>
      <p>componentC</p>
      <ComponentF />
      <ComponentG />
    </div>
  );
}

export default ComponentC;