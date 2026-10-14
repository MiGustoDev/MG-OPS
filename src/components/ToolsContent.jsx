import React from 'react';
import { Headset, BookOpen, Wifi, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../config/modules';

export const ToolsContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{
        padding: '1rem',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px'
      }}>
        <h4 style={{
          color: '#38bdf8',
          fontSize: '0.92rem',
          marginBottom: '0.35rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Headset size={18} />
          Mesa de Ayuda - Operaciones de Tienda
        </h4>
        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.45' }}>
          Soporte técnico para sistemas de facturación (POS), comandas y equipamiento de sucursales Mi Gusto.
        </p>
      </div>

      <div style={{
        padding: '1rem',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px'
      }}>
        <h4 style={{
          color: '#10b981',
          fontSize: '0.92rem',
          marginBottom: '0.35rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <ExternalLink size={18} />
          Enlaces Directos de Producción
        </h4>
        <ul style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          color: '#cbd5e1'
        }}>
          {APP_CONFIG.modules.map(mod => (
            <li key={mod.id}>
              • <a 
                  href={mod.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#38bdf8', textDecoration: 'none' }}
                >
                  {mod.url}
                </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        padding: '1rem',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px'
      }}>
        <h4 style={{
          color: '#f59e0b',
          fontSize: '0.92rem',
          marginBottom: '0.35rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <BookOpen size={18} />
          Atajos de Teclado
        </h4>
        <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
          Presiona <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>1</code> para Auditoría o <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>2</code> para Supervisoría.
        </p>
      </div>
    </div>
  );
};
