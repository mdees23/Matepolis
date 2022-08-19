function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿635+964?",
      respuesta: "1599",
      distractores: ["1600", "1700", "no existe"],
    }, {
      pregunta: "¿359+642?",
      respuesta: "1001",
      distractores: ["1000", "1002", "no existe"],
    }, {
      pregunta: "¿956+345?",
      respuesta: "1301",
      distractores: ["1300", "1304", "no existe"],
    }, {
      pregunta: "¿999+999?",
      respuesta: "1998",
      distractores: ["1999", "2000", "no existe"],
    }, {
      pregunta: "¿963+951?",
      respuesta: "1914",
      distractores: ["1915", "200", "no existe"],
    }, {
      pregunta: "¿753+357?",
      respuesta: "1110",
      distractores: ["1120", "1200", "no existe"],
    }, {
      pregunta: "¿862+486?",
      respuesta: "1348",
      distractores: ["1350", "1349", "no existe"],
    }, {
      pregunta: "¿579+297?",
      respuesta: "876",
      distractores: ["875", "850", "no existe"],
    }, {
      pregunta: "¿536+617?",
      respuesta: "1153",
      distractores: ["1160", "1420", "no existe"],
    }, {
      pregunta: "¿123+987?",
      respuesta: "1110",
      distractores: ["1120", "2010", "no existe"],
    },
  ];