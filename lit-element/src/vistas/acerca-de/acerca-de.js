import { LitElement, css, html } from 'lit';

export class AcercaDeView extends LitElement {
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
  `;

  render() {
    return html`
      <div>
        <h1>Acerca de</h1>
        <p>Esta es la página de información sobre el proyecto.</p>
        <p>
          Proyecto desarrollado con Lit Element para aprender Web Components.
        </p>
      </div>
    `;
  }
}

window.customElements.define('wc-acerca-de-view', AcercaDeView);
