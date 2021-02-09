import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  background: rgba(33, 33, 33, 0.6);
`;

export const ModalWindow = styled.div`
  width: ${({ adaptiveSize }) => (adaptiveSize ? "none" : "555px")};
  height: ${({ adaptiveSize }) => (adaptiveSize ? "none" : "515px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
`;