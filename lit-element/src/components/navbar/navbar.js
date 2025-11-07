import { LitElement, css, html } from 'lit';
import '../boton/boton.js';

export class Navbar extends LitElement {
  static get properties() {
    return {
      // Define your properties here
    };
  }

  static styles = css`
    .contenedor-navbar {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: auto;
      background-color: #751ea7ff;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <div class="contenedor-navbar">
        <wc-boton titulo="Inicio"></wc-boton>
        <wc-boton titulo="Acerca de"></wc-boton>
        <wc-boton titulo="Contacto"></wc-boton>
      </div>
    `;
  }
}

window.customElements.define('wc-navbar', Navbar);
