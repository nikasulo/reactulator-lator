import React from 'react';
import {ButtonPanel} from './ButtonPanel';
import {Display} from './Display';
import {calculate} from '../logic/calculate';
import '../stylesheets/main.scss';

const calcStyles = {
  width: '700px',
}

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      displayText: null
    }
  }

  handleClick = (buttonName) => {
    let result, currentData;
    currentData = this.state;

    
    result = calculate(currentData, buttonName);
    if (result === 'UNDEFINED'){
      this.setState({
        total: null,
        next: null,
        operation: null,
        displayText: NaN,
      })
      return;
    }
    this.setState(
      {
        total: result.total,
        next: result.next,
        operation: result.operation,
        displayText: result.displayText
      }
    )
  }

  render(){
    const {displayText} = this.state;

    return(
      <div id="calculator-holder" style={calcStyles}>
        <Display result={displayText}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    )
  }
}

