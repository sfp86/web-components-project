# Análisis Arquitectónico - Proyecto Cronómetro Web Components

## 1. Análisis Arquitectónico

Este proyecto implementa un **cronómetro digital** utilizando una arquitectura basada en **Web Components nativos** con **Shadow DOM**. La arquitectura sigue el patrón de **componentes reutilizables y desacoplados**, donde cada componente tiene responsabilidades específicas y se comunican mediante **Custom Events**.

### Características arquitectónicas principales:

- **Modularidad**: Cada componente vive en su propia carpeta con lógica y estilos encapsulados
- **Encapsulación**: Uso de Shadow DOM para aislar estilos y comportamiento
- **Comunicación por eventos**: Los componentes se comunican mediante Custom Events (`customClick`, `actualizarTiempo`)
- **Composición**: Los componentes se componen jerárquicamente (Crono → ContenedorDigitos → Digito)
- **Separación de responsabilidades**: Cada componente tiene una única responsabilidad bien definida

---

## 2. Tecnologías Utilizadas

| Tecnología            | Versión/Estándar          | Uso en el Proyecto                                                                    |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| **Web Components**    | API nativa del navegador  | Base de todos los componentes personalizados                                          |
| **Custom Elements**   | HTML Standard             | Registro y definición de elementos personalizados (`<wc-digito>`, `<wc-crono>`, etc.) |
| **Shadow DOM**        | DOM Standard              | Encapsulación de estilos y estructura interna de componentes                          |
| **ES6 Modules**       | ECMAScript 2015+          | Sistema de módulos (import/export)                                                    |
| **Custom Events**     | DOM Events API            | Comunicación entre componentes                                                        |
| **JavaScript (ES6+)** | ECMAScript 2015+          | Lógica de negocio (clases, arrow functions, template literals, Map)                   |
| **CSS3**              | CSS Standard              | Estilos encapsulados en Shadow DOM                                                    |
| **HTML5**             | HTML Standard             | Estructura base y templates                                                           |
| **http-server**       | Herramienta de desarrollo | Servidor local para desarrollo                                                        |

### No se utilizan frameworks ni librerías externas

- ✅ Vanilla JavaScript puro
- ✅ APIs nativas del navegador
- ✅ Sin dependencias npm (excepto http-server para desarrollo)

---

## 3. Estructura de Arquitectura

```
chrono/
│
├── index.html                      # Punto de entrada de la aplicación
├── main.js                         # Registro de todos los custom elements
│
├── boton/                          # Componente Botón
│   ├── boton.js                    # Lógica del botón (dispara eventos customClick)
│   └── styles.js                   # Estilos encapsulados del botón
│
├── contenedor_digitos/             # Componente Contenedor de Dígitos
│   ├── contenedorDigitos.js        # Lógica: escucha eventos, formatea tiempo, actualiza dígitos
│   └── styles.js                   # Estilos del contenedor (flexbox, bordes, sombras)
│
├── crono/                          # Componente Cronómetro (Orquestador)
│   ├── crono.js                    # Lógica: controla intervalo, botones, emite eventos
│   └── styles.js                   # Estilos del cronómetro
│
├── digito/                         # Componente Dígito (Display 7 segmentos)
│   ├── digito.js                   # Lógica: renderiza números 0-9 con segmentos
│   ├── estilos.js                  # Estilos del display de 7 segmentos
│   └── template.js                 # Template HTML del contenedor de segmentos
│
└── puntos/                         # Componente Separador (:)
    └── puntos.js                   # Lógica y estilos de los dos puntos separadores
```

### Jerarquía de componentes:

```
<wc-crono>                          (Componente raíz - Orquestador)
  └── <slot>                        (Contenido proyectado desde index.html)
       └── <wc-contenedor-digitos> (Contenedor principal)
            ├── <wc-digito> × 8     (8 dígitos: HH:MM:SS:CS)
            └── <wc-puntos> × 3     (Separadores entre grupos)

  └── (Shadow DOM interno)
       ├── <wc-boton> "Iniciar/Pausar"  (Creado dinámicamente)
       └── <wc-boton> "Reiniciar"       (Creado dinámicamente)
```

---

## 4. Diagrama de Arquitectura (Mermaid)

### 4.1 Diagrama de Componentes

\`\`\`mermaid
graph TB
subgraph "Aplicación Cronómetro"
HTML[index.html]
MAIN[main.js<br/>Registro de Componentes]

        HTML -->|carga módulo| MAIN

        subgraph "Componentes Web"
            CRONO[wc-crono<br/>Orquestador Principal]
            CONTENEDOR[wc-contenedor-digitos<br/>Gestor de Tiempo]
            DIGITO[wc-digito<br/>Display 7 Segmentos]
            BOTON[wc-boton<br/>Interacción Usuario]
            PUNTOS[wc-puntos<br/>Separador Visual]
        end

        MAIN -.registra.-> CRONO
        MAIN -.registra.-> CONTENEDOR
        MAIN -.registra.-> DIGITO
        MAIN -.registra.-> BOTON
        MAIN -.registra.-> PUNTOS

        CRONO -->|contiene slot| CONTENEDOR
        CRONO -->|crea dinámicamente| BOTON
        CONTENEDOR -->|proyecta| DIGITO
        CONTENEDOR -->|proyecta| PUNTOS
    end

    style CRONO fill:#e1f5ff
    style CONTENEDOR fill:#fff4e1
    style DIGITO fill:#e8f5e9
    style BOTON fill:#fce4ec
    style PUNTOS fill:#f3e5f5

\`\`\`

### 4.2 Diagrama de Flujo de Eventos

\`\`\`mermaid
sequenceDiagram
participant Usuario
participant Boton as wc-boton
participant Crono as wc-crono
participant Contenedor as wc-contenedor-digitos
participant Digito as wc-digito (×8)

    Usuario->>Boton: Click "Iniciar"
    Boton->>Boton: dispatchEvent("customClick")
    Boton-->>Crono: customClick event {titulo: "Iniciar"}

    Crono->>Crono: Inicia setInterval(10ms)
    Crono->>Boton: Cambiar titulo a "Pausar"

    loop Cada 10ms
        Crono->>Crono: contador++
        Crono->>Crono: dispatchEvent("actualizarTiempo")
        Crono-->>Contenedor: actualizarTiempo event {contador}
        Contenedor->>Contenedor: formatearTempo(contador)
        Contenedor->>Digito: actualiza atributo "numero"
        Digito->>Digito: attributeChangedCallback
        Digito->>Digito: renderNumero()
        Digito->>Usuario: Actualiza visualización
    end

    Usuario->>Boton: Click "Pausar"
    Boton-->>Crono: customClick event {titulo: "Pausar"}
    Crono->>Crono: clearInterval()
    Crono->>Boton: Cambiar titulo a "Iniciar"

    Usuario->>Boton: Click "Reiniciar"
    Boton-->>Crono: customClick event {titulo: "Reiniciar"}
    Crono->>Crono: contador = 0
    Crono-->>Contenedor: actualizarTiempo event {contador: 0}
    Contenedor->>Digito: Reset todos a "0"

\`\`\`

### 4.3 Diagrama de Estructura de Datos

\`\`\`mermaid
classDiagram
class Crono {
-contador: number
-intervalo: IntervalID
-bottonIniciarPausar: wc-boton
-bottonReiniciar: wc-boton
+iniciarPausar(event)
+reiniciarClick(event)
+dispatchEvent("actualizarTiempo")
}

    class ContenedorDigitos {
        -contador: number
        +actualizarTiempo(event)
        +formatearTempo(contador)
        +querySelector() digitos
    }

    class Digito {
        -_contenedorDigito: Element
        -numero: number
        +renderNumero()
        +avanzar(numero)
        +attributeChangedCallback()
    }

    class Boton {
        -elementHtml: HTMLButtonElement
        -titulo: string
        +actualizarTitulo()
        +dispatchEvent("customClick")
    }

    class Puntos {
        +constructor()
    }

    Crono "1" --> "2" Boton : crea dinámicamente
    Crono "1" --> "1" ContenedorDigitos : contiene (slot)
    ContenedorDigitos "1" --> "8" Digito : proyecta
    ContenedorDigitos "1" --> "3" Puntos : proyecta

    Crono ..> ContenedorDigitos : emite "actualizarTiempo"
    Boton ..> Crono : emite "customClick"

\`\`\`

### 4.4 Diagrama de Ciclo de Vida

\`\`\`mermaid
stateDiagram-v2
[*] --> Cargando: Usuario abre index.html

    Cargando --> Registrando: main.js se ejecuta
    Registrando --> Construyendo: customElements.define()

    Construyendo --> Conectado: connectedCallback()

    state Conectado {
        [*] --> Detenido
        Detenido --> Ejecutando: Click "Iniciar"
        Ejecutando --> Pausado: Click "Pausar"
        Pausado --> Ejecutando: Click "Iniciar"
        Pausado --> Detenido: Click "Reiniciar"
        Ejecutando --> Detenido: Click "Reiniciar"

        state Ejecutando {
            [*] --> Incrementando
            Incrementando --> EmitirEvento: cada 10ms
            EmitirEvento --> ActualizarDigitos
            ActualizarDigitos --> Incrementando
        }
    }

    Conectado --> Desconectado: disconnectedCallback()
    Desconectado --> [*]

\`\`\`

---

## 5. Funcionalidad de los Web Components

### 5.1 `<wc-crono>` - Componente Orquestador

**Responsabilidad**: Controlar el cronómetro y coordinar todos los componentes.

**Funcionalidad**:

- Gestiona el estado del cronómetro (contador en centésimas de segundo)
- Crea dinámicamente dos botones ("Iniciar/Pausar" y "Reiniciar") en su Shadow DOM
- Controla el intervalo de tiempo (setInterval cada 10ms = 1 centésima)
- Escucha eventos `customClick` de los botones
- Emite eventos `actualizarTiempo` cada 10ms con el valor del contador
- Alterna entre estados: Detenido → Ejecutando → Pausado

**Características técnicas**:

- Usa `<slot>` para proyectar el contenido (contenedor-digitos)
- Bind de métodos en constructor para mantener contexto `this`
- Shadow DOM para encapsular botones y estilos

---

### 5.2 `<wc-contenedor-digitos>` - Gestor de Tiempo

**Responsabilidad**: Formatear el contador y actualizar los dígitos correspondientes.

**Funcionalidad**:

- Escucha eventos `actualizarTiempo` del componente padre
- Convierte el contador (centésimas) a formato HH:MM:SS:CS
- Calcula decenas y unidades para cada posición
- Actualiza los 8 dígitos mediante selección por ID (`querySelector`)
- Gestiona la lógica de conversión:
  - Centésimas → Decimas → Segundos → Minutos → Horas

**Características técnicas**:

- Método `formatearTempo()`: convierte contador numérico a objeto estructurado
- Usa `<slot>` para proyectar los `<wc-digito>` definidos en HTML
- Event listener con bind para mantener contexto

---

### 5.3 `<wc-digito>` - Display de 7 Segmentos

**Responsabilidad**: Mostrar un dígito del 0 al 9 mediante display de 7 segmentos.

**Funcionalidad**:

- Renderiza números usando 7 segmentos LED virtuales
- Usa un `Map` con la configuración de segmentos para cada número (0-9)
- Observa cambios en el atributo `numero` (Observed Attributes)
- Oculta/muestra segmentos añadiendo/quitando clase `.white`
- Cada segmento tiene ID único: `central-superior`, `izqui-superior`, `dere-superior`, `central`, `izqui-inferior`, `dere-inferior`, `central-inferior`

**Características técnicas**:

- `observedAttributes`: detecta cambios en atributo `numero`
- `attributeChangedCallback`: re-renderiza cuando cambia el número
- Getter/Setter para atributo `numero`
- Template HTML separado (`template.js`)
- Estilos de display de 7 segmentos con bordes y transformaciones CSS

**Mapa de segmentos** (ejemplo número 8 = todos activos):

```
 ┌─────┐  central-superior
 │     │  izqui-superior / dere-superior
 ├─────┤  central
 │     │  izqui-inferior / dere-inferior
 └─────┘  central-inferior
```

---

### 5.4 `<wc-boton>` - Componente de Interacción

**Responsabilidad**: Botón interactivo que emite eventos personalizados.

**Funcionalidad**:

- Crea un `<button>` real en el Shadow DOM
- Observa cambios en atributo `titulo` y actualiza el texto del botón
- Emite evento `customClick` con detalles: `{titulo: "Iniciar"}`
- Configuración de evento: `bubbles: true`, `composed: true` (atraviesa Shadow DOM)
- Previene comportamiento por defecto y propagación del click nativo

**Características técnicas**:

- `observedAttributes`: detecta cambios en `titulo`
- `attributeChangedCallback`: actualiza texto del botón
- Custom Event con `composed: true` para atravesar Shadow DOM boundaries
- Referencia interna al elemento `<button>` (`this.elementHtml`)

---

### 5.5 `<wc-puntos>` - Separador Visual

**Responsabilidad**: Mostrar los dos puntos (`:`) entre grupos de dígitos.

**Funcionalidad**:

- Componente puramente visual (sin lógica de negocio)
- Renderiza dos `<div>` estilizados como puntos
- Posicionamiento relativo para alinearse con los dígitos

**Características técnicas**:

- HTML y CSS inline en el mismo archivo
- Sin estado ni eventos
- Shadow DOM para encapsulación de estilos

---

## 6. Patrones de Diseño Aplicados

### 6.1 **Component-Based Architecture**

Cada funcionalidad está encapsulada en un componente reutilizable.

### 6.2 **Observer Pattern (Custom Events)**

Los componentes se comunican mediante eventos sin conocerse directamente.

### 6.3 **Separation of Concerns**

- **Lógica**: archivos `.js`
- **Estilos**: archivos `styles.js` / `estilos.js`
- **Template**: archivos `template.js`

### 6.4 **Encapsulation (Shadow DOM)**

Cada componente tiene estilos y DOM privados, evitando conflictos globales.

### 6.5 **Composition over Inheritance**

Los componentes se componen jerárquicamente en lugar de heredar comportamiento.

---

## 7. Flujo de Datos

```
Usuario interactúa → Boton → customClick event
                              ↓
                         Crono escucha evento
                              ↓
                      Inicia/Para setInterval
                              ↓
                      Emite actualizarTiempo event (cada 10ms)
                              ↓
                  ContenedorDigitos escucha evento
                              ↓
                      Formatea contador a tiempo
                              ↓
                  Actualiza atributo "numero" de cada Digito
                              ↓
                  Digito detecta cambio (observedAttributes)
                              ↓
                      Re-renderiza segmentos activos
                              ↓
                      Usuario ve actualización visual
```

---

## 8. Ventajas de esta Arquitectura

✅ **Reutilizabilidad**: Cada componente puede usarse en otros proyectos  
✅ **Mantenibilidad**: Cambios en un componente no afectan a otros  
✅ **Testabilidad**: Componentes aislados son fáciles de probar  
✅ **Encapsulación**: Shadow DOM evita conflictos de estilos  
✅ **Estándares Web**: No depende de frameworks, usa APIs nativas  
✅ **Performance**: Sin overhead de frameworks, renderizado nativo del navegador  
✅ **Escalabilidad**: Fácil añadir nuevos componentes o funcionalidades

---

## 9. Posibles Mejoras

1. **TypeScript**: Añadir tipado estático para mayor robustez
2. **Lit Element**: Migrar a Lit para simplificar la sintaxis y mejorar reactividad
3. **Testing**: Añadir pruebas unitarias con Web Test Runner o Vitest
4. **Accesibilidad**: Mejorar ARIA labels y soporte de teclado
5. **Persistencia**: Guardar estado en localStorage
6. **Responsive**: Adaptar tamaños a diferentes pantallas
7. **Themes**: Sistema de temas CSS custom properties
8. **Build System**: Añadir Vite o esbuild para optimización

---

## 10. Conclusión

Este proyecto demuestra una implementación limpia y moderna de Web Components nativos, siguiendo principios SOLID y patrones de diseño establecidos. La arquitectura modular y basada en eventos permite una fácil extensión y mantenimiento, mientras que el uso de APIs nativas garantiza compatibilidad y rendimiento óptimo sin dependencias externas.

---

**Autor**: Proyecto educativo - Curso de Web Components  
**Fecha**: Noviembre 2025  
**Tecnología Base**: Vanilla JavaScript + Web Components API
