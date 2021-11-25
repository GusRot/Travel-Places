import React from "react";
import './style.scss';
import vectorTop from '../../assets/vectortop.png';


const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__content">
                <h6>PROJETO ELABORADO DURANTE A RDW <span>E.B.A.C</span> 2021</h6>
                <p>Projetado e desenvolvido por <span>Gustavo Rotta</span></p>
            </div>
            <div className="footer__container-img">
                <img src={vectorTop} alt="" />
            </div>
        </div>
    )
}

export default Footer;
