

function openGallery () {
	
	document.getElementById('gallery-popup').classList.remove('hidden');
    document.getElementById('gallery-popup').classList.add('show');
}

function closeGallery () {
	document.getElementById('gallery-popup').classList.remove('show');
    document.getElementById('gallery-popup').classList.add('hide');
	setTimeout(() => {
		document.getElementById('gallery-popup').classList.remove('hide');
		document.getElementById('gallery-popup').classList.add('hidden');
	  }, "150");
}



//quiz
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
    var acertos = 0;
    //contador para saber o número da pergunta

    //eventos click para cada botão resposta
    resposta1.addEventListener('click', () => {
      if(resposta1.innerHTML == respostas[i][respostaCerta[i]]){
        console.log("acertou");
        acertos += 1 ;
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
        acertos += 1 ;
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
        acertos += 1 ;
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

    if (i == perguntas.length) {
        console.log("fechar");
        console.log("acertos: " + acertos);
          setTimeout(() => {
            closePopup();
            for (let j = 0; j < perguntas.length; j++){
                document.getElementById(`bloco-${j}`).classList.remove("success-background");
                document.getElementById(`bloco-${j}`).classList.remove("fail-background");
            }
          }, "2000");
          
    }
}

function openQuiz() {
    i = 0;
	document.getElementById('quiz-popup').classList.remove('hidden');
    document.getElementById('quiz-popup').classList.add('show');
    pergunta.innerHTML = perguntas[0];
    resposta1.innerHTML = respostas[0][0];
    resposta2.innerHTML = respostas[0][1];
    resposta3.innerHTML = respostas[0][2];
}

function closePopup() {
    document.getElementById('quiz-popup').classList.remove('show');
    document.getElementById('quiz-popup').classList.add('hide');
	setTimeout(() => {
		document.getElementById('quiz-popup').classList.remove('hide');
		document.getElementById('quiz-popup').classList.add('hidden');
	  }, "250");
	
}

// codigo da resposta visual

// codigo caça ao tesouro

function openCacaTesouro () {
	i = 0;

	//mostra os elementos do popup caso estejam ocultos
	dica.style.display = "block";
	document.getElementById("senha-caca-tesouro-wrapper").style.display = "block";
	document.getElementById("prox-dica").innerHTML = "Próxima dica";
	document.getElementById("falha").style.display = "block";
	document.getElementById("pedido").style.display = "none";

	//mostra o popup e inicializa a dica
	dica.innerHTML = dicas[0];
	document.getElementById('caca-tesouro-popup').classList.remove('hidden');
	document.getElementById('caca-tesouro-popup').classList.add('show');
}

const dicas = ["1. Sob o leito onde o corpo descansa encontra-se o que a mente anseia", "2. Do trabalho remoto, a ferramenta. Ela esconde a pista que encontrar você tenta"]
const senhas = ["você é", "o meu coração"];

var dica = document.getElementById("dica");

function proximaDica () {
	console.log(document.getElementById("senha-caca-tesouro").value);
	if (i < 2) {
		if(document.getElementById("senha-caca-tesouro").value == senhas[i]){
			i = i + 1;
			dica.innerHTML = dicas[i];
			document.getElementById("senha-caca-tesouro").value = "";
		} else {
			document.getElementById("senha-caca-tesouro").value = "";
			document.getElementById("falha").classList.toggle("display-none");
			setTimeout(() => {
				document.getElementById("falha").classList.toggle("display-none");
			}, "2000");
		}
	}

	if (i == 3) {
		document.getElementById('caca-tesouro-popup').classList.remove('show');
		document.getElementById('caca-tesouro-popup').classList.add('hide');
		setTimeout(() => {
			document.getElementById('caca-tesouro-popup').classList.remove('hide');
			document.getElementById('caca-tesouro-popup').classList.add('hidden');
		}, "250");
	}

	if (i == 2) {
		//oculta os elementos que não devem aparecer
		i = 3;
		dica.style.display = "none";
		document.getElementById("senha-caca-tesouro-wrapper").style.display = "none";
		document.getElementById("prox-dica").innerHTML = "SIM!";
		document.getElementById("falha").style.display = "none";
		// mostrar o pedido
		document.getElementById("pedido").style.display = "block";
	}

}
