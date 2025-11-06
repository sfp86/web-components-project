import style from "./styles.js";

class Crono extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>${style}</style>`;

    let slot = document.createElement("slot");
    this.bottonIniciarPausar = document.createElement("wc-boton");
    this.bottonReiniciar = document.createElement("wc-boton");

    let contedorBotones = document.createElement("div");
    contedorBotones.classList.add("content-botones");

    shadowRoot.appendChild(slot);
    contedorBotones.appendChild(this.bottonIniciarPausar);
    contedorBotones.appendChild(this.bottonReiniciar);
    shadowRoot.appendChild(contedorBotones);

    this.contador = 0;

    this.iniciarPausar = this.iniciarPausar.bind(this);
    this.reiniciarClick = this.reiniciarClick.bind(this);
  }

  connectedCallback() {
    this.bottonIniciarPausar.titulo = "Iniciar";
    this.bottonReiniciar.titulo = "Reiniciar";

    this.bottonIniciarPausar.addEventListener(
      "customClick",
      this.iniciarPausar
    );

    this.bottonReiniciar.addEventListener("customClick", this.reiniciarClick);
  }
  iniciarPausar(event) {
    if (event.detail.titulo === "Iniciar") {
      this.bottonIniciarPausar.titulo = "Pausar";
      this.intervalo = setInterval(() => {
        this.contador++;
        this.dispatchEvent(
          new CustomEvent("actualizarTiempo", {
            detail: {
              contador: this.contador,
            },
            bubbles: true,
          })
        );
      }, 10);
    } else {
      clearInterval(this.intervalo);
      this.bottonIniciarPausar.titulo = "Iniciar";
    }
    event.stopPropagation();
  }

  reiniciarClick(event) {
    this.contador = 0;
    this.dispatchEvent(
      new CustomEvent("actualizarTiempo", {
        detail: {
          contador: this.contador,
        },
        bubbles: true,
      })
    );
    event.stopPropagation();
  }
}

export default Crono;
