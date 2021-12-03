import Modal from "react-modal";
import "./style.scss";

function DestinationsModal({ isOpen, onRequestClose, Destinations }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="container__open-modal">
                <img src={Destinations.img[0]} alt="" />
            </div>
        </Modal>
    );
}

export default DestinationsModal;
