# 🧩 Web Components Projects

Colección de proyectos educativos sobre **Web Components** desarrollados con diferentes tecnologías: desde Vanilla JavaScript hasta frameworks modernos como Lit Element y StencilJS.

---

## 📦 Proyectos

### 1. [⏱️ Cronómetro Digital](./chrono) - Vanilla Web Components

Cronómetro con display de 7 segmentos estilo LED, implementado **sin frameworks** usando solo Web Components nativos.

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

### 2. [🔥 Lit Element Apps](./lit-element) - 🆕

Proyectos desarrollados con **Lit Element**, una librería ligera que simplifica la creación de Web Components con sintaxis moderna y reactiva.

**Tecnologías**: Lit 3.x, Decorators, Reactive Properties, Vite

**Proyectos incluidos**:
- 🔢 **App Counter** (Próximamente) - Contador reactivo básico
- 📋 **App Todo** (Próximamente) - Lista de tareas con gestión de estado

**[📄 Ver proyectos Lit Element](./lit-element/README.md)**

---

### 3. [⚡ StencilJS Apps](./stencil) - 🔮 Próximamente

Proyectos con **StencilJS**, un compilador que genera Web Components optimizados y framework-agnostic.

**Tecnologías**: StencilJS, TypeScript, JSX

---

## 🚀 Cómo ejecutar los proyectos

### Proyectos Vanilla (chrono/)

```bash
# Instalar http-server globalmente (solo la primera vez)
npm install -g http-server

# Navegar al proyecto
cd chrono

# Iniciar el servidor local
http-server ./

# Abrir en el navegador: http://localhost:8080
```

### Proyectos Lit Element (lit-element/)

```bash
# Navegar al proyecto específico
cd lit-element/app-counter

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en el navegador: http://localhost:5173
```

---

## 📊 Comparación de tecnologías

| Característica | Vanilla WC | Lit Element | StencilJS |
|----------------|------------|-------------|-----------|
| **Tamaño** | 0 KB (nativo) | ~5 KB | ~6 KB |
| **Curva aprendizaje** | Media | Baja | Media |
| **Reactividad** | Manual | Automática | Automática |
| **TypeScript** | Opcional | Opcional | Incluido |
| **Build requerido** | ❌ No | ✅ Sí (Vite) | ✅ Sí |
| **Decoradores** | ❌ No | ✅ Sí | ✅ Sí |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Ecosistema** | Nativo | Medio | Grande |

### Alternativa sin instalación:

```bash
# Si tienes Python instalado
python -m http.server 8080

# O con Node.js 18+
npx http-server ./
```

---

## 🛠️ Tecnologías utilizadas

### Por proyecto:

**Vanilla Web Components (chrono/)**
| Tecnología | Uso |
|------------|-----|
| Custom Elements v1 | Crear elementos personalizados |
| Shadow DOM | Encapsulación |
| ES6 Modules | Sistema de módulos |
| Vanilla JavaScript | Sin frameworks |

**Lit Element (lit-element/)**
| Tecnología | Uso |
|------------|-----|
| Lit 3.x | Librería base |
| Decorators | Sintaxis simplificada |
| Vite | Build tool y dev server |
| TypeScript | Tipado (opcional) |

**StencilJS (próximamente)**
| Tecnología | Uso |
|------------|-----|
| StencilJS | Compilador |
| TypeScript | Tipado nativo |
| JSX | Template syntax |

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
```
web-components-project/
│
├── README.md                    # Este archivo
├── .gitignore                   # Archivos ignorados por git
│
├── chrono/                      # Vanilla Web Components
│   ├── README.md
│   ├── ARQUITECTURA.md
│   ├── index.html
│   ├── main.js
│   ├── boton/
│   ├── contenedor_digitos/
│   ├── crono/
│   ├── digito/
│   └── puntos/
│
├── lit-element/                 # Proyectos Lit Element
│   ├── README.md
│   ├── app-counter/             # Proyecto 1: Contador
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   └── src/
│   └── app-todo/                # Proyecto 2: Todo List
│       └── ...
│
└── stencil/                     # Proyectos StencilJS (futuro)
    └── ...
```

---

## 🎯 Objetivos educativos

Este repositorio tiene como objetivo:

1. **Comparar** diferentes aproximaciones para crear Web Components
2. **Entender** las ventajas y desventajas de cada tecnología
3. **Aprender** desde lo básico (Vanilla) hasta frameworks modernos (Lit/Stencil)
4. **Dominar** patrones de diseño y arquitecturas componetizadas
5. **Crear** un portfolio de proyectos Web Components

---

## 🔀 Workflow con Git

Este proyecto utiliza ramas para organizar el desarrollo:

- **`main`** - Rama principal con código estable
- **`develop`** - Rama de desarrollo activo
- **`feature/*`** - Ramas para nuevas funcionalidades

```bash
# Trabajar en develop
git checkout develop

# Crear feature branch
git checkout -b feature/nueva-app

# Merge a develop cuando esté listo
git checkout develop
git merge feature/nueva-app

# Merge a main cuando esté probado
git checkout main
git merge develop
```

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

**Web Components**
- [MDN - Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [Custom Elements v1](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Shadow DOM v1](https://dom.spec.whatwg.org/#shadow-trees)

**Lit Element**
- [Lit.dev](https://lit.dev/) - Documentación oficial
- [Lit Tutorial](https://lit.dev/tutorial/) - Tutorial interactivo
- [Lit Playground](https://lit.dev/playground/) - Editor online

**StencilJS**
- [StencilJS.com](https://stenciljs.com/) - Documentación oficial
- [Stencil Components](https://stenciljs.com/docs/my-first-component)

### Tutoriales recomendados

- [Web.dev - Custom Elements](https://web.dev/custom-elements-v1/)
- [Web.dev - Shadow DOM](https://web.dev/shadowdom-v1/)
- [CSS-Tricks - Web Components](https://css-tricks.com/an-introduction-to-web-components/)

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

- ✅ Usar Web Components (Vanilla, Lit o Stencil)
- ✅ Código documentado y comentado
- ✅ Incluir README específico del proyecto
- ✅ Demostrar un concepto educativo claro
- ✅ Seguir las convenciones de la carpeta correspondiente

---

## 📄 Licencia

MIT License - Proyecto educativo de código abierto.

---

## ✍️ Autor

**Salvador** - Estudiante del curso "Aplicaciones con Web Components, Lit Element y Stencil.js"

---

## 🔮 Próximos proyectos

Ideas para futuros componentes:

**Vanilla Web Components**
- [x] ⏱️ Cronómetro digital con 7 segmentos

**Lit Element**
- [ ] 🔢 Contador reactivo (app-counter)
- [ ] 📋 Lista de tareas (app-todo)
- [ ] 🎮 Sistema de tabs/pestañas
- [ ] 🎨 Selector de colores personalizado
- [ ] 🌓 Interruptor de tema claro/oscuro

**StencilJS**
- [ ] 📅 Selector de fecha personalizado
- [ ] 📊 Gráficos con Canvas
- [ ] 🔔 Sistema de notificaciones
- [ ] 🎯 Barra de progreso animada

---

**⭐ Si te ha resultado útil, dale una estrella al repositorio!**
