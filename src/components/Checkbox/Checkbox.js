import React from 'react';

const Checkbox = ({value, name, checked, label}) => {
    return (
        <div className="checkbox-wrapper">
            <label htmlFor="filter">
                <input
                    type="radio"
                    value={value}
                    name="filter"
                    checked={checked}
                    id="filter"
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
