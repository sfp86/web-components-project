import style from "./styles.js";

class Boton extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    this.elementHtml = document.createElement("button");

    shadowRoot.innerHTML = `<style>${style}</style>`;
    shadowRoot.appendChild(this.elementHtml);
  }

  connectedCallback() {
    this.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      //   console.log("Click detectado en botón:", this.titulo);

      this.dispatchEvent(
        new CustomEvent("customClick", {
          detail: {
            titulo: this.titulo,
          },

          bubbles: true,
          composed: true,
        })
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Aquí puedes manejar la lógica cuando el elemento se añade al DOM
    switch (name) {
      case "titulo":
        this.actualizarTitulo(oldValue, newValue);
      // break;
    }
  }

  actualizarTitulo(oldValue, newValue) {
    if (oldValue !== newValue) {
      this.elementHtml.innerText = newValue;
    }
  }

  get titulo() {
    return this.getAttribute("titulo");
  }

  set titulo(titulo) {
    this.setAttribute("titulo", titulo);
  }

  static get observedAttributes() {
    return ["titulo"];
  }
}

export default Boton;
