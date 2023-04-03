import React, { Component } from 'react';
import ConditionalRendering from './31-03-23'
import { users } from '../assests/data';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        users:[]
      }
  
    }
 
    handleClick = async () => { 
      try{ 
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await res.json();
          console.log(data);
          this.setState({
            users:data
          })
      }catch(err){
         console.log(err.message)
      }
    }

  render() {
  //  console.log(users);
  
    return (
     <>

     <button 
     className='bg-red-500 py-4 px-8 text-white'
     onClick = {this.handleClick}
     >Click me</button>
         <div 
      
      style = {{
        display:'flex',
        justifyContent:'space-between',
       alignItems:'center',
       flexWrap:'wrap'
      }}>
        { 
          this.state.users.map(user => (
            <ConditionalRendering  {...user}/>
          ))
        }
       
      </div>  
     </>
    );
  }
}
