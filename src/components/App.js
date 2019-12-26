import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonPanel} from './ButtonPanel';
import {Display} from './Display';

export const App = (props) => {
  return(
    <div id = "calculator-holder">
      <Display />
      <ButtonPanel />
    </div>
  )
}

