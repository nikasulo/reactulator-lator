import React from "react";
import {Button} from "./Button";

const buttonStyle = {
  backgroundColor: "#95a5a6",
  color: "#000"
}

const zeroButtonStyle = {
  ...buttonStyle
}


const orangeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#f39c12"
}

export const ButtonPanel = (props) => {
  
  const renderButtons = () => {
    let buttons;
    const groups = [
      ["AC", "+/-", "%", "+"],
      ["7", "8", "9", "X"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "=", null]
    ]

    buttons = groups.map((group) => {
      let [a,b,c,d] = group;
      return (
        <div >
          <Button value={a} style={a === 0 ? zeroButtonStyle : buttonStyle}/>
          <Button value={b} style={buttonStyle}/>
          <Button value={c} style={d ? buttonStyle : orangeButtonStyle} />
          {d && <Button value={d} style={orangeButtonStyle}/>}
        </div>
      )
    })
    
    return buttons;
  }
  
    return(
      <div className = "button-panel row">
        {renderButtons()}
      </div>
    )
}