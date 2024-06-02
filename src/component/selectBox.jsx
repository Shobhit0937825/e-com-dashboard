import React from 'react';
import './selectBox.css';

const SelectBox = ({ options, onChange }) => {
  return (
    <div className="select-container">
      <select className="select-dropdown" onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  );
};

export default SelectBox;
