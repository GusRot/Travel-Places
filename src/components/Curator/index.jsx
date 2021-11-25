import React from "react";
import './style.scss';
import geralt from '../../assets/Nova pasta/Geralt.jpg'


const Curator = () => {
    return(
        <div className="curator__container">
            <div className="curator__content">
                <img src={geralt} alt="" />
                <div className="curator__content-flex">
                    <h3>GERALT<span>of Rivia</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipiicing elit. Omnisuam est? Unde!</p>
                </div>
            </div>
        </div>
    )
}

export default Curator;