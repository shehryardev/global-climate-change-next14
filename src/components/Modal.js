import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-[#1a1a1a] w-96  p-4 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          <FontAwesomeIcon
            icon={faX}
            className="text-white text-xs sm:text-lg hover:text-gray-400"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
