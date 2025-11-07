import { LitElement, html } from 'lit';

export class Route extends LitElement {
  static get properties() {
    return {
      path: { type: String },
    };
  }

  //   static styles = css`
  //     :host {
  //       display: block;
  //     }
  //   `;

  render() {
    return html` <slot></slot> `;
  }
}

window.customElements.define('wc-route', Route);
