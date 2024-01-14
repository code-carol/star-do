import "./Modal.css";
import Button from "../Button";
import { FormEvent, ChangeEvent } from "../../types";

import { useState } from "react";

interface ModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTask: (params: string) => void;
}

const Modal = ({ closeModal, addTask }: ModalProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleCloseModal = () => {
    closeModal(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
    closeModal(false);
  };

  const onChangeValue = (e: ChangeEvent) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="center">
          <div className="modal-bg">
            <Button
              className="btn-close"
              handleOnClick={handleCloseModal}
              type="button"
            >
              x
            </Button>
            <div className="modal-title">new task</div>
            <div className="modal-body">
              <input
                type="text"
                maxLength={20}
                value={inputValue}
                onChange={onChangeValue}
              />
            </div>
            <div className="modal-footer"></div>
            <Button className="btn-add" type="submit">
              add
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Modal;
