import React, { useState } from "react";
import "./style.scss";
import Button from "../Button";
import Modal from "react-modal";
import DestinationsModal from "../DestinationsModal";

Modal.setAppElement("#root");

const Card = ({ DESTINATIONS }) => {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    return (
        <div className="card__container">
            <div id="OpenModal" onClick={handleModalOpen}>
                <img src={DESTINATIONS.img} alt="Imagem de viagem" />
                <div className="card__container-content">
                    <h2>{DESTINATIONS.title}</h2>
                    <p>{DESTINATIONS.text}</p>
                </div>
            </div>
            <Button></Button>

            <DestinationsModal
                isOpen={modalOpen}
                onRequestClose={handleModalClose}
            />
        </div>
    );
};

export default Card;
