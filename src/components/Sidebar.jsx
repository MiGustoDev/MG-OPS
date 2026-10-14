import React from 'react';
import { Store, Wrench, FileTerminal } from 'lucide-react';
import { APP_CONFIG } from '../config/modules';
import { playSound } from '../utils/sound';

export const Sidebar = ({ onOpenTools, onOpenLogs, activeTab, setActiveTab }) => {
  return (
    <section className="hero-column">
      <div className="hero-header">
        <h2 className="hero-title">
          <span>Centro de</span>
          <span>Operaciones</span>
        </h2>
      </div>

      <p className="hero-description">
        {APP_CONFIG.description}
      </p>

      <nav className="nav-buttons-list" aria-label="Navegación del Centro de Operaciones">
        <button 
          type="button" 
          className={`nav-btn ${activeTab === 'tiendas' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('tiendas');
            playSound(700, 0.04, 'sine', 0.03);
          }}
          onMouseEnter={() => playSound(480, 0.02, 'sine', 0.015)}
        >
          <Store size={18} />
          <span>Sucursales & Tiendas</span>
        </button>

        <button 
          type="button" 
          className="nav-btn"
          onClick={() => {
            playSound(750, 0.04, 'sine', 0.03);
            onOpenTools();
          }}
          onMouseEnter={() => playSound(480, 0.02, 'sine', 0.015)}
        >
          <Wrench size={18} />
          <span>Herramientas</span>
        </button>

        <button 
          type="button" 
          className="nav-btn btn-logs"
          onClick={() => {
            playSound(800, 0.04, 'sine', 0.03);
            onOpenLogs();
          }}
          onMouseEnter={() => playSound(480, 0.02, 'sine', 0.015)}
        >
          <FileTerminal size={18} />
          <span>Logs de Sistema</span>
        </button>
      </nav>
    </section>
  );
};
