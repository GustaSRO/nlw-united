# HTML *hipertext Markup Language*
-Tag
-Atributos







#CSS









#JavaScript
´´´js
//variaveis
const mensagem = "Oi, tudo bem?"
//tipos de dados
  //number
  //string
//função
alert(mensagem)
´´´

//objeto javascript
const participante = {
  nome: "Gustavo Sousa",
  email: "gsro@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

//array
let participantes = [
  {
  nome: "Gustavo Sousa",
  email: "gsro@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },

  //estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)


    //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
  `
  }