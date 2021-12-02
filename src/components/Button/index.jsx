import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
