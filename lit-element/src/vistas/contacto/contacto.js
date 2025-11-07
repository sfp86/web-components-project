import { LitElement, css, html } from 'lit';

export class ContactoView extends LitElement {
  static get properties() {
    return {
      // Define your properties here
    };
  }

  static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }

    h1 {
      color: #751ea7ff;
    }

    .contacto-info {
      margin-top: 1rem;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Contacto</h1>
        <div class="contacto-info">
          <p>Email: contacto@ejemplo.com</p>
          <p>Teléfono: +34 123 456 789</p>
          <p>Dirección: Calle Principal, 123</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('wc-contacto-view', ContactoView);
