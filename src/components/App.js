import React from 'react';
import {ButtonPanel} from './ButtonPanel';
import {Display} from './Display';
import {calculate} from '../logic/calculate';
import '../stylesheets/main.scss';

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

