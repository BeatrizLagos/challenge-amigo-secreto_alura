// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const agregarAmigo = () => {
  const inputDelNombre = document.getElementById("amigo");
  const nombre = inputDelNombre.value;

  amigos.push(nombre);

  inputDelNombre.value = "";

  console.log(amigos);
};
