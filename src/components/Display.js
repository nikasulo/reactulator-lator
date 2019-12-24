import React from 'react';
import PropTypes from 'prop-types';

export const Display = (props) => { 
  return(
    <div className = 'calc-display'>
      <p>{props.result}</p>
    </div>
  )
}

Display.propTypes = {
  result: PropTypes.string
}

Display.defaultProps = {
  result: '0'
}
