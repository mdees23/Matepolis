function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuanto es 976-543?",
      respuesta: "433",
      distractores: ["440", "439", "no existe"],
    }, {
      pregunta: "¿Cuanto es 789-325?",
      respuesta: "461",
      distractores: ["460", "452", "no existe"],
    }, {
      pregunta: "¿Cuanto es 7899-653?",
      respuesta: "7246",
      distractores: ["7252", "4572", "no existe"],
    }, {
      pregunta: "¿Cuanto es 695-123?",
      respuesta: "572",
      distractores: ["570", "680", "no existe"],
    }, {
      pregunta: "¿Cuanto es 864-653?",
      respuesta: "211",
      distractores: ["210", "219", "no existe"],
    }, {
      pregunta: "¿Cuanto es 999-132?",
      respuesta: "867",
      distractores: ["860", "870", "no existe"],
    }, {
      pregunta: "¿Cuanto es 658-345?",
      respuesta: "313",
      distractores: ["310", "311", "no existe"],
    }, {
      pregunta: "¿Cuanto es 951-753?",
      respuesta: "198",
      distractores: ["200", "199", "no existe"],
    }, {
      pregunta: "¿Cuanto es 652-316?",
      respuesta: "338",
      distractores: ["340", "339", "no existe"],
    }, {
      pregunta: "¿Cuanto es 5687-4653?",
      respuesta: "1034",
      distractores: ["1030", "1037", "no existe"],
    },
  ];