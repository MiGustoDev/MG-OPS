import React from 'react';
import { APP_CONFIG } from '../config/modules';

export const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="system-status">
        <span className="status-indicator-dot"></span>
        <span>Sistemas Activos</span>
      </div>
      <div className="footer-credits">
        {APP_CONFIG.copyright}
      </div>
    </footer>
  );
};
