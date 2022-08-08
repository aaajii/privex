import { Modal } from "react-bootstrap";
import "./index.css";

function CustomModal({ showModal, onHide, children, className }) {
  return (
    <Modal
      show={showModal}
      onHide={onHide}
      dialogAs="div"
      dialogClassName="custom-modal w-75 bg-white m-5 mx-auto rounded p-4"
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
