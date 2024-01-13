import "./Modal.css";

const Modal = () => {
  return (
    <>
      <div className="modal-bg">
        <div className="modal-container">
          <button>x</button>
          <div className="modal-title"></div>
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
          <button>add</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
