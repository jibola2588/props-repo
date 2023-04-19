import React,{createContext} from 'react';
import ComponentC from './componentC'
import ComponentB from './componentB'

export  const dataContext = createContext()

const ComponentA = () => {
    const user = {
        name:'james ggggggg',
        age:20,
        gender:'male'
    }

    const handleMessage = (item) => { 
        console.log('my name  is' + item)
    }

  return (
    <div>
      <h1>parent component</h1>
      <p>componentA</p>
      <ComponentB
       user = {user}
       handleMessage = {handleMessage}
         />
      <ComponentC />
    </div>
  );
}

export default ComponentA;
