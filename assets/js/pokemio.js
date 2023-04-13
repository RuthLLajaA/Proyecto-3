//Funcion para obtener los datos generateurl y ajax
$("document").ready(function(){
  $("#btnBuscar").click(function(e){
      e.preventDefault();
      var nombrepokemon=$("#id").val().toLowerCase();//colocarlo en minuscula 
      if(nombrepokemon){//Si hay un texto en el input
          buscarPokemon(nombrepokemon);//ejecutamos la funcion buscarPokemon y le eviamos un parametro
      }
  });
  $("#btnLimpiar").click(function(e){
      e.preventDefault();
      $("#container-pokemon").empty();
      $("#id").val('');
  });
  function buscarPokemon(pokemon) {
      $.ajax({
          type: "GET",//obtener una informacion
          url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          dataType: "json",
          success: function (data) { renderPokeData(data) }
      });
   };
   function renderPokeData(data) {
         //Manipulamos el DOM para agregar imagenes
           //Agregamos un DIV
           let div=$("<div></div>");
           div.addClass("poke-card");
           //Agregamos al id y nombre
           let info=$("<h3></h3>");
           info.addClass("poke-title");
           info.append(data.id + ' '+ data.name);
           div.append(info);
           //Agregamos la imagen
           let img=$("<img></img>");
           img.attr("src",data.sprites.other["home"].front_default);
           img.addClass("poke-img");
           div.append(img);

           //Agregamos el tipo
           var poketipo=data.types;
           var tipos='';
           poketipo.forEach(function(type){
              if(poketipo.length>1 && !poketipo.length.last){
                  tipos += `${type['type']['name']} - `.toUpperCase();//Para colocarlo en mayuscula
              }else{
                  tipos+=`${type['type']['name']}`.toUpperCase();
              }});
              let tipoPoke=$("<h3></h3>");
              tipoPoke.addClass("poke-tipo");
              tipoPoke.append("Tipo: "+tipos);
              div.append(tipoPoke);

              let peso=$("<h3></h3>");
              peso.append("Peso: "+ "" + data.weight);
              peso.addClass("poke-peso");
              div.append(peso);
              

              //Agregar todo lo hecho
              $("#container-pokemon").append(div);
   }
});