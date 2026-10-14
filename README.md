# MG Ops | Centro de Operaciones - Mi Gusto

Plataforma unificada en **React + Vite** para el área de **Operaciones de Mi Gusto**, destinada a la gestión, supervisión y auditoría de tiendas y locales comerciales de venta de empanadas.

---

## 🏬 Módulos de Tiendas

- **Auditoría de Sucursales**:
  - Enlace: `https://www.migusto.com.ar/operaciones/auditorias/`
  - Enfoque: Auditorías comerciales en locales, estándares bromatológicos, exhibición de producto en vitrinas, atención y control de calidad.
- **Supervisoría de Sucursales**:
  - Enlace: `https://www.migusto.com.ar/operaciones/supervisoria/`
  - Enfoque: Supervisión operativa en tiendas, control de turnos, apertura y cierre, novedades operativas y servicio.

---

## 🛠️ Comandos de Desarrollo

Para ejecutar el proyecto localmente:

```bash
# Iniciar servidor de desarrollo
pnpm run dev
```

El servidor estará disponible en `http://localhost:5173/`.

Para generar el bundle de producción (para subir a DonWeb):

```bash
# Compilar proyecto
pnpm run build
```

El resultado listo para desplegar se generará en la carpeta `dist/`.

---

## ⚙️ Personalización de Módulos

Para editar URLs, títulos, colores o añadir más sucursales/módulos en el futuro, edita directamente:
`src/config/modules.js`
