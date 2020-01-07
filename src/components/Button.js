import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { className, value, wide } = props;
  let { backgroundColor } = props;
  const width = wide ? '50%' : '25%';
  backgroundColor = backgroundColor || '#f39c12';

  const handleClick = (buttonName) => props.onClick(buttonName);

  const buttonStyle = {
    backgroundColor,
    width,
    color: '#000',
    height: '100px',
    border: '.5px solid #BBB',
  };

  return (
    <button type="button" onClick={() => handleClick(value === 'X' ? '*' : value)} className={className} style={buttonStyle}>
      {value}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  value: '',
  className: '',
  wide: false,
  backgroundColor: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};
