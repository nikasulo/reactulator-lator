import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import '../stylesheets/main.scss';
import Footer from './Footer';
import Header from './Header';

const calcStyles = {
  width: '500px',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      displayText: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const {
      total,
      next,
      operation,
      displayText,
    } = this.state;

    const currentData = {
      total,
      next,
      operation,
      displayText,
    };


    const result = calculate(currentData, buttonName);
    if (result === 'UNDEFINED') {
      this.setState({
        total: null,
        next: null,
        operation: null,
        displayText: NaN,
      });
      return;
    }
    this.setState(
      {
        total: result.total,
        next: result.next,
        operation: result.operation,
        displayText: result.displayText,
      },
    );
  }

  render() {
    const { displayText } = this.state;

    return (
      <>
        <Header />
        <div className="column main">
          <div id="calculator-holder column" style={calcStyles}>
            <Display result={displayText} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
