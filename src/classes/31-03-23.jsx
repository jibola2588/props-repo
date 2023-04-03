import React, { Component } from 'react';


export default class ConditionalRendering extends Component {
  render() { 
   
    console.log(this.props); 
    const {name,age,gender,isFav,hobby} = this.props 
   


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
       {age &&
         <p>age : {age}</p> }
       {gender && <p>gender:{gender} </p>}
       {isFav &&  <p>isFav : {isFav}</p>}
       {hobby &&  <p>hobby : {hobby} </p>}
     
      </div>
    );
  }
}
