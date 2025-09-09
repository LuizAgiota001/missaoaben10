const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " o que você faz?",
        alternativas: [
            {
                texto: "vai averiguar",
                afirmacao: "você encontrou um relógio espacial "
            },
            {
                texto: "você ignora e segue em frente",
                afirmacao: "um androide espacial aparece e começa exterminar o local na procura dessa coisa"
            }
        ]
    },
    {
        enunciado: "mexendo nele você descobre que consegue se transformar em espécies de aliens",
        alternativas: [
            {
                texto: "você descobre mais coisas",
                afirmacao: "você se transforma em um alien de fogo"
            },
            {
                texto: "pede ajuda para seu avô",
                afirmacao: "Seu avõ reconheceu, mas no momento tentou ajudar a retirar  do pulso"
            }
        ]
    },
    {
        enunciado:"após mexer com mais detalhe um androide captou você e  veio na sua direção",
        alternativas: [
            {
                texto: "você escolheu uns dos aliens na seleção e se transformou em um alien",
                afirmacao: "você começa a batalhar com o androide"
            },
            {
                texto: "você, seu avô e sua prima fogem no local para um lugar mais seguro",
                afirmacao: "o androide achou vocês, mas conseguiram fugir"
            }
        ]
    },
    {
        enunciado: "após uma longa batalha você conseguiu eliminar, porém um ser apareceu a procura do relógio",
        alternativas: [
            {
                texto: "você parte pra cima e começa uma nova batalha",
                afirmacao: "você ganha  com dificuldade e descobre mais coisas"
            },
            {
                texto: "você cede o relógio para ele",
                afirmacao: "ele extermina a humanidade e conquista o universo, parabéns!"
            }
        ]
    },
    {
        enunciado: "após a batalha outro ser aparece",
        alternativas: [
            {
                texto: "você parte pra cima dele",
                afirmacao: "era o criador do relógio e desabilita o relógio com facilidade"
            },
            {
                texto:  "você espera ","
                afirmacao: "era o criador do relógio, ele fala do propósito dele,fazendo assim que deixe ficar  com o relógio, assim virando um dos ser mais forte do universo"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();