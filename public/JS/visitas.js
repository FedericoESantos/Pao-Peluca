function generarUUID() {
  // Genera un identificador único
  return 'xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function contarVisita() {
  // Verificar si hay visitas almacenadas y estructurarlas correctamente
  let visitas = JSON.parse(localStorage.getItem('visitas'));

  if (!visitas || typeof visitas !== 'object') {
      visitas = { total: 0, usuarios: [] }; // Estructura inicial
  }

  // Si no existe un ID en el usuario actual, lo generamos
  if (!localStorage.getItem('user_id')) {
      const userID = generarUUID();
      localStorage.setItem('user_id', userID);

      // Contamos como una nueva visita
      visitas.total += 1;
      visitas.usuarios.push(userID);
      localStorage.setItem('visitas', JSON.stringify(visitas));
  }

  // Mostrar el total de visitas en la página
  const contadorElemento = document.getElementById('contador');
  if (contadorElemento) {
      contadorElemento.innerText = visitas.total;
  } else {
      console.error("Elemento con ID 'contador' no encontrado.");
  }
}

contarVisita();


// if (localStorage.visitas) {
//   localStorage.visitas = Number(localStorage.visitas) + 1;
// } else {
//   localStorage.visitas = 1;
// }
// document.getElementById('contador').innerText = localStorage.visitas;