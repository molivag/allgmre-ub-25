# 🌍 GEOMARE 2025 – Congreso de Ciencias de la Tierra y del Mar

Este repositorio contiene el sitio web oficial del Congreso GEOMARE 2025, organizado por estudiantes de doctorado de la Universitat de Barcelona.  
El objetivo de esta web es ofrecer toda la información práctica y actualizada del evento.

---

## 🧩 ¿Cómo colaborar con la web?

Existen **dos formas principales de contribuir** al desarrollo y mantenimiento del contenido del sitio:

### 1. Si tienes conocimientos técnicos (pull requests)
Puedes hacer una contribución directa al repositorio:

1. Haz un fork del repositorio.
2. Realiza tus cambios (principalmente en los textos de las secciones del sitio).
3. Crea un pull request (PR) hacia la rama principal.

💡 Esto es ideal para quienes saben usar Git y GitHub y quieren colaborar activamente con el desarrollo.

---

### 2. Si no tienes experiencia técnica
Puedes contribuir enviando tu propuesta de contenido al comité organizador:

- Ya sea texto para secciones, nuevas ideas o correcciones.
- El comité revisará y validará tu aportación.
- Una vez aprobada, se enviará a **OGM DevLab**, quien se encargará de montar esos cambios en la web.

⚠️ **OGM DevLab no es responsable de redactar el contenido**, solo de implementarlo en la web una vez aprobado.

---

## 📁 Estructura básica del repositorio

```
├── src/
│ ├── App.tsx ← App principal con navegación entre secciones
│ ├── sections.tsx ← Aquí se define el contenido de cada sección del sitio
│ └── assets/ ← Imágenes, logos, etc.
├── index.html
├── tailwind.config.js ← Paleta de colores adaptada a Ciencias de la Tierra y del Mar
├── package.json
└── README.md

```
---

## 🎨 Estilo y diseño

La web está construida con **React** + **Tailwind CSS**, e incorpora una paleta de colores inspirada en tonos de tierra, mar y vegetación (azules, verdes y marrones suaves).  
Se adapta automáticamente al modo claro/oscuro según las preferencias del usuario.

---

## 🔧 Requisitos para desarrollo local

- Node.js ≥ 18
- pnpm o npm

### Comandos básicos

```bash
npm install
npm run dev
```



### 🤝 ¿Cómo contribuir?
Toda la información detallada sobre cómo colaborar (ya sea con Git o sin conocimientos técnicos) está en el archivo CONTRIBUTING.md.

Puedes proponer nuevos textos, ideas de diseño o incluso sugerencias para la organización del contenido.

