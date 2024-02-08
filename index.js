const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de alto nível",
        "Um software de design gráfico",
        "Um sistema operacional",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição de valor",
        "Comparação de valor e tipo",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 5;",
        "variável x = 5;",
        "x = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle utilizada para executar repetidamente um bloco de código em JavaScript?",
      respostas: [
        "if-else",
        "while",
        "switch",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto que contém um bloco de código",
        "Um operador matemático",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona vários elementos de uma página da web",
        "Seleciona um elemento de uma página da web",
        "Executa uma consulta SQL em um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comparar dois valores em JavaScript?",
      respostas: [
        "==",
        "!=",
        "===",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
      respostas: [
        "6",
        "33",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'push()' em JavaScript?",
      respostas: [
        "Remover um elemento de uma array",
        "Adicionar um elemento ao final de uma array",
        "Ordenar uma array",
      ],
      correta: 1
    },
  ];
  // buscar elemento HTML
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  // adicionar nova variável
  const corretas = new Set()
  // somar o total de perguntas de 1 a 10
  const totalDePerguntas = perguntas.length
  // substituir o total pelo total de acertos
  const mostrarTotal = document.querySelector('#acertos span')
  // mostrar quantas acertou do total de perguntas
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    // mostrar as 3 respostas de cada pergunta
    for(let resposta of item.respostas) {
      // clonar todas as respostas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // buscar as respostas de cada pergunta
      dt.querySelector('span').textContent = resposta
      // selecionar uma resposta para cada pergunta
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      // guardar o valor/value de cada resposta/0,1,2 para cada pergunta
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //comparar value e correta, para indicar a resposta certa  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        // deletar item e somar apenas os corretos
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        // mostrar quantas acertou do total de perguntas
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // adicionar um filho
      quizItem.querySelector('dl').appendChild(dt)
   }
  
   // remover Resposta A
   quizItem.querySelector('dl dt').remove()
  
  
   // coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }
  