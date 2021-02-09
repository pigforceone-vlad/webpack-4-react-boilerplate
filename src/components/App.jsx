import React from "react";
import Modal from "./Modal/Modal";
import ModalContainer from "./ModalContainer/ModalContainer";

function App() {
  return (
    <Modal showModal={true}>
      <ModalContainer />
    </Modal>
  );
}

export default App;