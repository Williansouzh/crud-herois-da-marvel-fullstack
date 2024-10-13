import React from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
} from "../styles/HeroModal.styles";
import HeroForm from "./HeroForm";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (hero: {
    name: string;
    abilities: string[];
    origin: string;
  }) => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <HeroForm onSubmit={onSubmit} />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
