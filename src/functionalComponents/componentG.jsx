import React,{useContext} from 'react';
import { dataContext } from './componentA';


const ComponentG = () => {
const countContext  =  useContext(dataContext)
const {count} = countContext
  
  // console.log(dispatch)

  return (
    <div>
      <h6>fourth grand child of A</h6>
      <p>componentG</p>
      <p>count -- {count}</p>
    </div>
  );
}

export default ComponentG;
