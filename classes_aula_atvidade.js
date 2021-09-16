

console.log("Atividade 01")

class Morada {

    constructor( id, tipo, quarto, alugada, endereco ) {
        this.id = id;
        this.tipo = tipo;
        this.quarto = quarto;
        this.alugada = alugada;
        this.endereco = endereco;
    }
    // Método desalugar

    Desalocada() {
         this.alugada = false;
    
    }
    
 

    Alocada() {
        this.alugada = true;
    
    }

    //metodo exibir
   Exibir()  {
       
  console.log( `Hoje iremos ver um anuncio de uma ${this.tipo}, com ${this.quarto} quartos, no endereço ${this.endereco}. Está alugada? ${this.alugada} `)
    }
}
let moradia = new Morada( "casa", "3", true , "Rua Arando Coelho, 12")

console.log(moradia.Exibir) 
console.log('')
console.log("atividade 02")

let moradia1 = new Morada( "1", "casa", "3", true , "Rua Alfredo Alcantara, 1356")
let moradia2 = new Morada( "2", "Apartamento", "4", false , "Av. Brasil, 8145")
let moradia3 = new Morada( "3", "casa", "2", false , "Rua Ipiranga, 213")
let moradia4 = new Morada( "4", "Apartamento", "2", false , "Rua Dionisio de Oliveira, 265")
let moradia5 = new Morada( "5", "casa", "3", true , "Av. Jorge Burjen, 378")

let objMoradias = []
objMoradias.push(moradia1,moradia2,moradia3,moradia4,moradia5 )
console.log('')


//testando Desalocada

console.log(moradia1)
moradia1.Desalocada(moradia1.alugada)
console.log('Desalocada')

console.log(moradia1)

console.log('')

console.log(moradia2)
moradia2.Alocada(moradia2.alugada)
console.log('Alocada')
console.log(moradia2)

console.log('exibir')
moradia2.Exibir()
console.log('')

console.log('Atividade 03')
console.log('')

let disponiveis = objMoradias.filter(listarDisponiveis)

function listarDisponiveis(moradia){
    return moradia.alugada == false
}
 
//testando disponiveis

console.log('listar disponíveis')
console.log(disponiveis)
console.log('')

console.log('Atividade 04')
console.log('')

console.log('exibir disponíveis')
objMoradias.forEach (dispararExibir)

function dispararExibir(moradias) {

  
    moradias.Exibir()
}