import React from "react";
import "./style.scss";

const Button = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
