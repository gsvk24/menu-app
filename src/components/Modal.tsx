// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-2 right-2"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
