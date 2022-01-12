import React from "react";
import "./style.scss";

const Pills = ({ keys, local, onClick, selected }) => {
    return (
        <div
            key={keys}
            onClick={onClick}
            className={`pills__container ${
                selected ? "pills__container-active" : ""
            }`}
        >
            {local}
        </div>
    );
};

export default Pills;
