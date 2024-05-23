"use client"
import React, { ReactNode } from 'react';
import * as C from './styles';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <C.ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <C.ModalContentWrapper $isOpen={isOpen}>
        <C.ModalContent>
          <C.CloseButton onClick={onClose}>×</C.CloseButton>
          {children}
        </C.ModalContent>
      </C.ModalContentWrapper>
    </C.ModalOverlay>
  );
};

export default Modal;
