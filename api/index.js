// importa o express
const express = require("express")

// cria o servidor
const app = express()



// endpoint raiz
app.get("/", (req, res) => {
    res.send("API funcionando 🚀")
})



// endpoint random
app.get("/random", (req, res) => {

    // número aleatório entre 1 e 100
    const numero = Math.floor(Math.random() * 100) + 1

    res.send("Número aleatório: " + numero)

})



// endpoint dado
app.get("/dado", (req, res) => {

    // número entre 1 e 6
    const numero = Math.floor(Math.random() * 6) + 1

    res.send("Dado: " + numero)

})



// vetor com citações
const citacoes = [

{autor:"Albert Einstein", citacao:"A imaginação é mais importante que o conhecimento"},
{autor:"Isaac Newton", citacao:"Se vi mais longe foi por estar sobre ombros de gigantes"},
{autor:"Galileu Galilei", citacao:"Eppur si muove"},
{autor:"Nikola Tesla", citacao:"O futuro pertence aos que acreditam em seus sonhos"},
{autor:"Marie Curie", citacao:"Nada na vida deve ser temido, apenas compreendido"},
{autor:"Charles Darwin", citacao:"Não é o mais forte que sobrevive"},
{autor:"Stephen Hawking", citacao:"A inteligência é a capacidade de se adaptar"},
{autor:"Carl Sagan", citacao:"Somos feitos de poeira das estrelas"},
{autor:"Richard Feynman", citacao:"A ciência é acreditar na ignorância dos especialistas"},
{autor:"Johannes Kepler", citacao:"A natureza ama simplicidade"},
{autor:"Louis Pasteur", citacao:"A sorte favorece a mente preparada"},
{autor:"Max Planck", citacao:"A ciência avança funeral a funeral"},
{autor:"Niels Bohr", citacao:"Prever é muito difícil"},
{autor:"Erwin Schrödinger", citacao:"A tarefa não é ver o invisível"},
{autor:"Alan Turing", citacao:"Máquinas podem pensar"},
{autor:"Katherine Johnson", citacao:"Gostava de aprender"},
{autor:"Rosalind Franklin", citacao:"A ciência e a vida cotidiana não podem ser separadas"},
{autor:"James Clerk Maxwell", citacao:"A matemática é a rainha da ciência"},
{autor:"Michael Faraday", citacao:"Nada é maravilhoso demais"},
{autor:"Enrico Fermi", citacao:"Onde estão todos?"},
{autor:"Paul Dirac", citacao:"A beleza é o critério da verdade"},
{autor:"Werner Heisenberg", citacao:"O que observamos não é a natureza em si"},
{autor:"Edwin Hubble", citacao:"O universo é maior do que imaginamos"},
{autor:"Jane Goodall", citacao:"O que fazemos faz diferença"},
{autor:"Tim Berners-Lee", citacao:"A web é para todos"},
{autor:"Ada Lovelace", citacao:"A máquina analítica pode compor música"},
{autor:"Grace Hopper", citacao:"A frase mais perigosa é sempre fizemos assim"},
{autor:"Donald Knuth", citacao:"Programas devem ser escritos para pessoas"},
{autor:"Linus Torvalds", citacao:"Fale é barato, mostre o código"},
{autor:"Steve Wozniak", citacao:"Nunca confie em um computador"}
]



// endpoint citacoes
app.get("/citacoes", (req, res) => {

    const aleatoria = citacoes[Math.floor(Math.random() * citacoes.length)]

    res.send(aleatoria)

})



module.exports = app