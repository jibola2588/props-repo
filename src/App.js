import React from 'react';
// import './appss'.c
import style from './app.module.css'
import {Container,Header,Footer} from './app.styles'
import ComponentA from './componentA'


const App = () => {
  return (
   <Container>
      {/* <Header>Heading one</Header>
      <Footer>We are here</Footer> */}
      <ComponentA />
   </Container>
  );
}

export default App;
