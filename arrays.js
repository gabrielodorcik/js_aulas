

let a1 = "Bia"
let a2 = "Jennifer"
let a3 = "Vitoria"
let a4 = "Murilo"


let alunos = ["Bia", "Jennifer", "Vitoria", "Murillo"]


//console.log(alunos[1])

//console.log('tamanho do array de alunos: ' + alunos.length)
//console.log('o último elemento do array de alunos: ' + alunos[alunos.length - 1])

for (let i = 0; i < alunos.length; i++) {
    //console.log(`posição ${i} do array de alunos contém o nome ${alunos[i]}`)

}
//console.log('utilizando o forEach()')
//alunos.forEach(mostrarNome)


 
//Atividade 01

console.log("Atividade 1; Numeros Positivos")

// definindo a função
function filtrarPositivos(array){
  return array.filter(checkPositive)
}
// definindo a callback para o filtro
function checkPositive(number) {
  return number >= 0;
}

// testar
const arrayTeste = [32, -33, 16, -40, 33, -22, 15, -10, 39, -50];
console.log(filtrarPositivos(arrayTeste))

const arrayTeste2 = [33, -33, 160, -40, 335, -22, 157, -10, 398, -50];
console.log(filtrarPositivos(arrayTeste2))



function mostrarNome(elemento){
    console.log(elemento)
}

//atividade 02

console.log("Atividade 2; Uma Moradia")

let moradia = {
  tipo: "Casa",
  quarto: 2,
  alugada: true,
  endereco: {
    rua: "Rua São João",
    num: 123,
    bairro: "Jardins",
    cep: "1234567"
  }
}

console.log(`Hoje iremos ver um anuncio de uma residência na rua ${moradia.endereco.rua}, num ${moradia.endereco.num}, bairro ${moradia.endereco.bairro} é do tipo ${moradia.tipo} e possui ${moradia.quarto} quarto(s) grandes`)


if (moradia.alugada == true){
  console.log("Está residência está alugada no momento.")
} else {
  console.log("Está residência não está alugada.")
}
//atividade 03


console.log("Atividade 3; Lista de Moradias Disponíveis")

// definições
function listarDisponiveis(moradias) {
  return moradias.filter(estaLiberada) // um array já filtrado
}

function estaLiberada(moradia){
  return moradia.alugada == false
}

// teste
let moradia1 = {
  tipo: "Casa",
  quarto: 2,
  alugada: false,
  endereco: {
    rua: "Rua 30 de fevereiro",
    num: 1001,
    bairro: "Alphaville",
    cep: "12345672"
  }
}

let moradia2 = {
  tipo: "Apto",
  quarto: 3,
  alugada: true,
  endereco: {
    rua: "Rua São João",
    num: 300,
    bairro: "Jardins",
    cep: "11987340"
  }
}

let moradia3 = {
  tipo: "Apto",
  quarto: 2,
  alugada: false,
  endereco: {
    rua: "Av. Doutor Candido Aurélio",
    num: 27,
    bairro: "Cambui Paulista",
    cep: "13032567"
  }
}

moradiasTeste = [moradia1, moradia2, moradia3]

console.log(listarDisponiveis(moradiasTeste))
