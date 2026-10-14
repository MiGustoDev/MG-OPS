import React from 'react';
import { Layers } from 'lucide-react';
import { APP_CONFIG } from '../config/modules';

export const Header = () => {
  return (
    <header className="header-bar">
      <div className="brand-row">
        <img 
          src="./Logo Mi Gusto.png" 
          alt={APP_CONFIG.brandName} 
          className="brand-logo-img" 
        />
        <div className="badge-mg-ops">
          <Layers className="badge-mg-ops-icon" size={15} />
          <span>{APP_CONFIG.appName}</span>
        </div>
      </div>
      <div className="header-tag-row">
        <div className="header-tag-bar"></div>
        <p className="header-tag-text">{APP_CONFIG.sectionTag}</p>
      </div>
    </header>
  );
};
