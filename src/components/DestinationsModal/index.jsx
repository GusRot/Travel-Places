import Modal from "react-modal";

function DestinationsModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        ></Modal>
    );
}

export default DestinationsModal;
