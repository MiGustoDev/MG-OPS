/**
 * Configuración de Módulos - MG Ops (Mi Gusto Operaciones)
 * Plataforma centralizada para la supervisión y auditoría de tiendas/sucursales de empanadas.
 */

export const APP_CONFIG = {
  brandName: "Mi Gusto",
  appName: "MG OPS",
  sectionTag: "Gestión Operativa de Tiendas & Sucursales",
  title: "Centro de Operaciones",
  description: "Seleccione el área de trabajo para iniciar la carga de informes de sucursal, control de turnos, novedades de locales, planillas y auditorías comerciales.",
  copyright: "ÁREA DE OPERACIONES | SISTEMAS MI GUSTO © 2024 - 2026",
  
  // Módulos principales para tiendas de empanadas
  modules: [
    {
      id: "auditoria",
      title: "Auditoría",
      badgeText: "CALIDAD & ESTÁNDARES",
      subtitle: "AUDITORÍA EN LOCALES, CONTROL BROMATOLÓGICO Y ESTÁNDARES DE TIENDA",
      url: "https://www.migusto.com.ar/operaciones/auditorias/",
      target: "_self", // Abre en la misma pestaña o "_blank" si se prefiere
      accentColor: "#10b981", // Esmeralda / Cian
      accentBg: "rgba(16, 185, 129, 0.15)",
      accentBorder: "rgba(16, 185, 129, 0.4)",
      image: "/images/auditoria.jpg",
      status: "ONLINE",
      type: "shield"
    },
    {
      id: "supervisoria",
      title: "Supervisoría",
      badgeText: "OPERACIÓN EN TIENDA",
      subtitle: "SUPERVISIÓN DE SUCURSALES, APERTURA/CIERRE Y CONTROL DE SERVICIO",
      url: "https://www.migusto.com.ar/operaciones/supervisoria/",
      target: "_self",
      accentColor: "#f59e0b", // Ámbar cálido / Dorado
      accentBg: "rgba(245, 158, 11, 0.15)",
      accentBorder: "rgba(245, 158, 11, 0.4)",
      image: "/images/supervisoria.jpg",
      status: "ONLINE",
      type: "store"
    }
  ],

  // Herramientas de soporte operativo para supervisores y auditores
  quickTools: [
    {
      id: "soporte",
      title: "Mesa de Ayuda Sistemas",
      description: "Soporte técnico para POS, lectores de pedidos y terminales de sucursal.",
      icon: "headset"
    },
    {
      id: "estandares",
      title: "Manual de Estándares de Tienda",
      description: "Guía de presentación de producto, temperatura de hornos y exhibición.",
      icon: "book"
    },
    {
      id: "red",
      title: "Verificador de Conectividad DonWeb",
      description: "Diagnóstico de red entre locales y servidores centrales.",
      icon: "activity"
    }
  ]
};
