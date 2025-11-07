import { LitElement, css, html } from "lit";

/**
 * Componente Botón con Lit Element
 * Demuestra propiedades reactivas y event listeners
 */
class Boton extends LitElement {
  static get properties() {
    return {
      titulo: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      button {
        all: initial;
        background-color: #9292b5;
        font-family: cursive;
        margin-right: 20px;
        width: 150px;
        border-radius: 10px;
        text-align: center;
        padding: 2px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`<button
      @mousedown=${this.mouseDownListener}
      @mouseup=${this.mouseUpListener}
    >
      ${this.titulo}
    </button>`;
  }

  firstUpdated() {
    this.boton = this.shadowRoot.querySelector("button");
  }

  mouseDownListener(event) {
    this.boton.style.backgroundColor = "#0c0cdfff";
    // Alternativa: event.target.style.backgroundColor = "#e20e4bff";
  }

  mouseUpListener(event) {
    this.boton.style.backgroundColor = "#0de118ff";
  }

  constructor() {
    super();
    // Forma tradicional de añadir listeners (no recomendada en Lit)
    // this.addEventListener('mousedown', this.mouseDownListener);
    // this.addEventListener('mouseup', this.mouseUpListener);
  }
}

window.customElements.define("wc-boton", Boton);
