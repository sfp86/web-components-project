import { Component, Host, Listen, State, h } from '@stencil/core';
import { TareaCompletada } from '../TareaCompletada';

@Component({
  tag: 'wc-padre',
  shadow: true,
})
export class WcPadre {

  @Listen('tareaCompletadaEvento')
  eventListenerTareaCompletada(event: CustomEvent<TareaCompletada>) {
    this.tarea = event.detail.getName();

  }

  @State()
  tarea: string;

  render() {
    return (
      <Host>
        <div>
          <span>{this.tarea}</span>
        </div>
        <wc-eventos></wc-eventos>
      </Host>
    );
  }
}
