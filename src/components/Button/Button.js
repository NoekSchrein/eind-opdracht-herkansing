import React from 'react';
import "./Button.css";

function Button({title, clickHandler}) {
    return (
        <div>
            <button
                className="button-1"
                type="button"
                onClick={clickHandler}
            >
                {title}
            </button>
        </div>
    );
}

export default Button;