# Habit Dashboard - Actividad Diagnóstico Frontend

Dashboard de seguimiento de hábitos construido con Astro y Tailwind CSS. Permite a los usuarios gestionar sus hábitos diarios, visualizar estadísticas y mantener un registro de su progreso.

## 🚀 Características

- **Gestión de hábitos**: Agregar, completar y eliminar hábitos
- **Seguimiento de rachas**: Visualiza tu racha actual de cada hábito
- **Dark mode**: Interfaz clara y oscura con persistencia de preferencia
- **Estadísticas**: Panel con métricas de progreso y rendimiento semanal
- **Responsive**: Diseño adaptable a dispositivos móviles
- **Animaciones**: Transiciones suaves y efectos visuales
- **API externa**: Integración con Open-Meteo para datos del clima

## 🛠️ Herramientas y Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Astro | ^5.18.1 | Framework web |
| Tailwind CSS | - | Estilos y diseño responsive |
| JavaScript | ES6+ | Interactividad y lógica |
| Open-Meteo API | - | Datos del clima |

## 📁 Estructura del Proyecto

```
tpfront/
├── src/
│   ├── components/
│   │   ├── HabitCard.astro      # Card de hábito individual
│   │   ├── HabitForm.astro      # Formulario nuevo hábito
│   │   ├── StatsCard.astro      # Card de estadísticas
│   │   └── Header.astro         # Header con navegación
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base HTML
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── scripts/
│   │   └── main.js              # Lógica JavaScript
│   └── styles/
│       └── global.css           # Estilos personalizados
├── package.json
└── README.md
```

## 🚀 Instrucciones para Ejecutar

### Prerrequisitos

- Node.js 18+ instalado
- npm o pnpm

### Pasos

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

### Build para producción

```bash
npm run build
```

## 📊 Requisitos Cumplidos

### Requisitos Mínimos
- ✅ Página principal (`index.astro`)
- ✅ 3 secciones (Inicio, Hábitos, Estadísticas)
- ✅ Responsive básico (Tailwind CSS)
- ✅ JavaScript con eventos y manipulación del DOM

### Créditos Extra
- ✅ Componentes reutilizables (4 componentes Astro)
- ✅ Animaciones CSS personalizadas
- ✅ Tailwind CSS como librería
- ✅ Fetch a API externa (Open-Meteo)
- ✅ Dark mode con persistencia

## 🌐 Deploy

Este proyecto está listo para deploy en:

### Vercel
```bash
npm i -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Conectar repositorio en app.netlify.com
```

**Configuración recomendada:**
- **Build command**: `npm run build`
- **Publish directory**: `dist/`

## 👨‍💻 Autor

Desarrollado como parte de la Actividad Diagnóstico Frontend.

## 📄 Licencia

MIT
