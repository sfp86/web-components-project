import { LitElement, html } from 'lit';

export class Router extends LitElement {
  static get properties() {
    return {
      name: { type: String, attribute: true },
    };
  }

  constructor() {
    super();
    this.addEventListener('navigate', this._listenForEvent.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    this.viewportList = this.querySelectorAll('wc-viewport');
    this.addEventListener('navigate', this._listenForEvent);
  }

  _listenForEvent(event) {
    let { to, routerName } = event.detail;
    if (routerName === undefined || routerName === this.name) {
      this.viewportList.forEach((viewport) => {
        viewport.renderView(to);
      });
      event.stopPropagation();
    }
  }

  render() {
    return html`<slot></slot> `;
  }
}

window.customElements.define('wc-router', Router);
