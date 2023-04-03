import React, { Component } from 'react';


export default class ConditionalRendering extends Component {
  render() { 
   
    console.log(this.props); 
    const {name,email,address,username} = this.props 
   


    return (
      <div 
      style={{
        border:'1px solid gray',
        padding:'1rem',
        margin:'5px',
      }}
      >
       {
          name ? <p>name : {name}</p> : null   
       }
       {
          email ? <p>email : {email}</p> : null   
       }
       {username &&
         <p>username: {username}</p> }
       {address.city && <p>city:{address.city} </p>}
       {address.street &&  <p>street : {address.street}</p>}   
      </div>
    );
  }
}
