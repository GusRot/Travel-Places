import React from "react";
import "./style.scss";
import vectorTop from "../../assets/vectortop.png";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__content">
                <h6>
                    PROJETO ELABORADO DURANTE A RDW <span>E.B.A.C</span> 2021
                </h6>
                <p>
                    Design inspirado na imersão com alterações de acordo com a
                    nova ideia de projeto
                </p>
            </div>
            <div className="footer__container-img">
                <img src={vectorTop} alt="" />
            </div>
        </div>
    );
};

export default Footer;
