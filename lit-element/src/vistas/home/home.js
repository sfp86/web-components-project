import { LitElement, html } from 'lit';
import './registro.js';
import './tabla.js';

export class HomeView extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  constructor() {
    super();
    this.lista = [
      { nombre: 'Juan', apellidos: 'Pérez Pérez', edad: 28 },
      { nombre: 'Ana', apellidos: 'García García', edad: 34 },
      { nombre: 'Luis', apellidos: 'Martínez Martínez', edad: 45 },
    ];
  }
  render() {
    return html`
      <wc-registro-view
        @guardarRegistro="${this.handleGuardarRegistro}"
      ></wc-registro-view>
      <wc-tabla .lista="${this.lista}"></wc-tabla>
    `;
  }

  handleGuardarRegistro(event) {
    let newList = Object.assign([], this.lista);
    newList.push(event.detail);
    this.lista = newList;
  }
}

window.customElements.define('wc-home-view', HomeView);
