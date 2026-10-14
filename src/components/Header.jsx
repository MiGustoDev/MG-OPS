import React from 'react';
import { Layers } from 'lucide-react';
import { APP_CONFIG } from '../config/modules';

export const Header = () => {
  return (
    <header className="header-bar">
      <div className="brand-row">
        <h1 className="brand-logo-text">{APP_CONFIG.brandName}</h1>
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
