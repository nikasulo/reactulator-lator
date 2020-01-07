import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const handleClick = (buttonName) => props.clickHandler(buttonName);

  const renderButtons = () => {
    const groups = [
      ['AC', '+/-', '%', '+'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '/'],
      ['0', '.', '=', null],
    ];

    const buttons = groups.map((group) => {
      const [a, b, c, d] = group;
      return (
        <div key={groups.indexOf(group)}>
          <Button value={a} wide={a === '0'} backgroundColor="#EEE" onClick={handleClick} />
          <Button value={b} backgroundColor="#EEE" onClick={handleClick} />
          <Button value={c} backgroundColor={d && '#EEE'} onClick={handleClick} />
          {d && <Button value={d} onClick={handleClick} />}
        </div>
      );
    });

    return buttons;
  };

  return (
    <div className="button-panel">
      {renderButtons()}
    </div>
  );
}


ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
