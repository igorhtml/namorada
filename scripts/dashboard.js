const perguntas = ["Qual é minha cor favorita?", "Onde nos vimos pela primeira vez?", "Quanto eu calço?"];
    const respostas = [
        ["azul", "vermelho", "preto"],
        ["Luciano Feijão", "Shopping", "Arco"],
        ["41", "42", "43"]
    ];
    const respostaCerta = [0, 1, 2];


    //criar as variáveis contendo o objeto do html
    var pergunta = document.getElementById("pergunta");
    var resposta1 = document.getElementById("resposta-1");
    var resposta2 = document.getElementById("resposta-2");
    var resposta3 = document.getElementById("resposta-3");
   
    var i = 0;
    //contador para saber o número da pergunta

    //eventos click para cada botão resposta
    resposta1.addEventListener('click', () => {
      if(resposta1.innerHTML == respostas[i][respostaCerta[i]]){
        console.log("acertou");
        document.getElementById(`bloco-${i}`).classList.add("success-background");
      } else {
        console.log("errou");
        document.getElementById(`bloco-${i}`).classList.add("fail-background");
      }
      mudaPergunta();
    });

    resposta2.addEventListener('click', () => {
      if(resposta2.innerHTML == respostas[i][respostaCerta[i]]){
        console.log("acertou");
        document.getElementById(`bloco-${i}`).classList.add("success-background");
      } else {
        console.log("errou");
        document.getElementById(`bloco-${i}`).classList.add("fail-background");
      }
      mudaPergunta();
    });

    resposta3.addEventListener('click', () => {
      if(resposta3.innerHTML == respostas[i][respostaCerta[i]]){
        console.log("acertou");
        document.getElementById(`bloco-${i}`).classList.add("success-background");
      } else {
        console.log("errou");
        document.getElementById(`bloco-${i}`).classList.add("fail-background");
      }
      mudaPergunta();
    });
    

function mudaPergunta () {
    i = i + 1;
    console.log(i);
    if ((perguntas.length) > i){
        pergunta.innerHTML = perguntas[i];
        resposta1.innerHTML = respostas[i][0];
        resposta2.innerHTML = respostas[i][1];
        resposta3.innerHTML = respostas[i][2];
    }  

    if (i == 3) {

        console.log("fechar");
          setTimeout(() => {
            closePopup();
          }, "3000");
          
    }
}

function openQuiz() {
    i = 0;
    console.log(i);
    console.log(perguntas.length);
    document.getElementById('quiz-popup').style.display = 'flex';
    pergunta.innerHTML = perguntas[0];
    resposta1.innerHTML = respostas[0][0];
    resposta2.innerHTML = respostas[0][1];
    resposta3.innerHTML = respostas[0][2];
}

function closePopup() {
    document.getElementById('quiz-popup').style.display = 'none';
}

// codigo da resposta visual
