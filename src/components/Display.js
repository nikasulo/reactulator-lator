import React from 'react';
import PropTypes from 'prop-types';

const displayStyles = {
  backgroundColor: '#AAA',
  height: '50px',
  width: '100%',
  color: '#FFF',
  fontWeight: 'bold',
  padding: '1em .5em',
  textAlign: 'right'
}

export const Display = (props) =>
  <div className="calc-display" style={displayStyles}>
    <p>{props.result}</p>
  </div>

Display.propTypes = {
  result: PropTypes.string
}

Display.defaultProps = {
  result: '0'
}
