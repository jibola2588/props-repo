import React,{createContext} from 'react';
import ComponentC from './componentC'
import ComponentB from './componentB'

export  const dataContext = createContext()

const initialstate = 0

const countFn = (state = initialstate ,action) => { 
  switch(action.type){ 
     case 'add': 
      return state +1
      break;
      case 'sub':
        return state -1
      break;
      case 'mul':
        return state *2
      break;
      case 'div':
        return state /3
      break;
      default : 
      return initialstate
  }
}


const ComponentA = () => {

  const [count,dispatch] = React.useReducer(countFn,initialstate)


    const user = {
        name:'james ggggggg',
        age:20,
        gender:'male'
    }

    const handleMessage = (item) => { 
        console.log('my name  is' + item)
    }

  return (
    <dataContext.Provider value={{dispatch,count}}>
      <h1>parent component</h1>
      <p>componentA</p>
      <ComponentB
       user = {user}
       handleMessage = {handleMessage}
         />
      <ComponentC />
    </dataContext.Provider>
  );
}

export default ComponentA;
