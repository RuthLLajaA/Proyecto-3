function Registrar() {
  var nombre = document.getElementById("nombre").value;
  var Saludo = `Hola ${nombre}!
  Bienvenid@ a esta comunidad:)`;
  alert(Saludo);
  console.log(nombre);
  localStorage.setItem("name",nombre);
}