import React from "react";
import {Button} from "./Button";

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
          <Button value={a} wide={a === '0' ? true : false} backgroundColor = "#EEE"/>
          <Button value={b} backgroundColor = "#EEE"/>
          <Button value={c} backgroundColor = {d && "#EEE"} />
          {d && <Button value={d}/>}
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