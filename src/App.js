import React,{useState} from 'react';
// import './appss'.c
import style from './app.module.css'
import {Container,Header,Footer} from './app.styles'
// import Counter from './classes/27-03-23'
import Counter from './functionalComponents/12-04-23'
import Form from './functionalComponents/14-04-23'
import UnControlledForm from './functionalComponents/unControlledForm'
import ParentComponent from './classes/ParentComponent'

const App = () => {
  // const [showComp,setShowComp] = useState(true)

  return (
   <Container>
    {/* <p>Main Component</p>
    {showComp &&   <Counter />}
    <button 
    onClick={() => setShowComp(false)}
    >hide comp</button> */}  
        {/* <ParentComponent/> */}
        {/* <Counter />  */}
        {/* <Form />  */}
        <UnControlledForm /> 
   </Container>
  );
}

export default App;
