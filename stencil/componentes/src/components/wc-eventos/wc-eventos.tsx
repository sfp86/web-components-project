import { Component, Element, Event, EventEmitter, Host, h } from '@stencil/core';
import { TareaCompletada } from './TareaCompletada';

@Component({
  tag: 'wc-eventos',
  styleUrl: 'wc-eventos.css',
  shadow: true,
})
export class WcEventos {

  @Element()
  el: HTMLElement;

  changeTextButton() {
    const button = this.el.shadowRoot.querySelector('button');
    button.innerText = 'Boton Cambiado en evento!';
  }



  @Event({
    eventName: 'tareaCompletadaEvento',
    bubbles: true,
    cancelable: true,
  })
  tareaCompletada: EventEmitter<TareaCompletada>;

  clickHandler() {
    this.tareaCompletada.emit(new TareaCompletada('Mi tarea importante'));
  }


  render() {
    return (
      <Host class="myclase" onclick={this.changeTextButton.bind(this)}>
       <button onClick={this.clickHandler.bind(this)}>Completar tarea</button>
      </Host>
    );
  }
}
