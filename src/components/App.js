import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonPanel} from './ButtonPanel';
import {Display} from './Display';

const calcStyles = {
  width: '700px',
}

export const App = (props) => {
  return(
    <div id="calculator-holder" style={calcStyles}>
      <Display />
      <ButtonPanel />
    </div>
  )
}

