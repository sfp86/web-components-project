import style from "./styles.js";

class ContenedorDigitos extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>${style}</style>` + `<slot></slot>`;
    this.contador = 0;
    this.actualizarTiempo = this.actualizarTiempo.bind(this);
  }
  connectedCallback() {
    // Aquí puedes manejar la lógica cuando el elemento se añade al DOM
    // setInterval(() => {
    //   this.contador++;
    //   this.actualizarTiempo();
    // }, 10);
    document.body.addEventListener("actualizarTiempo", this.actualizarTiempo);
  }

  disconnectedCallback() {
    document.body.removeEventListener(
      "actualizarTiempo",
      this.actualizarTiempo
    );
  }

  actualizarTiempo(event) {
    let tiempo = this.formatearTempo(event.detail.contador);

    this.querySelector("#decenasHoras").numero = Math.floor(tiempo.horas / 10);
    this.querySelector("#unidadesHoras").numero = tiempo.horas % 10;
    this.querySelector("#decenasMinutos").numero = Math.floor(
      tiempo.minutos / 10
    );
    this.querySelector("#unidadesMinutos").numero = tiempo.minutos % 10;
    this.querySelector("#decenasSegundos").numero = Math.floor(
      tiempo.segundos / 10
    );
    this.querySelector("#unidadesSegundos").numero = tiempo.segundos % 10;
    this.querySelector("#decenasMilisegundos").numero = tiempo.decimas;
    this.querySelector("#unidadesMilisegundos").numero = tiempo.cetesimas;
  }

  formatearTempo(contador) {
    let horas, minutos, segundos, decimas, cetesimas;
    cetesimas = contador % 10;
    decimas = Math.floor((contador / 10) % 10);
    segundos = Math.floor((contador / 100) % 60);
    minutos = Math.floor((contador / 6000) % 60);
    horas = Math.floor((contador / 360000) % 24);
    return { horas, minutos, segundos, decimas, cetesimas };
  }
}
export default ContenedorDigitos;
