# Habit Dashboard - Actividad Diagnóstico Frontend

Dashboard de hábitos desarrollado con Astro para el seguimiento de rutinas diarias.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web estática que permite:
- Visualizar hábitos diarios con su estado actual
- Marcar hábitos como completados
- Agregar nuevos hábitos personalizados
- Eliminar hábitos existentes
- Ver estadísticas de progreso
- Alternar entre modo claro y oscuro
- Navegación suave entre secciones

## 🛠️ Herramientas Usadas

### Tecnologías Principales
- **Astro** - Framework web estático moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **JavaScript Vanilla** - Interactividad y manipulación del DOM

### Características Implementadas
- ✅ Página principal única
- ✅ 3 secciones (Inicio, Hábitos, Estadísticas)
- ✅ Diseño responsive (mobile-first)
- ✅ Comportamiento con JavaScript (eventos, DOM, localStorage)
- ✅ Componentes reutilizables (HabitCard, HabitForm, StatsCard, Header)
- ✅ Animaciones CSS y transiciones
- ✅ Librería CSS (Tailwind)
- ✅ Dark mode con persistencia en localStorage

## 📁 Estructura del Proyecto

```
tpfront/
├── src/
│   ├── components/
│   │   ├── HabitCard.astro      # Tarjeta de hábito individual
│   │   ├── HabitForm.astro      # Formulario para agregar hábitos
│   │   ├── StatsCard.astro      # Tarjeta de estadísticas
│   │   └── Header.astro         # Barra de navegación
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base con Tailwind
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Estilos globales
├── astro.config.mjs             # Configuración de Astro
├── tailwind.config.mjs          # Configuración de Tailwind
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias del proyecto
```

## 🚀 Instrucciones para Ejecutar

### Requisitos Previos
- Node.js v20 o superior
- npm o pnpm

### Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd tpfront
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:4321
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa del build |

## 📱 Secciones de la Página

1. **Inicio** - Dashboard con estadísticas principales
2. **Hábitos** - Grid de tarjetas con hábitos y su estado
3. **Agregar Hábito** - Formulario para crear nuevos hábitos
4. **Estadísticas** - Gráficos de rendimiento y actividad semanal

## 🎨 Características de Diseño

- **Responsive**: Se adapta a móviles, tablets y escritorio
- **Dark Mode**: Toggle con persistencia de preferencia
- **Animaciones**: Transiciones suaves en hover y acciones
- **Accesibilidad**: HTML semántico y etiquetas apropiadas

## 📦 Dependencias Principales

```json
{
  "astro": "^5.x",
  "@astrojs/tailwind": "^5.x",
  "tailwindcss": "^3.x"
}
```

## 👨‍💻 Autor

Actividad Diagnóstico Frontend - 2026

## 📄 Licencia

Proyecto educativo sin fines comerciales.
