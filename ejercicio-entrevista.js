// Crear una función que reciba un array de logs y un número máximo de minutos que un usuario puede estar conectado. La función debe devolver un array con los ids de los usuarios que cumplan con la condición de que su tiempo de conexión no supere el máximo de minutos.

function processLogs(logs, maxSpan) {
  maxSpan = 20;
  logs = [
    "30 99 sign-in",
    "30 105 sign-out",
    "12 100 sign-in",
    "20 80 sign-in",
    "12 120 sign-out",
    "20 101 sign-out",
    "21 110 sign-in",
  ];

  // Creo un objeto para almacenar los tiempos de inicio de sesión de cada usuario
  let sessionTimes = {};
  let result = [];

  // Recorro el arreglo de logs y almaceno los tiempos de inicio de sesión en el objeto sessionTimes
  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(" ");
    let id = log[0];
    let time = log[1];
    let action = log[2];

    if (action === "sign-in") {
      sessionTimes[id] = time;
    }

    if (
      action === "sign-out" &&
      sessionTimes[id] &&
      time - sessionTimes[id] < maxSpan
    ) {
      result.push(id);
    }
  }

  return result;
}

console.log(processLogs());
