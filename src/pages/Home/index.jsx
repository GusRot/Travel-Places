import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import debronImg from "../../assets/debron.jpg";
import Pills from "../../components/Pills";
import { DestinationsContext } from "../../ModalContext";

const Home = () => {
    const [selectedPill, setSelectedPill] = useState("Todos");

    const { pillRerenderCards } = useContext(DestinationsContext);
    const { Places } = useContext(DestinationsContext);

    useEffect(() => {
        pillRerenderCards(selectedPill);
    }, [selectedPill, pillRerenderCards]);

    return (
        <div className="home__container" id="Home">
            <div className="home__content">
                <h1>Recordar é viver</h1>
                <p>
                    Nunca fui de tirar muitas fotos, realizando este projeto que
                    percebi o quanto é interessante ter recordações visuais de
                    momentos passados. Uma pena que muitos lugares não tive
                    fotos boas para colocar aqui
                </p>
                <p>
                    Você vai encontrar abaixo alguns lugares muito bons para
                    você conhecer. Lugares que eu conheci e indico para qualquer
                    pessoa ir pelo menos uma vez na vida.
                </p>
                <p>
                    Se você está com dúvidas de qual será sua próxima viagem...
                    espero que eu possa te ajudar :D
                </p>
                <p>
                    Sou um Paulista morando em Pernambuco, então aqui o foco vai
                    ser no Nordeste, beleza?
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
                <img src={debronImg} alt="" />
                <span>
                    <a
                        href="http://www.debronbier.com.br/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Cervejaria Debron - Recife(PE)
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Home;
