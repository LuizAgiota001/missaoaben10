const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enuciado: Você faz o que
        alternativas: [ 
            { 
            texto: "alternativa",
            afirmacao: "afirmação"
            },
            {
            texto: "alternativa",
            afirmacao: "afirmação"
            },
        ]
    },
   
    {
        enuciado: Você faz o que
        alternativas: [ 
            { 
            texto: "alternativa",
            afirmacao: "afirmação"
            },
            {
            texto: "alternativa",
            afirmacao: "afirmação"
            },
        ]
    },
   
    {
        enuciado: Você faz o que
        alternativas: [ 
            { 
            texto: "alternativa",
            afirmacao: "afirmação"
            },
            {
            texto: "alternativa",
            afirmacao: "afirmação"
            },
        ]
    },
   
    {
        enuciado: Você faz o que
        alternativas: [ 
            { 
            texto: "alternativa",
            afirmacao: "afirmação"
            },
            {
            texto: "alternativa",
            afirmacao: "afirmação"
            },
        ]
    },
   
let atual =0;
let perguntaATual;

function mostraPergunta () {
    perguntaAtual = pergunta [atual];
    caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();