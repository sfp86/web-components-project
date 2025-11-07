import { LitElement, html } from 'lit';
import './tabla.js';

export class HomeView extends LitElement {
  constructor() {
    super();
    this.lista = [
      { nombre: 'Juan', apellidos: 'Pérez Pérez', edad: 28 },
      { nombre: 'Ana', apellidos: 'García García', edad: 34 },
      { nombre: 'Luis', apellidos: 'Martínez Martínez', edad: 45 },
    ];
  }
  render() {
    return html` <wc-tabla .lista="${this.lista}"></wc-tabla> `;
  }
}

window.customElements.define('wc-home-view', HomeView);
