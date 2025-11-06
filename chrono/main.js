//importa el modulo digito
import Boton from "./boton/boton.js";
import ContenedorDigitos from "./contenedor_digitos/contenedorDigitos.js";
import Crono from "./crono/crono.js";
import Digito from "./digito/digito.js";
import Puntos from "./puntos/puntos.js";

//define el custom element <wc-digito>

window.customElements.define("wc-digito", Digito);
window.customElements.define("wc-contenedor-digitos", ContenedorDigitos);
window.customElements.define("wc-puntos", Puntos);
window.customElements.define("wc-boton", Boton);
window.customElements.define("wc-crono", Crono);
