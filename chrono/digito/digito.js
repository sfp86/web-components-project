import style from "./estilos.js";
import html from "./template.js";

// Map que indica qué segmentos deben mostrarse para cada número (0-9)
const numeros = new Map([
  [
    0,
    [
      "central-superior",
      "izqui-superior",
      "dere-superior",
      "izqui-inferior",
      "dere-inferior",
      "central-inferior",
    ],
  ],
  [1, ["dere-superior", "dere-inferior"]],
  [
    2,
    [
      "central-superior",
      "dere-superior",
      "central",
      "izqui-inferior",
      "central-inferior",
    ],
  ],
  [
    3,
    [
      "central-superior",
      "dere-superior",
      "central",
      "dere-inferior",
      "central-inferior",
    ],
  ],
  [4, ["izqui-superior", "central", "dere-superior", "dere-inferior"]],
  [
    5,
    [
      "central-superior",
      "izqui-superior",
      "central",
      "dere-inferior",
      "central-inferior",
    ],
  ],
  [
    6,
    [
      "central-superior",
      "izqui-superior",
      "central",
      "izqui-inferior",
      "dere-inferior",
      "central-inferior",
    ],
  ],
  [7, ["central-superior", "dere-superior", "dere-inferior"]],
  [
    8,
    [
      "central-superior",
      "izqui-superior",
      "dere-superior",
      "central",
      "izqui-inferior",
      "dere-inferior",
      "central-inferior",
    ],
  ],
  [
    9,
    [
      "central-superior",
      "izqui-superior",
      "dere-superior",
      "central",
      "dere-inferior",
      "central-inferior",
    ],
  ],
]);

// Definición del custom element <wc-digito>
class Digito extends HTMLElement {
  static get observedAttributes() {
    return ["numero"];
  }
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>${style}</style>${html}`;
    this._contenedorDigito =
      this.shadowRoot.querySelector("#contenedor-digito");
  }

  connectedCallback() {
    this.numero = 0;
    /*  setInterval(() => {
      this.avanzar(this.numero);
    }, 1000); */
  }

  avanzar(numero) {
    this.numero = numero === 9 ? 0 : numero + 1;
  }

  attributeChangedCallback(nombre, viejoValor, nuevoValor) {
    switch (nombre) {
      case "numero":
        if (viejoValor != nuevoValor) {
          this.renderNumero();
        }
        break;
    }
  }

  get numero() {
    return +this.getAttribute("numero");
  }

  set numero(numero) {
    this.setAttribute("numero", numero);
    // // actualizar render cuando se asigna por propiedad
    // if (this._contenedorDigito) this.renderNumero();
  }

  renderNumero() {
    Array.from(this._contenedorDigito.children).forEach((child) => {
      child.classList.add("white");
    });

    // por ahora renderizamos el número 3 (puedes cambiarlo o tomarlo de un atributo)
    numeros.get(this.numero).forEach((identificador) => {
      const el = this._contenedorDigito.querySelector("#" + identificador);
      if (el) el.classList.remove("white");
    });
  }
}

// Registrar el elemento
// window.customElements.define("wc-digito", Digito);
export default Digito;
