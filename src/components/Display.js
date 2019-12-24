import React from 'react';
import PropTypes from 'prop-types';

// It should have a gray background.
// It should have a height set to 100px.
// The result should be presented with a white and bold text.
// The result should have padding from the edges.
// The result should be aligned to the right.

const displayStyles = {
  backgroundColor: '#AAA',
  height: '100px',
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
