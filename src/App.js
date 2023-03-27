import React,{useState} from 'react';
// import './appss'.c
import style from './app.module.css'
import {Container,Header,Footer} from './app.styles'
import Counter from './classes/27-03-23'

const App = () => {
  const [showComp,setShowComp] = useState(true)

  return (
   <Container>
    <p>Main Component</p>
    {showComp &&   <Counter />}
    <button 
    onClick={() => setShowComp(false)}
    >hide comp</button>
    
   </Container>
  );
}

export default App;
