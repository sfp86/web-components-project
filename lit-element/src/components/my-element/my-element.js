import { LitElement, css, html } from 'lit';

export class MyElement extends LitElement {
  static properties = {
    name: { type: String },
    count: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    h1 {
      margin: 0 0 20px 0;
      font-size: 2.5rem;
    }

    .counter {
      font-size: 4rem;
      margin: 30px 0;
      font-weight: bold;
    }

    .buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
    }

    button {
      padding: 12px 24px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: white;
      color: #667eea;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    button:active {
      transform: translateY(0);
    }

    .greeting {
      font-size: 1.2rem;
      margin-bottom: 10px;
      opacity: 0.9;
    }
  `;

  constructor() {
    super();
    this.name = 'Lit Element';
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <div class="container">
        <h1>🔥 ${this.name}</h1>
        <p class="greeting">¡Bienvenido al scaffolding de Lit Element!</p>

        <div class="counter">${this.count}</div>

        <div class="buttons">
          <button @click=${this.decrement}>➖ Decrementar</button>
          <button @click=${this.reset}>🔄 Reset</button>
          <button @click=${this.increment}>➕ Incrementar</button>
        </div>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
