import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Modal = ({ isOpen, onClose, title, icon: Icon, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playSound(400, 0.03, 'sine', 0.02);
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-window">
        <div className="modal-header">
          <h3 className="modal-title">
            {Icon && <Icon size={20} className="modal-title-icon" />}
            {title}
          </h3>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={() => {
              playSound(400, 0.03, 'sine', 0.02);
              onClose();
            }}
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
