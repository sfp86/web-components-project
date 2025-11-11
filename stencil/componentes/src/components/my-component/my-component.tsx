import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  newAge: number = 25;

  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    // return <wc-componente02 name='AAAA' secondSurname='CCCC' age={this.newAge}></wc-componente02>
    // return <wc-componente03></wc-componente03>;
    return <div><wc-padre></wc-padre></div>;
  }
}
