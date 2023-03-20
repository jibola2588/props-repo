import React, { Component } from 'react';
import Button from '../components/button'

export default class Practice extends Component {
  render() {
    console.log(this.props)
    const {name,age,gender,btn,bgColor} = this.props.user
    return (
      <div>
        <div
  class="rounded-2xl border  p-1 shadow-xl max-w-xl"
>
    <div class="m-4">
      <h3>name : {name}</h3>
      <h3>age : {age} </h3>
      <h3>gender: {gender}</h3>
        <Button bgColor = {bgColor}>
           {btn}
        </Button>
      
    </div>
</div>

      </div>
    );
  }
}
