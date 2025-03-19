// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const validarNombre = (nombre) => {
  if (nombre === "") {
    alert("El nombre no puede estar vacío");
    return false;
  }

  return true;
};

const mostrarAmigos = () => {
  const elementoDeLista = document.getElementById("listaAmigos");

  elementoDeLista.innerHTML = "";
  let contenidoDeLista = "";

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];

    const elementoDeAmigo = '<li>' + amigo + "</li>";
    contenidoDeLista += elementoDeAmigo;
  }

  elementoDeLista.innerHTML = contenidoDeLista;
};

const agregarAmigo = () => {
  const inputDelNombre = document.getElementById("amigo");
  const nombre = inputDelNombre.value;

  const esUnNombreValido = validarNombre(nombre);

  if (!esUnNombreValido) {
    return;
  }

  amigos.push(nombre);

  inputDelNombre.value = "";

  mostrarAmigos();
};
