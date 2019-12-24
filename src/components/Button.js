import React from 'react';

export const Button = (props) => {
  return (
    <button onClick = {props.onClick} className = {props.className} style={props.style}>
      {props.value}
    </button>
  )
}