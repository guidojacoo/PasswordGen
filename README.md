# Generador de Contraseñas Seguras

Aplicación web para generar y analizar la fortaleza de contraseñas. Construida con Astro y Tailwind CSS.

## Características

- **Generador de contraseñas**: Crea contraseñas aleatorias con opciones personalizables
- **Analizador de fortaleza**: Evalúa cualquier contraseña y muestra su nivel de seguridad
- **Opciones configurables**:
  - Longitud de 4 a 50 caracteres
  - Incluir/excluir mayúsculas, minúsculas, números y símbolos
  - Excluir caracteres ambiguos (I, l, 1, O, 0)
- **Copia rápida**: Un clic para copiar la contraseña al portapapeles
- **Diseño responsive**: Funciona en desktop y móviles

## Tecnologías

- **Astro** - Framework web
- **Tailwind CSS** - Estilos
- **JavaScript vanilla** - Lógica sin frameworks pesados

## Estructura

```
PasswordGen/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Cómo usar

### Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:4321

### Producción

```bash
npm run build
```

El contenido se genera en `dist/`

## Criterios de fortaleza

La aplicación evalúa:

**Suma puntos:**
- Longitud (8+, 12+, 16+ caracteres)
- Uso de mayúsculas
- Uso de minúsculas
- Uso de números
- Uso de símbolos

**Resta puntos:**
- Solo letras o solo números
- Caracteres repetidos
- Patrones comunes (123, abc, qwerty, password)

## Deploy

### Vercel
```bash
npm i -g vercel
vercel deploy
```

### Netlify
Conectar el repositorio en app.netlify.com con:
- Build command: `npm run build`
- Publish directory: `dist/`

---

Hecho para la Actividad Diagnóstico Frontend
