import React from "react";
import { useEffect } from "react";

function Modal(props) {
  // Takes title,price,image as props

  useEffect(() => {
    document.body.addEventListener("keydown", escapeKeyDownHandler);
    return function cleanup() {
      document.body.removeEventListener("keydown", escapeKeyDownHandler);
    };
  });
  function escapeKeyDownHandler(e) {
    if (e.charCode === 27 || e.keyCode === 27) props.onClose();
  }
  if (!props.show) {
    return null;
  }
  //
  return (
    <div className="modal">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="btn modal__close-btn crossbtn"
          onClick={props.onClose}
        >
          X
        </button>
        <div className="modal__header">
          <h1 className=" headings text-center">{props.pName}</h1>
        </div>
        <div className="modal__body">
          <div>
            <img src={props.pImg} alt="" width={400} />
          </div>
          <div>
            <h1>
              {" "}
              This can be yours at only{" "}
              <span className="font-bold"> {props.pPrice} </span> /mo
            </h1>
          </div>
        </div>
        <div className="modal__footer">
          <button className="btn modal__close-btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
