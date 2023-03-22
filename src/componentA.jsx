import React, { Component } from 'react';

export default class ComponentA extends Component {
     constructor(){ 
        super()
        this.state = 0
     }
    render() {
    return (
      <div>
        This is component A
        <p>the value of state is {this.state}</p>
      </div>
    );
  }
}
