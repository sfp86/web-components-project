# 🧩 Web Components Projects

Colección de proyectos educativos desarrollados con **Web Components nativos** (Vanilla JavaScript), sin frameworks ni librerías externas. Utiliza Custom Elements, Shadow DOM, ES6 Modules y las APIs estándar del navegador.

---

## 📦 Proyectos

### 1. [⏱️ Cronómetro Digital](./chrono)

Cronómetro con display de 7 segmentos estilo LED, implementado completamente con Web Components nativos.

**Características**:

- ✅ Display de 7 segmentos con renderizado dinámico
- ✅ Precisión de centésimas de segundo
- ✅ Botones de Iniciar/Pausar y Reiniciar
- ✅ Arquitectura modular con 5 componentes reutilizables
- ✅ Comunicación mediante Custom Events
- ✅ Encapsulación completa con Shadow DOM

**Tecnologías**: Custom Elements, Shadow DOM, Custom Events, ES6 Modules

**[📖 Documentación completa](./chrono/ARQUITECTURA.md)** | **[📄 README del proyecto](./chrono/README.md)**

**Vista previa**:

```
┌──────────────────────────────────┐
│      00 : 00 : 00 : 00          │
│   [Iniciar]  [Reiniciar]        │
└──────────────────────────────────┘
```

---

## 🚀 Cómo ejecutar los proyectos

Todos los proyectos utilizan el mismo método de ejecución:

### Requisitos previos:

- Node.js instalado (para `http-server`)
- Navegador moderno con soporte para Web Components

### Pasos:

```bash
# 1. Instalar http-server globalmente (solo la primera vez)
npm install -g http-server

# 2. Navegar al proyecto deseado
cd chrono

# 3. Iniciar el servidor local
http-server ./

# 4. Abrir en el navegador
# http://localhost:8080
```

### Alternativa sin instalación:

```bash
# Si tienes Python instalado
python -m http.server 8080

# O con Node.js 18+
npx http-server ./
```

---

## 🛠️ Tecnologías utilizadas

| Tecnología          | Versión          | Propósito                                        |
| ------------------- | ---------------- | ------------------------------------------------ |
| **Custom Elements** | v1               | Crear elementos HTML personalizados              |
| **Shadow DOM**      | DOM Standard     | Encapsulación de estilos y estructura            |
| **ES6 Modules**     | ECMAScript 2015+ | Sistema de módulos nativo                        |
| **Custom Events**   | DOM Events API   | Comunicación entre componentes                   |
| **JavaScript**      | ES6+             | Lógica de negocio (clases, Map, arrow functions) |
| **CSS3**            | Standard         | Estilos encapsulados (Flexbox, Grid, Transforms) |
| **HTML5**           | Standard         | Estructura base y templates                      |

### ⚡ Sin dependencias

- ✅ **Sin frameworks** (React, Angular, Vue)
- ✅ **Sin librerías** (jQuery, Lodash)
- ✅ **Sin transpiladores** (Babel, TypeScript)
- ✅ **Sin bundlers** (Webpack, Vite) - Opcional para desarrollo
- ✅ Solo **APIs nativas del navegador**

---

## 📚 Conceptos aplicados

### Web Components

- **Custom Elements**: Definición de elementos HTML personalizados
- **Shadow DOM**: Encapsulación de estilos y estructura interna
- **HTML Templates**: Plantillas reutilizables (opcional)
- **ES Modules**: Carga de componentes como módulos

### Patrones de diseño

- **Component-Based Architecture**: Cada funcionalidad en un componente
- **Observer Pattern**: Comunicación mediante eventos
- **Separation of Concerns**: Separación de lógica, estilos y templates
- **Composition over Inheritance**: Composición de componentes

### Características técnicas

- `observedAttributes`: Reactividad a cambios de atributos
- `attributeChangedCallback`: Ciclo de vida de Custom Elements
- `connectedCallback` / `disconnectedCallback`: Gestión del ciclo de vida
- Custom Events con `bubbles` y `composed` para atravesar Shadow DOM
- Slots para proyección de contenido
- CSS encapsulado con `:host` y `::slotted`

---

## 📂 Estructura del repositorio

```
web-components-projects/
│
├── README.md                    # Este archivo
├── .gitignore                   # Archivos ignorados por git
│
└── chrono/                      # Proyecto 1: Cronómetro
    ├── README.md                # Documentación del proyecto
    ├── ARQUITECTURA.md          # Análisis arquitectónico completo
    ├── index.html               # Punto de entrada
    ├── main.js                  # Registro de componentes
    │
    ├── boton/                   # Componente botón
    │   ├── boton.js
    │   └── styles.js
    │
    ├── contenedor_digitos/      # Contenedor de dígitos
    │   ├── contenedorDigitos.js
    │   └── styles.js
    │
    ├── crono/                   # Orquestador del cronómetro
    │   ├── crono.js
    │   └── styles.js
    │
    ├── digito/                  # Display de 7 segmentos
    │   ├── digito.js
    │   ├── estilos.js
    │   └── template.js
    │
    └── puntos/                  # Separador visual
        └── puntos.js
```

---

## 🎯 Objetivos educativos

Este repositorio tiene como objetivo:

1. **Demostrar** el uso de Web Components nativos sin frameworks
2. **Enseñar** patrones de diseño aplicados a componentes web
3. **Explorar** las APIs estándar del navegador
4. **Practicar** arquitecturas modulares y escalables
5. **Mostrar** código limpio y bien documentado

---

## 🌐 Compatibilidad de navegadores

Los Web Components nativos son compatibles con:

| Navegador | Versión mínima |
| --------- | -------------- |
| Chrome    | 67+            |
| Firefox   | 63+            |
| Safari    | 10.1+          |
| Edge      | 79+ (Chromium) |

Para navegadores antiguos, se puede usar [polyfills](https://github.com/webcomponents/polyfills).

---

## 📖 Recursos de aprendizaje

### Documentación oficial

- [MDN - Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [Custom Elements v1](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Shadow DOM v1](https://dom.spec.whatwg.org/#shadow-trees)

### Tutoriales recomendados

- [Web.dev - Custom Elements](https://web.dev/custom-elements-v1/)
- [Web.dev - Shadow DOM](https://web.dev/shadowdom-v1/)
- [CSS-Tricks - Web Components](https://css-tricks.com/an-introduction-to-web-components/)

### Librerías modernas (opcional)

- [Lit](https://lit.dev/) - Simplifica la creación de Web Components
- [Stencil](https://stenciljs.com/) - Compilador de Web Components

---

## 🤝 Contribuciones

Este es un proyecto educativo. Si deseas contribuir:

1. Fork el repositorio
2. Crea una rama para tu proyecto: `git checkout -b proyecto/nuevo-componente`
3. Añade tu proyecto en una nueva carpeta
4. Actualiza este README con la descripción
5. Crea un Pull Request

### Criterios para nuevos proyectos:

- ✅ Web Components nativos (sin frameworks)
- ✅ Código documentado y comentado
- ✅ Incluir README específico del proyecto
- ✅ Demostrar un concepto educativo claro

---

## 📄 Licencia

MIT License - Proyecto educativo de código abierto.

---

## ✍️ Autor

**Salvador** - Estudiante del curso "Aplicaciones con Web Components, Lit Element y Stencil.js"

---

## 🔮 Próximos proyectos

Ideas para futuros componentes:

- [ ] 🎮 Sistema de tabs/pestañas
- [ ] 📋 Lista de tareas (Todo List)
- [ ] 🎨 Selector de colores personalizado
- [ ] 📊 Gráficos con Canvas
- [ ] 🔔 Sistema de notificaciones
- [ ] 🌓 Interruptor de tema claro/oscuro
- [ ] 📅 Selector de fecha personalizado
- [ ] 🎯 Barra de progreso animada

---

**⭐ Si te ha resultado útil, dale una estrella al repositorio!**
