import React, { Component } from 'react';
import ConditionalRendering from './31-03-23'
import { users } from '../assests/data';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount(){ 

    }

  
  render() {
   console.log(users);
  
    return (
      <div 
      
      style = {{
        display:'flex',
        justifyContent:'space-between',
       alignItems:'center',
       flexWrap:'wrap'
      }}>
        { 
          users.map(user => (
            <ConditionalRendering  {...user}/>
          ))
        }
       
      </div>
    );
  }
}
