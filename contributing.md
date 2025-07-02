# 🤝 Contribuir al sitio web de GEOMARE 2025

¡Gracias por tu interés en colaborar con el desarrollo del sitio web del congreso GEOMARE!  
Este documento explica **cómo contribuir correctamente**, tanto si sabes programar como si solo deseas proponer contenido.

---

## 🛠️ Opciones para contribuir

### 🧑‍💻 1. Contribuyentes con conocimientos técnicos (pull requests)

Si sabes usar Git y tienes experiencia con React y/o Tailwind, puedes contribuir directamente:

1. **Haz un fork** de este repositorio.
2. **Crea una rama nueva** para tus cambios:
   ```bash
   git checkout -b nombre-de-tu-rama
3. Edita o añade contenido en el archivo src/sections.tsx, especialmente si quieres contribuir al contenido de una sección específica del congreso.
4. Haz commit y push a tu fork:
```bash 
git add .
git commit -m "Propuesta de cambios para la sección X"
git push origin nombre-de-tu-rama
```
5. Abre un Pull Request desde GitHub hacia el repositorio original. El equipo organizador revisará tu propuesta y te dará feedback o la aprobará.


#### ✏️ ¿Dónde editar?

La mayoría del contenido se encuentra en el archivo:  
```ts
/src/sections.tsx
```
```html 
{
  id: 'home',
  label: 'Inicio',
  component: (
    <div>
      <h1 className="text-2xl font-bold">Bienvenida</h1>
      <p>Texto introductorio aquí.</p>
    </div>
  ),
}
```




