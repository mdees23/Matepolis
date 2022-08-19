function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    /*preguntas faciles*/ 
    {
      pregunta: "¿Cuanto es 13+15?",
      ayuda: "suma 10 + 10 y  3+5 y junta los resultados",
      respuesta: "28",
      distractores: ["26", "30", "29"],
    },
    {
      pregunta: "¿Cuanto es 57+36?",
      ayuda: "Sumale 13 a 80",
      respuesta: "93",
      distractores: ["90", "97", "94"],
    },
    {
      pregunta: "¿La siguiente operacion es correcta? 50+50=100",
      respuesta: "Si",
      distractores: ["No", "Probablemente no", "No lo se"],
    },
    {
      pregunta: "¿Para que nos sirve sumar?",
      respuesta: "Nos sirve en la vida diaría",
      distractores: ["Para satisfacer a nuestros padres", "Para nada", "Para pasar el año"],
    },
    {
      pregunta: "¿0+0?",
      respuesta: "0",
      distractores: ["1", "2", "no existe"],
    },
    {
      pregunta: "¿5+7?",
      respuesta: "12",
      distractores: ["10", "13", "11"],
    },
    {
      pregunta: "¿0+8+1?",
      respuesta: "9",
      distractores: ["10", "8", "no existe"],
    },
    {
      pregunta: "¿10+10?",
      respuesta: "20",
      distractores: ["19", "21", "no existe"],
    },
    {
      pregunta: "¿15+80?",
      respuesta: "100",
      distractores: ["200", "300", "no existe"],
    },
    {
      pregunta: "¿125+64?",
      respuesta: "189",
      distractores: ["190", "910", "no existe"],
    },
    
  ];