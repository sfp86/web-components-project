import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-componente01',
  styleUrl: 'wc-componente01.css',
  shadow: true,
})
export class WcComponente01 {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
