function Saludar() {
  document.getElementById("siguiente").hidden=false;
}


let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a"),
    title = document.querySelector(".menu"),
    title = document.querySelector(".parrafo"),
    descr = document.querySelector(".contenido");
    button=document.querySelector(".join");
link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".de").classList.remove("de");
          el.classList.add("de");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].menu
          title.textContent = data[attr].parrafo
          descr.textContent = data[attr].contenido
          button.textContent= data[attr].join
     })
})
let data = {
  Aleman:{
    menu:"PokeInfo, PokeEnventos,PokeNews, PokeMio, Tabla de clasificación ",
    bus: "Suche",
    contenido: "Willkommen im POKEMON-UNIVERSUM",
    parrafo: "Danke, dass Sie hier sind, Sie werden viele Informationen über POKEMON finden. Es ist Zeit, etwas Spaß beim Suchen zu haben!",
    join:"Mehr erfahren" 
  }
}


    