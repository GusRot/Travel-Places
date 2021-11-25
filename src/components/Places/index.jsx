import React from "react";
import Slider from '../Slider';
import './style.scss';

const Places = () => {
    return(
        <div className="places__container">
            <div className="places__content">
                <h2>Parques <span>Acessiveis</span></h2>
                <div className="places__content-select">
                    <h5>Ordenar por:</h5>
                    <select>
                        <option>Distancia</option>
                        <option>Alfabeto</option>
                    </select>
                </div>
            </div>

            <Slider/>
        </div>
    )
}

export default Places;