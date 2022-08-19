function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    /*dificultad*/
    {
      pregunta: "¿Cuanto es 500-300?",
      ayuda: "Resta 5 - 3 y agregale los ceros",
      respuesta: "200",
      distractores: ["300", "100", "210"],
    },
    {
      pregunta: "¿Cuanto es 97-51?",
      respuesta: "46",
      distractores: ["50", "47", "no existe"],
    },
    {
      pregunta: "¿La siguiente operacion es correcta? 100-50=60",
      respuesta: "No",
      distractores: ["Si", "Probablemente no", "No lo se"],
    },
    {
      pregunta: "¿Para que nos podria servir restar?",
      respuesta: "Al recibir cambio",
      distractores: ["Al jugar atrapaderas", "Aprender otro idioma", "Al agregar dinero a la alcancia"],
    }, {
      pregunta: "¿10-5?",
      respuesta: "5",
      distractores: ["8", "4", "no existe"],
    }, {
      pregunta: "¿5-5?",
      respuesta: "0",
      distractores: ["1", "2", "no existe"],
    }, {
      pregunta: "¿Cuanto es 100-50?",
      respuesta: "50",
      distractores: ["46", "47", "no existe"],
    }, {
      pregunta: "¿Cuanto es 65-32?",
      respuesta: "33",
      distractores: ["30", "32", "no existe"],
    }, {
      pregunta: "¿Cuanto es 94-31?",
      respuesta: "63",
      distractores: ["50", "47", "no existe"],
    }, {
      pregunta: "¿Cuanto es 35-21?",
      respuesta: "14",
      distractores: ["10", "15", "no existe"],
    }
    
  ];