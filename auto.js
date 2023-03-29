let b = document.getElementById("extraer");
let resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);

const imagenes = [];
imagenes["5"] = "billete5.jpg";
imagenes["10"] = "billete10.jpg";
imagenes["20"] = "billete20.jpg";
imagenes["50"] = "billete50.jpg";
imagenes["100"] = "billete100.jpg";

class Billete {
  constructor(n, v, c) {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
  }
}

let caja = [];
let entregado = [];

caja.push(new Billete("100", 100, 2));
caja.push(new Billete("50", 50, 2));
caja.push(new Billete("20", 20, 3));
caja.push(new Billete("10", 10, 4));
caja.push(new Billete("5", 5, 5));

let dinero = 0;
let div = 0;
let papeles = 0;

function entregarDinero() {
  resultado.innerHTML = "";
  let t = document.getElementById("dineroASacar");
  dinero = parseInt(t.value);
  for (let bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(bi.nombre, bi.valor, papeles));
      dinero -= bi.valor * papeles;
      bi.cantidad -= papeles;
    }
  }

  if (dinero > 0) {
    resultado.innerHTML +=
      "No hay plata bro, bienvenido a LATAM" + "<br /><hr />";
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML += "Sacaste: <br>";
        for (let i = 0; i < e.cantidad; i++) {
          let imagen = document.createElement("img");
          imagen.src = imagenes[e.nombre];
          document.getElementById("resultado").appendChild(imagen);
        }
        resultado.innerHTML += "<br><hr>";
      }
    }
  }
}
