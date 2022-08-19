function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [

    /*cambio de dificultad*/
    {
      pregunta: "¿Cuanto es 865-95?",
      respuesta: "770",
      distractores: ["780", "779", "no existe"],
    }, {
      pregunta: "¿Cuanto es 564-23?",
      respuesta: "541",
      distractores: ["540", "542", "no existe"],
    }, {
      pregunta: "¿Cuanto es 675-43?",
      respuesta: "632",
      distractores: ["630", "631", "no existe"],
    }, {
      pregunta: "¿Cuanto es 789-120?",
      respuesta: "669",
      distractores: ["670", "671", "no existe"],
    }, {
      pregunta: "¿Cuanto es 750-650?",
      respuesta: "100",
      distractores: ["99", "98", "no existe"],
    }, {
      pregunta: "¿Cuanto es 210-1?",
      respuesta: "209",
      distractores: ["100", "199", "no existe"],
    }, {
      pregunta: "¿Cuanto es 888-111?",
      respuesta: "777",
      distractores: ["666", "555", "no existe"],
    }, {
      pregunta: "¿Cuanto es 963-96?",
      respuesta: "863",
      distractores: ["3", "860", "no existe"],
    }, {
      pregunta: "¿Cuanto es 546-10?",
      respuesta: "536",
      distractores: ["540", "547", "no existe"],
    }, {
      pregunta: "¿Cuanto es 99-10?",
      respuesta: "89",
      distractores: ["100", "10", "no existe"],
    },
  ];