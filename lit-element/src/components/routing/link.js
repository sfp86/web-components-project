import { LitElement, css, html } from 'lit';

export class Link extends LitElement {
  static get properties() {
    return {
      to: { type: String, attribute: true },
      routerName: { type: String, attribute: true },
    };
  }

  static styles = css`
    div {
      text-decoration: none;
      color: white;
      padding: 0.5rem 1rem;
      background-color: #0c0cdfff;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    div:hover {
      background-color: #0a0ab8ff;
    }
  `;

  _handlerLink(event) {
    // event.preventDefault();
    // Emitir evento personalizado para el routing
    const detail = {
      detail: { to: this.to, routerName: this.routerName },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('navigate', detail));
  }

  render() {
    return html` <div @click="${this._handlerLink}"><slot></slot></div> `;
  }
}

window.customElements.define('wc-link', Link);
