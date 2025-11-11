import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-01',
  styleUrl: 'page-01.css',
  shadow: true,
})
export class Page01 {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
