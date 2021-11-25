import React from "react";
import './style.scss';
import acessabr from '../../assets/acessabr.svg'
import ebac from '../../assets/ebac.svg'

const Header = () => {
    return(
        <header className="header__container">
            <div className="header__logo--state">
                <img src={acessabr}></img>
                <span>/</span>
                <span>Caruaru - PE</span>
            </div>
            <div className="header__logo--logo">
                <span>apoio:</span>
                <img src={ebac}></img>
            </div>
        </header>
    )
}

export default Header;