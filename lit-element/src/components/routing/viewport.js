import { LitElement } from 'lit';

export class Viewport extends LitElement {
  constructor() {
    super();
    this.vistaActual = '/';
  }

  connectedCallback() {
    super.connectedCallback();
    this.viewList = this.querySelectorAll('wc-route');
    this.renderView(this.vistaActual);
  }

  renderView(path) {
    this.innerHTML = '';
    this.shadowRoot.innerHTML = '';

    let view = Array.from(this.viewList).find((node) => {
      return node.getAttribute('path') === path;
    });

    !!view && this.shadowRoot.appendChild(view);
    this.vistaActual = path;
  }
}

window.customElements.define('wc-viewport', Viewport);
