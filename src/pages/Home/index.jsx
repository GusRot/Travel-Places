import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import pexels from "../../assets/pexels.png";
import Pills from "../../components/Pills";
import { DestinationsContext } from "../../ModalContext";

const Home = () => {
    const [selectedPill, setSelectedPill] = useState("Todos");

    const { Destinations } = useContext(DestinationsContext);
    const { Places } = useContext(DestinationsContext);

    useEffect(() => {
        for (let i = 0; i < Destinations.length; i++) {
            if (
                Destinations[i].category !== selectedPill &&
                selectedPill !== "Todos"
            ) {
                Destinations[i].filter = "none";
            } else {
                Destinations[i].filter = "show";
            }
        }
        console.log(Destinations);
    }, [selectedPill, Destinations]);

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
                    {Places.map((item) => (
                        <Pills
                            key={item}
                            local={item}
                            onClick={() => setSelectedPill(item)}
                            selected={selectedPill === item}
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
