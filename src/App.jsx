import React, { useState, useEffect } from 'react';
import { Wrench, FileTerminal } from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModuleCard } from './components/ModuleCard';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ToolsContent } from './components/ToolsContent';
import { LogsContent } from './components/LogsContent';
import { APP_CONFIG } from './config/modules';

export function App() {
  const [activeTab, setActiveTab] = useState('tiendas');
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  // Atajos de teclado para acceso rápido a las tiendas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isToolsOpen || isLogsOpen) return;
      if (e.key === '1') {
        const auditoriaCard = document.getElementById('card-auditoria');
        if (auditoriaCard) auditoriaCard.click();
      } else if (e.key === '2') {
        const supervisoriaCard = document.getElementById('card-supervisoria');
        if (supervisoriaCard) supervisoriaCard.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isToolsOpen, isLogsOpen]);

  return (
    <>
      {/* Fondo Tecnológico */}
      <div className="tech-background">
        <div className="tech-grid" />
        <div className="tech-crosshairs" />
      </div>

      <div className="app-container">
        {/* Header con Mi Gusto y MG OPS */}
        <Header />

        {/* Contenido Principal */}
        <main className="main-content">
          <Sidebar 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenTools={() => setIsToolsOpen(true)}
            onOpenLogs={() => setIsLogsOpen(true)}
          />

          <section className="cards-area">
            <div className="cards-grid">
              {APP_CONFIG.modules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </section>
        </main>

        {/* Footer con estado de sistemas activos */}
        <Footer />
      </div>

      {/* Modal de Herramientas */}
      <Modal 
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
        title="Herramientas de Operaciones de Tienda"
        icon={Wrench}
      >
        <ToolsContent />
      </Modal>

      {/* Modal de Logs */}
      <Modal 
        isOpen={isLogsOpen}
        onClose={() => setIsLogsOpen(false)}
        title="Telemetría y Estado de Conexión"
        icon={FileTerminal}
      >
        <LogsContent />
      </Modal>
    </>
  );
}

export default App;
