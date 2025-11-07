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
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-counter")
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
