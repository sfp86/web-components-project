# ⏱️ Cronómetro Digital - Web Components

Cronómetro digital de alta precisión con display de 7 segmentos estilo LED, implementado completamente con **Web Components nativos** (Vanilla JavaScript).

---

## 🎯 Características

- ✅ **Display de 7 segmentos** estilo LED retro
- ✅ **Precisión de centésimas de segundo** (10ms de intervalo)
- ✅ **Formato HH:MM:SS:CS** (Horas:Minutos:Segundos:Centésimas)
- ✅ **Botones interactivos** de Iniciar/Pausar y Reiniciar
- ✅ **Arquitectura modular** con 5 componentes reutilizables
- ✅ **Comunicación por eventos** (Observer Pattern)
- ✅ **Encapsulación completa** con Shadow DOM
- ✅ **Sin dependencias externas** - Solo APIs nativas

---

## 🚀 Cómo ejecutar

### Método 1: Con http-server (recomendado)

```bash
# Instalar http-server globalmente (solo la primera vez)
npm install -g http-server

# Desde la carpeta chrono
cd chrono

# Iniciar servidor
http-server ./

# Abrir en el navegador
# http://localhost:8080
```

### Método 2: Con Python

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

### Método 3: Con Node.js (sin instalación)

```bash
npx http-server ./
```

### ⚠️ Importante
Este proyecto **requiere un servidor HTTP** debido al uso de **ES6 Modules**. No funcionará abriendo directamente `index.html` en el navegador (protocolo `file://`) por las políticas CORS.

---

## 📐 Arquitectura

Ver documentación arquitectónica completa: **[ARQUITECTURA.md](./ARQUITECTURA.md)**

### Componentes Web

Este proyecto está compuesto por **5 Web Components** independientes:

#### 1. `<wc-crono>` - Orquestador Principal
**Responsabilidad**: Controlar el estado del cronómetro y coordinar componentes.

- Gestiona el contador (centésimas de segundo)
- Crea botones dinámicamente en su Shadow DOM
- Controla el intervalo (`setInterval` cada 10ms)
- Emite eventos `actualizarTiempo` con el contador
- Estados: Detenido → Ejecutando → Pausado

#### 2. `<wc-contenedor-digitos>` - Gestor de Tiempo
**Responsabilidad**: Formatear el tiempo y actualizar dígitos.

- Escucha eventos `actualizarTiempo`
- Convierte centésimas a formato HH:MM:SS:CS
- Calcula decenas y unidades para cada posición
- Actualiza los 8 dígitos individuales mediante `querySelector`

#### 3. `<wc-digito>` - Display de 7 Segmentos
**Responsabilidad**: Renderizar un dígito (0-9) con segmentos LED.

- Usa un `Map` con configuración de segmentos para cada número
- Observa cambios en atributo `numero` (Observed Attributes)
- Renderiza ocultando/mostrando segmentos específicos
- 7 segmentos: superior, laterales superiores, central, laterales inferiores, inferior

#### 4. `<wc-boton>` - Botón Interactivo
**Responsabilidad**: Emitir eventos personalizados al hacer click.

- Crea un `<button>` real en Shadow DOM
- Emite evento `customClick` con `{titulo: "Iniciar"}`
- Configuración: `bubbles: true`, `composed: true` (atraviesa Shadow DOM)
- Actualiza su texto dinámicamente mediante atributos

#### 5. `<wc-puntos>` - Separador Visual
**Responsabilidad**: Mostrar los dos puntos (`:`) entre grupos.

- Componente puramente visual
- Renderiza dos círculos estilizados
- Sin lógica de negocio

---

## 🔄 Flujo de datos

```
Usuario click → <wc-boton> → customClick event
                                  ↓
                            <wc-crono> escucha
                                  ↓
                        Inicia setInterval(10ms)
                                  ↓
                        Emite actualizarTiempo event
                                  ↓
                  <wc-contenedor-digitos> escucha
                                  ↓
                      Formatea contador a tiempo
                                  ↓
              Actualiza atributo "numero" de cada <wc-digito>
                                  ↓
              <wc-digito> detecta cambio (observedAttributes)
                                  ↓
                        Re-renderiza segmentos
                                  ↓
                      Usuario ve actualización
```

---

## 📂 Estructura del proyecto

```
chrono/
│
├── index.html                      # Punto de entrada (declara componentes)
├── main.js                         # Registro de custom elements
├── README.md                       # Este archivo
├── ARQUITECTURA.md                 # Análisis arquitectónico completo
│
├── boton/
│   ├── boton.js                    # Lógica del botón
│   └── styles.js                   # Estilos del botón
│
├── contenedor_digitos/
│   ├── contenedorDigitos.js        # Lógica del contenedor
│   └── styles.js                   # Estilos del contenedor
│
├── crono/
│   ├── crono.js                    # Lógica del cronómetro
│   └── styles.js                   # Estilos del cronómetro
│
├── digito/
│   ├── digito.js                   # Lógica del display 7 segmentos
│   ├── estilos.js                  # Estilos de los segmentos
│   └── template.js                 # Template HTML de segmentos
│
└── puntos/
    └── puntos.js                   # Componente separador
```

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| **Custom Elements v1** | Definición de elementos personalizados |
| **Shadow DOM** | Encapsulación de estilos y estructura |
| **ES6 Modules** | Sistema de módulos (`import`/`export`) |
| **Custom Events** | Comunicación entre componentes |
| **JavaScript ES6+** | Clases, Map, arrow functions, template literals |
| **Observed Attributes** | Reactividad a cambios de atributos |
| **CSS3** | Flexbox, transforms, custom properties |
| **setInterval/clearInterval** | Control de temporización |

---

## 🎨 Vista previa

```
┌─────────────────────────────────────┐
│                                     │
│     ██    ██    ██    ██            │
│     ██ :  ██ :  ██ :  ██            │
│     ██    ██    ██    ██            │
│                                     │
│    HH    MM    SS    CS             │
│                                     │
│   [  Iniciar  ]  [ Reiniciar ]     │
│                                     │
└─────────────────────────────────────┘
```

### Display de 7 segmentos (ejemplo: dígito 8)

```
 ┌─────┐  segmento superior
 │     │  laterales superiores
 ├─────┤  segmento central
 │     │  laterales inferiores
 └─────┘  segmento inferior
```

---

## 📊 Mapa de segmentos

Cada número del 0 al 9 se representa activando segmentos específicos:

| Número | Segmentos activos |
|--------|-------------------|
| **0** | Todos excepto central |
| **1** | Laterales derechos |
| **2** | Superior, derecho superior, central, izquierdo inferior, inferior |
| **3** | Superior, derechos, central, inferior |
| **4** | Izquierdo superior, derechos, central |
| **5** | Superior, izquierdo superior, central, derecho inferior, inferior |
| **6** | Superior, izquierdo superior, central, inferiores, inferior |
| **7** | Superior, derechos |
| **8** | Todos |
| **9** | Todos excepto izquierdo inferior |

---

## 🧩 Patrones de diseño aplicados

### 1. Component-Based Architecture
Cada funcionalidad encapsulada en un componente independiente y reutilizable.

### 2. Observer Pattern (Pub/Sub)
Comunicación mediante Custom Events sin acoplamiento directo entre componentes.

### 3. Separation of Concerns
- **Lógica**: Archivos `.js` de cada componente
- **Estilos**: Archivos `styles.js` / `estilos.js`
- **Template**: Archivos `template.js`

### 4. Encapsulation (Shadow DOM)
Estilos y DOM privados que no afectan ni son afectados por el DOM global.

### 5. Composition over Inheritance
Componentes se componen jerárquicamente en lugar de heredar.

---

## 🔍 Puntos clave del código

### Definición de un Custom Element

```javascript
class Digito extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  
  connectedCallback() {
    this.render();
  }
  
  static get observedAttributes() {
    return ['numero'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'numero') {
      this.renderNumero();
    }
  }
}

customElements.define("wc-digito", Digito);
```

### Comunicación por eventos

```javascript
// Emisor (Boton)
this.dispatchEvent(new CustomEvent("customClick", {
  detail: { titulo: this.titulo },
  bubbles: true,
  composed: true  // Atraviesa Shadow DOM
}));

// Receptor (Crono)
window.addEventListener("customClick", (event) => {
  console.log(event.detail.titulo);
});
```

### Map para configuración de segmentos

```javascript
const numeros = new Map([
  [0, ["central"]],  // Oculta solo el segmento central
  [1, ["central-superior", "izqui-superior", /* ... */]],
  // ... resto de números
]);
```

---

## 📚 Conceptos aprendidos

- ✅ Ciclo de vida de Custom Elements (`connectedCallback`, `attributeChangedCallback`)
- ✅ Shadow DOM y encapsulación de estilos
- ✅ `observedAttributes` para reactividad
- ✅ Custom Events con `bubbles` y `composed`
- ✅ Slots para proyección de contenido
- ✅ Binding de contexto con `.bind(this)`
- ✅ ES6 Modules y organización de código
- ✅ Uso de `Map` para estructuras de datos
- ✅ `querySelector` dentro de Shadow DOM
- ✅ Gestión de intervalos y temporizadores

---

## 🐛 Solución de problemas

### El cronómetro no se muestra
- ✅ Verifica que estés ejecutando un servidor HTTP
- ✅ Abre la consola del navegador para ver errores
- ✅ Confirma que `main.js` se carga como módulo (`type="module"`)

### Los eventos no funcionan
- ✅ Verifica que los eventos tengan `composed: true`
- ✅ Comprueba el binding correcto (`.bind(this)` en el constructor)
- ✅ Confirma que los listeners estén registrados correctamente

### Los estilos no se aplican
- ✅ Los estilos dentro de Shadow DOM no afectan al exterior
- ✅ Usa `:host` para estilos del componente
- ✅ Usa `::slotted()` para estilos de contenido proyectado

---

## 🚀 Posibles mejoras futuras

- [ ] **Persistencia**: Guardar estado en `localStorage`
- [ ] **Sonidos**: Añadir efectos de sonido al iniciar/pausar
- [ ] **Temas**: Sistema de temas con CSS custom properties
- [ ] **Lap times**: Función de vueltas/parciales
- [ ] **Animaciones**: Transiciones suaves entre números
- [ ] **Responsive**: Adaptar a diferentes tamaños de pantalla
- [ ] **Accesibilidad**: Mejorar ARIA labels y navegación por teclado
- [ ] **Testing**: Añadir tests unitarios con Web Test Runner
- [ ] **TypeScript**: Migrar a TypeScript para tipado estático
- [ ] **Lit Element**: Refactorizar con Lit para simplificar código

---

## 📖 Recursos adicionales

### Documentación oficial
- [MDN - Custom Elements](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements)
- [MDN - Shadow DOM](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)
- [MDN - Custom Events](https://developer.mozilla.org/es/docs/Web/API/CustomEvent)

### Análisis detallado
- [ARQUITECTURA.md](./ARQUITECTURA.md) - Documentación arquitectónica completa con diagramas Mermaid

---

## 📄 Licencia

MIT License - Proyecto educativo

---

## ✍️ Autor

**Salvador** - Curso "Aplicaciones con Web Components, Lit Element y Stencil.js"

---

**⭐ Si te ha resultado útil, comparte y da una estrella al repositorio principal!**

[← Volver al índice de proyectos](../README.md)
