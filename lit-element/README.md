# 🔥 Lit Element - Proyectos

Colección de proyectos desarrollados con **Lit Element**, una librería ligera para crear Web Components con una sintaxis moderna y reactiva.

---

## 📦 Proyectos

### 🔢 App Counter (Próximamente)

Contador interactivo básico para aprender los fundamentos de Lit Element.

**Características**:

- Propiedades reactivas
- Event handlers
- Estilos encapsulados
- Decoradores

### 📋 App Todo (Próximamente)

Lista de tareas con gestión de estado.

---

## 📖 Workbook - Ejercicios Prácticos

### Cómo usar los ejercicios

Cada ejercicio está comentado en `index.html`. Para probar un ejercicio específico:

1. Abre `lit-element/index.html`
2. **Comenta** el componente actual
3. **Descomenta** el componente del ejercicio que quieres probar
4. Guarda y el servidor recargará automáticamente

---

### Ejercicio 1: Componente Botón (`<wc-boton>`)

**Objetivo**: Aprender propiedades reactivas y event listeners en Lit Element.

**Cómo probarlo**:

```html
<!-- Comenta el componente actual -->
<!-- <my-element></my-element> -->

<!-- Descomenta este -->
<wc-boton titulo="Botón 1"></wc-boton>
```

**Conceptos que aprenderás**:

- ✅ Propiedades reactivas con `static get properties()`
- ✅ Event listeners con `@mousedown` y `@mouseup`
- ✅ Estilos encapsulados con `css` tagged template
- ✅ Manipulación del Shadow DOM con `querySelector`
- ✅ Lifecycle: `firstUpdated()`

**Archivo**: `src/components/boton/boton.js`

---

### Ejercicio 2: Componente Tabla (`<wc-tabla>`)

**Objetivo**: Aprender a renderizar listas dinámicas y trabajar con vistas.

**Cómo probarlo**:

```html
<!-- Comenta el componente actual -->
<!-- <my-element></my-element> -->

<!-- Descomenta este -->
<wc-home></wc-home>
```

**Conceptos que aprenderás**:

- ✅ Renderizado de listas con `.map()`
- ✅ Propiedades de tipo `Array`
- ✅ Composición de componentes (Home contiene Tabla)
- ✅ Paso de datos entre componentes padre-hijo
- ✅ Templates HTML con `html` tagged template

**Archivos**:

- `src/vistas/home/home.js` - Componente contenedor con datos
- `src/vistas/home/tabla.js` - Componente tabla que renderiza la lista

---

### Ejercicio 3: Componente Registro (`<wc-registro-view>`)

**Objetivo**: Aprender a manejar formularios, eventos personalizados y comunicación entre componentes.

**Cómo probarlo**:

```html
<!-- Comenta el componente actual -->
<!-- <my-element></my-element> -->

<!-- Descomenta este -->
<wc-home-view></wc-home-view>
```

**Conceptos que aprenderás**:

- ✅ Manejo de formularios con `@input` y `@click`
- ✅ Eventos personalizados con `CustomEvent`
- ✅ Propagación de eventos (`bubbles` y `composed`)
- ✅ Comunicación padre-hijo con eventos
- ✅ Actualización inmutable de arrays con `Object.assign()`
- ✅ Two-way data binding con `.value`

**Archivos**:

- `src/vistas/home/home.js` - Componente contenedor que gestiona la lista
- `src/vistas/home/registro.js` - Formulario que emite eventos personalizados
- `src/vistas/home/tabla.js` - Componente tabla que muestra los registros

---

### Ejercicio 4: Sistema de Routing (`<wc-router>`)

**Objetivo**: Aprender a implementar un sistema de enrutamiento del lado del cliente usando eventos personalizados y manipulación del Shadow DOM.

**Cómo probarlo**:

```html
<!-- Comenta el componente actual -->
<!-- <my-element></my-element> -->

<!-- Descomenta este -->
<wc-router name="main-router">
  <wc-navbar></wc-navbar>
  <wc-viewport vistaActual="/">
    <wc-route path="/">
      <h1>Hola desde Home</h1>
      <wc-home-view></wc-home-view>
    </wc-route>
    <wc-route path="/acerca-de">
      <h1>Hola desde Acerca de</h1>
      <wc-acerca-de-view></wc-acerca-de-view>
    </wc-route>
    <wc-route path="/contacto">
      <h1>Hola desde Contacto</h1>
      <wc-contacto-view></wc-contacto-view>
    </wc-route>
  </wc-viewport>
</wc-router>
```

**Conceptos que aprenderás**:

- ✅ Eventos personalizados con `CustomEvent` y propagación (`bubbles`, `composed`)
- ✅ Event listeners globales en el constructor
- ✅ Manipulación directa del Shadow DOM con `shadowRoot.innerHTML`
- ✅ Búsqueda de elementos con `querySelectorAll` y `Array.from()`
- ✅ Arquitectura orientada a eventos para comunicación entre componentes
- ✅ Gestión de múltiples routers con el atributo `name`
- ✅ Renderizado condicional basado en rutas

**Arquitectura del Sistema**:

1. **`<wc-router>`**: Contenedor que escucha eventos de navegación
2. **`<wc-link>`**: Enlaces que disparan eventos de navegación
3. **`<wc-viewport>`**: Contenedor que renderiza la ruta activa
4. **`<wc-route>`**: Define una ruta con su path y contenido
5. **`<wc-navbar>`**: Barra de navegación con enlaces

**Flujo de navegación**:

1. Usuario hace clic en `<wc-link to="/acerca-de">`
2. El link dispara un `CustomEvent('navigate', { to: '/acerca-de', routerName: undefined })`
3. El evento sube por el DOM hasta `<wc-router>`
4. El router valida que `routerName === undefined || routerName === this.name`
5. El router llama a `viewport.renderView('/acerca-de')`
6. El viewport busca la ruta con `path="/acerca-de"` y la renderiza en su Shadow DOM

**Archivos**:

- `src/components/routing/router.js` - Controlador central de enrutamiento
- `src/components/routing/link.js` - Componente de enlace que dispara navegación
- `src/components/routing/viewport.js` - Contenedor que renderiza rutas
- `src/components/routing/route.js` - Definición de ruta
- `src/components/navbar/navbar.js` - Barra de navegación
- `src/vistas/acerca-de/acerca-de.js` - Vista "Acerca de"
- `src/vistas/contacto/contacto.js` - Vista "Contacto"

---

### Ejercicio 5: My Element (`<my-element>`) - Demo inicial

**Objetivo**: Componente de ejemplo del scaffolding con contador.

```html
<my-element></my-element>
```

**Archivo**: `src/components/my-element/my-element.js`

---

## 🚀 ¿Qué es Lit Element?

**Lit** es una librería simple para crear Web Components rápidos y ligeros.

### Ventajas sobre Vanilla Web Components:

- ✅ **Sintaxis declarativa** con template literals
- ✅ **Propiedades reactivas** automáticas
- ✅ **Decoradores** para simplificar el código
- ✅ **Pequeño tamaño** (~5KB minified + gzipped)
- ✅ **Rendimiento optimizado** con actualizaciones granulares
- ✅ **Compatible** con estándares Web Components

---

## 🛠️ Tecnologías utilizadas

| Tecnología     | Versión | Propósito                         |
| -------------- | ------- | --------------------------------- |
| **Lit**        | 3.x     | Librería base para Web Components |
| **TypeScript** | 5.x     | Tipado estático (opcional)        |
| **Vite**       | 5.x     | Build tool y dev server           |
| **npm**        | 10.x    | Gestor de paquetes                |

---

## 📚 Conceptos de Lit Element

### Decoradores principales:

- `@customElement('my-element')` - Define un custom element
- `@property()` - Declara propiedades reactivas
- `@state()` - Estado interno del componente
- `@query()` - Selecciona elementos del Shadow DOM

### Ejemplo básico:

```javascript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-counter')
export class MyCounter extends LitElement {
  @property({ type: Number })
  count = 0;

  static styles = css`
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
  `;

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button @click=${this._increment}>Increment</button>
      </div>
    `;
  }

  _increment() {
    this.count++;
  }
}
```

---

## 🔧 Setup de proyectos

Cada proyecto en esta carpeta sigue la misma estructura:

```
app-nombre/
├── index.html              # Punto de entrada
├── package.json            # Dependencias
├── vite.config.js          # Configuración de Vite
├── src/
│   ├── my-element.js       # Componente principal
│   └── components/         # Componentes adicionales
└── README.md               # Documentación del proyecto
```

---

## 📖 Recursos de aprendizaje

### Documentación oficial

- [Lit.dev](https://lit.dev/) - Documentación oficial
- [Lit Playground](https://lit.dev/playground/) - Editor online
- [Lit Tutorial](https://lit.dev/tutorial/) - Tutorial interactivo

### Comparación con otros frameworks

- **vs React**: Lit usa estándares web, React tiene ecosistema más grande
- **vs Vue**: Lit es más ligero, Vue tiene más funcionalidades
- **vs Vanilla WC**: Lit simplifica mucho el código repetitivo

---

## 🎯 Objetivos de aprendizaje

1. Entender la **reactividad** de Lit Element
2. Dominar el uso de **decoradores**
3. Aprender a **gestionar estado** eficientemente
4. Crear componentes **reutilizables** y **escalables**
5. Comparar con la implementación **Vanilla** (ver carpeta `chrono/`)

---

[← Volver al índice de proyectos](../README.md)
