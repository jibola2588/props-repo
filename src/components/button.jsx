import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { bgColor } = this.props
    return (
      <button className={`mt-2 bg-${bgColor}-400 text-white py-1 px-2 rounded-sm text-sm font-medium`}>
        {this.props.children}
      </button>
    );
  }
}
