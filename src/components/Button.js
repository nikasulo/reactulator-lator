import React from 'react';

export const button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.value}
    </button>
  )
}