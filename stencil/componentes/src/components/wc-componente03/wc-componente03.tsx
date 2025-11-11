import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'wc-componente03',
  styleUrl: 'wc-componente03.css',
  shadow: true,
})
export class WcComponente03 {
  

  @State()
  contador:number = 0; 

  connectedCallback(...args){
    console.log('connectedCallback',args )
  }
  disconnectedCallback(...args){
    console.log('disconnectedCallback', args)
  }
  componentWillLoad(...args){
    console.log('componentWillLoad', args)
  }
  componentDidLoad(...args){
    console.log('componentDidLoad', args)
  }
  componentShouldUpdate(newValue, oldValue, propertyName){
    if(newValue - oldValue === 2){
      return true
    }
    return false;
  }
  componentWillRender(...args){
    console.log('componentWillRender', args)
  }
  componentDidRender(...args){
    console.log('componentDidRender', args)
  }
  componentWillUpdate(...args){
    console.log('componentWillUpdate', args)
  }

  buttonHandler1(){
    this.contador ++;
  }
  buttonHandler2(){
    this.contador += 2; 
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>{this.contador}</h3>
        <button onClick={this.buttonHandler1.bind(this)} >mas uno</button>
        <button onClick={this.buttonHandler2.bind(this)} >mas dos</button>
      </div>
    );
  }

}
