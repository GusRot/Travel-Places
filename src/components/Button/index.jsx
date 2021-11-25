import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

const Button = () => {
    return (
        <button className="button">
            Como Chegar
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;