import React from "react";
import { Overlay, ModalWindow } from "./styles";

const Modal = ({ children, adaptiveSize, showModal }) => {
  return showModal ? (
    <Overlay>
      <ModalWindow adaptiveSize={adaptiveSize}>{children}</ModalWindow>
    </Overlay>
  ) : null;
};
export default Modal;