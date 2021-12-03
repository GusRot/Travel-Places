import Modal from "react-modal";
import Button from "../Button";
import "./style.scss";
import closeModal from "../../assets/close.svg";

function DestinationsModal({ isOpen, onRequestClose, destinations }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="react-modal-close"
                type="button"
                onClick={onRequestClose}
            >
                <img src={closeModal} alt="" />
            </button>

            <div className="container__open-modal">
                <div className="container__open-modal-images">
                    <img
                        src={destinations.img[1]}
                        alt={"imagem " + destinations.title}
                    />
                    <img
                        src={destinations.img[0]}
                        alt={"imagem " + destinations.title}
                    />
                </div>
                <div className="container__open-modal-content">
                    <h6>{destinations.title}</h6>
                    <p>{destinations.text}</p>
                </div>
                <Button onClick={() => {}}>
                    <a href={destinations.url} target="_blank" rel="noreferrer">
                        Como Chegar
                    </a>
                </Button>
            </div>
        </Modal>
    );
}

export default DestinationsModal;
