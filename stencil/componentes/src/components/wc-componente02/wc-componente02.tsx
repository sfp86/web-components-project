import { Component, Listen, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'wc-componente02',
  styleUrl: 'wc-componente02.css',
  shadow: true,
})
export class WcComponente02 {

  @Prop()
  name: string;

  @State()
  surName: string = 'InitialSurname';

  @Prop({attribute:'seconSurname'})
  secondSurname: string;
  @Prop({reflect:true})
  age: number;
  @Watch('age')
  validateAge(newValue: number, oldValue: number) {
    if (newValue > 10) {
     throw new Error('Age cannot be greater than 10');
    }
  }

  @Listen('click', {capture: true })
  handleClick() {
    this.surName = 'ClickedSurname';
  }

  render() {
    return (
      <><div>
        <span>{this.name}</span>
      </div>
      <div>
          <span>{this.surName}</span>
      </div>
      <div>
          <span>{this.secondSurname}</span>
      </div>
      <div>
          <span>{this.age}</span>
      </div></>
    );
  }
}
