import React from 'react';

export const display = (props) => {
  return(
    <div className = 'calc-display'>
      <p>{props.result ? props.result : '0'}</p>
    </div>
  )
}