import React from 'react';
import {Button} from './Button';

export const ButtonPanel = (props) => {
  
  const renderButtons = () => {
    let buttons;
    const groups = [
      ['AC', '+/-', '%', '+'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=', null]
    ]

    buttons = groups.map((group) => {
      let [a,b,c,d] = group;
      return (<div>
          <Button value = {a} className = 'button'/>
          <Button value = {b} className = 'button'/>
          <Button value = {c} className = {d ? 'button' : 'button orange-btn'} />
          {d && <Button value = {d} className = 'button orange-btn'/>}
        </div>)
    })
    
    return buttons;
  }
  
    return(
      <div className = "button-panel row">
        {renderButtons()}
      </div>
    )
}