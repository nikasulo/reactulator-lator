import React from 'react';

export const Button = (props) => {
  const {className, value} = props;
  const width = props.wide ? "50%" : "25%";
  const backgroundColor = props.backgroundColor ? props.backgroundColor : "#f39c12";

  const handleClick = (buttonName) => props.onClick(buttonName);

  const buttonStyle = {
    backgroundColor,
    width,
    color: "#000",
    height: "100px",
    border: ".5px solid #BBB",
  }

  return (
    <button onClick={() => handleClick(value === 'X' ? '*' : value)} className = {className} style={buttonStyle}>
      {value}
    </button>
  )
}