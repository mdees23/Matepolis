function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [

 
    /*preguntas 3 sumandos*/ 
    {
      pregunta: "¿50+91+94?",
      respuesta: "235",
      distractores: ["234", "236", "no existe"],
    }, {
      pregunta: "¿90+40+39?",
      respuesta: "169",
      distractores: ["1", "2", "no existe"],
    }, {
      pregunta: "¿39+82+4?",
      respuesta: "125",
      distractores: ["124", "225", "no existe"],
    }, {
      pregunta: "¿65+48+35?",
      respuesta: "148",
      distractores: ["56", "150", "no existe"],
    }, {
      pregunta: "¿62+96+48?",
      respuesta: "206",
      distractores: ["205", "200", "no existe"],
    }, {
      pregunta: "¿6+38+4?",
      respuesta: "48",
      distractores: ["50", "49", "no existe"],
    }, {
      pregunta: "¿35+94+83?",
      respuesta: "212",
      distractores: ["210", "112", "no existe"],
    }, {
      pregunta: "¿66+66+66?",
      respuesta: "198",
      distractores: ["190", "199", "no existe"],
    }, {
      pregunta: "¿120+120?",
      respuesta: "240",
      distractores: ["250", "140", "no existe"],
    }, {
      pregunta: "¿1099+1?",
      respuesta: "1100",
      distractores: ["2000", "2100", "no existe"],
    },


  ];