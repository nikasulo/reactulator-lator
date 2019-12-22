import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const mainContainer = document.querySelector('#main');

class App extends React.Component {
  render(){
    return(
      <div id = "calculator-holder">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

ReactDOM.render(<App/>, mainContainer);