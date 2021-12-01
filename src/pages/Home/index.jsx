import React, { useState } from "react";
import "./style.scss";
import pexels from "../../assets/pexels.png";
import Pills from "../../components/Pills";

const PLACES = [
    "Praca",
    "Parque",
    "Camping",
    "Restaurante",
    "Pontos Turisticos",
    "Loja",
    "Essenciais",
];

const Home = () => {
    const [selectedPill, setSelectedPill] = useState("");
    return (
        <div className="home__container">
            <div className="home__content">
                <h1>Caruaru para todos</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, perspiciatis accusantium! Saepe ad, optio sequi
                    incidunt ipsam itaque rem minima, sit at quaerat, mollitia
                    recusandae quo et adipisci enim eaque?
                </p>
                <p>
                    Lorem ipsum dolorem minima, sit at quaerat, mollitia
                    recusandae quo et adipisci enim eaque?
                </p>
                <div className="home__pills">
                    {PLACES.map((item) => (
                        <Pills
                            local={item}
                            selected={selectedPill === item}
                            onClick={() => setSelectedPill(item)}
                        />
                    ))}
                </div>
            </div>
            <div className="home__img">
                <img src={pexels} alt="" />
            </div>
        </div>
    );
};

export default Home;
