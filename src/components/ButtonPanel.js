import React from 'react';
import Button from './Button';

export const ButtonPanel = (props) => {
  renderButtons() {
    const groups = [
      ['AC', '+/-', '%', '+'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=', null]
    ]
    for (let i = 0; i < groups.length; i++){
      const [a,b,c,d] = groups[i];

      return(
        <div>
          <Button value = {a} className = 'button'/>
          <Button value = {b} className = 'button'/>
          <Button value = {c} className = {d ? 'button' : 'button orange-btn'} />
          {d && <Button value = {d} className = 'button orange-btn'/>}
        </div>
      )
    }    
  }
  
    return(
      <div class = "button-panel row">
        {this.renderButtons}
      </div>
    )
}