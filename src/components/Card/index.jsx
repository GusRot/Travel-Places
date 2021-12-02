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
