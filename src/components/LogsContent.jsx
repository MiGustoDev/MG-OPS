import React, { useState, useEffect } from 'react';
import { Activity, CheckCircle, ShieldAlert } from 'lucide-react';

export const LogsContent = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('es-AR', { hour12: false }));
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '6px',
          padding: '0.75rem'
        }}>
          <div style={{ color: '#10b981', fontSize: '0.7rem' }}>ESTADO SERVIDORES</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '0.2rem' }}>ONLINE</div>
        </div>
        <div style={{
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '6px',
          padding: '0.75rem'
        }}>
          <div style={{ color: '#38bdf8', fontSize: '0.7rem' }}>DISPONIBILIDAD DONWEB</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '0.2rem' }}>99.98%</div>
        </div>
      </div>

      <div style={{
        background: '#06090e',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '6px',
        padding: '0.85rem',
        maxHeight: '200px',
        overflowY: 'auto',
        color: '#94a3b8',
        fontSize: '0.74rem',
        lineHeight: 1.6
      }}>
        <div><span style={{ color: '#64748b' }}>[{time}]</span> <span style={{ color: '#10b981' }}>INFO:</span> Portal MG Ops inicializado correctamente.</div>
        <div><span style={{ color: '#64748b' }}>[{time}]</span> <span style={{ color: '#38bdf8' }}>STATUS:</span> Enlace Auditoría Tiendas verificado (/operaciones/auditorias/).</div>
        <div><span style={{ color: '#64748b' }}>[{time}]</span> <span style={{ color: '#38bdf8' }}>STATUS:</span> Enlace Supervisoría Tiendas verificado (/operaciones/supervisoria/).</div>
        <div><span style={{ color: '#64748b' }}>[{time}]</span> <span style={{ color: '#f59e0b' }}>RED:</span> Conexión de sucursales sincronizada.</div>
      </div>
    </div>
  );
};
