import React, { useContext } from "react";
import "./style.scss";
import Button from "../Button";
import Modal from "react-modal";
import DestinationsModal from "../DestinationsModal";
import { DestinationsContext } from "../../ModalContext";

Modal.setAppElement("#root");

const Card = ({ DESTINATIONS }) => {
    const { handleModalOpen } = useContext(DestinationsContext);
    const { modalOpen } = useContext(DestinationsContext);
    const { handleModalClose } = useContext(DestinationsContext);

    return (
        <div className="card__container">
            <div id="OpenModal" onClick={handleModalOpen}>
                <img src={DESTINATIONS.img[0]} alt="Imagem de viagem" />
                <div className="card__container-content">
                    <div className="card__container-title">
                        <h2>{DESTINATIONS.title}</h2>
                    </div>
                    <div className="card__container-text">
                        <p>{DESTINATIONS.text}</p>
                    </div>
                </div>
            </div>
            <Button onClick={() => {}}>
                <a href={DESTINATIONS.url} target="_blank" rel="noreferrer">
                    Como Chegar
                </a>
            </Button>

            <DestinationsModal
                isOpen={modalOpen}
                onRequestClose={handleModalClose}
                Destinations={DESTINATIONS}
            />
        </div>
    );
};

export default Card;
