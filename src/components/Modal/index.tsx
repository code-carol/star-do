import "./Modal.css";
import Button from "../Button";

interface ModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ closeModal }: ModalProps) => {
  const handleCloseModal = () => {
    closeModal(false);
  };
  return (
    <>
      <div className="center">
        <div className="modal-bg">
          <Button className="btn-close" handleOnClick={handleCloseModal}>
            x
          </Button>
          <div className="modal-title">new task</div>
          <div className="modal-body">
            <input type="text" maxLength={20} />
          </div>
          <div className="modal-footer"></div>
          <Button className="btn-add">add</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
