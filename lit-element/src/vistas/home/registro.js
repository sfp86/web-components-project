import { html, LitElement } from 'lit';

export class RegistroView extends LitElement {
  constructor() {
    super();
    this.nombre = '';
    this.apellidos = '';
    this.edad = '';
  }

  static get properties() {
    return {
      //Nombre apellido y edad
      nombre: { type: String },
      apellidos: { type: String },
      edad: { type: Number },
    };
  }

  handler(name) {
    return (event) => {
      let valor = event.target.value;
      this[name] = valor;
    };
  }

  guardar() {
    let detail = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
    };
    let opciones = {
      detail: detail,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('guardarRegistro', opciones));
  }

  // Formulario con nombre apellido y edad

  render() {
    return html`
      <form>
        <label>
          Nombre:
          <input
            .value="${this.nombre}"
            @input="${this.handler('nombre')}"
            required
          />
        </label>
        <label>
          Apellido:
          <input
            .value="${this.apellidos}"
            @input="${this.handler('apellidos')}"
            required
          />
        </label>
        <label>
          Edad:
          <input
            .value="${this.edad}"
            @input="${this.handler('edad')}"
            type="number"
            required
          />
        </label>
        <button @click="${this.guardar}" type="button">Guardar</button>
      </form>
    `;
  }
}

window.customElements.define('wc-registro-view', RegistroView);
