import React from 'react';

export const Button = (props) => {
  const width = props.wide ? "50%" : "25%";
  const backgroundColor = props.backgroundColor ? props.backgroundColor : "#f39c12";

  const buttonStyle = {
    backgroundColor,
    width,
    color: "#000",
    height: "100px",
    border: ".5px solid #BBB",
  }

  return (
    <button onClick = {props.onClick} className = {props.className} style={buttonStyle}>
      {props.value}
    </button>
  )
}