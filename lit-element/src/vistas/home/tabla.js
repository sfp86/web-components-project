import { LitElement, html } from "lit";

class Tabla extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  render() {
    return html`
      <h1>Tabla de registros</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          ${this.lista.map(
            (item) => html`
              <tr>
                <td>${item.nombre}</td>
                <td>${item.apellidos}</td>
                <td>${item.edad}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}
window.customElements.define("wc-tabla", Tabla);
