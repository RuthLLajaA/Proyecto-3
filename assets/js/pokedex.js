function obtenerDatos() {
  url = "../data/pokemon.json"
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => mostrarData(data));
}
document.addEventListener("DOMContentLoaded", obtenerDatos);

function mostrarData(data) {
  //Desestructuramos el objeto
  const { pokemon } = data;
  pokemon.forEach(pokemon => {
    const { name, img } = pokemon;
    const divPokemones = document.createElement("div");
    const cardPokemones = document.createElement("div");
    cardPokemones.classList.add("card-pokemones")
    //imagen
    const imagenPokemon = document.createElement("img");
    imagenPokemon.classList.add("img-img")
    imagenPokemon.src = img;
    imagenPokemon.alt = name;
    //para mostrar la ventana
    imagenPokemon.onclick = function() {
      mostrarVentana(pokemon);
    }
    //nombre
    const divNombre = document.createElement("div");
    const nombrePokemon = document.createElement("h4");
    nombrePokemon.textContent = name;

    //Ordenar elementos y divs
    divNombre.appendChild(nombrePokemon);
    cardPokemones.appendChild(imagenPokemon);
    cardPokemones.appendChild(divNombre);
    divPokemones.appendChild(cardPokemones);
    //Mostrarlo en el HTML
    document.querySelector("#pokemones-container").appendChild(divPokemones);
  });
}
function mostrarVentana(pokemon) {
  window.scrollTo(0, 0);
  //desestructuramos al objeto
  const { generation, about, size, type, resistant, weaknesses, img } = pokemon;
  //const {num,name}=generation;
  //const{height,weight}=size;
  let contenido = `
    <div class='ventana-container'>
        <div clas='img-ventana'>
        <a href="#" id="cerrar"><img src="assets/img/cerrar.png" alt="error" width="30px" height="30px"></a>
            <img class='img-vent' src='${img}' alt='${name}'>
        </div>
        <div class='ventana-info'>
            <p> ${about}</p>
            <p>Generación: ${generation.name}</p>
            <p>Tamaño: ${size.height}  ${size.weight} </p>
            <p>Tipo: ${type}</p>
            <p>Resistencia: ${resistant}</p>
            <p>Debilidades: ${weaknesses}</p>
        </div>
    </div>
    `;
  document.querySelector("#ventana").innerHTML = contenido;
  document.querySelector("#ventana").style.display = "block";
  //boton de cerrar
  document.querySelector("#cerrar").onclick = function() {
    document.querySelector("#ventana").style.display = "none";
  }
}