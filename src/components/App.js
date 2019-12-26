import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonPanel} from './ButtonPanel';
import {Display} from './Display';
import '../stylesheets/main.scss';

const calcStyles = {
  width: '700px',
}

export const App = (props) => {
  return(
    <div className="calculator-holder column" style={calcStyles}>
      <div>
        <Display />
        <ButtonPanel />
      </div>
    </div>
  )
}

