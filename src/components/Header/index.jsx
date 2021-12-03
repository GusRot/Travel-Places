import React from "react";
import "./style.scss";
import lifeImg from "../../assets/life.png";
import logoImg from "../../assets/logo.jpg";

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo--state">
                <a href="#Content">
                    <img src={lifeImg} alt="Logo"></img>
                </a>
                <span>/</span>
                <p>Nordeste - BR</p>
            </div>
            <div className="header__logo--logo">
                <span>Desenvolvido:</span>
                <a
                    href="https://www.linkedin.com/in/gustavo-rotta-6447b0163/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={logoImg} alt="Logo"></img>
                </a>
            </div>
        </header>
    );
};

export default Header;
