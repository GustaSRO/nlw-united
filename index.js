let participantes = [
  {
  nome: "Gustavo Sousa",
  email: "gsro@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
  nome: "Eduardo Sousa",
  email: "Eduo@gmail.com",
  dataInscricao: new Date(2024, 2, 5, 19, 20),
  dataCheckIn: new Date(2024, 2, 30, 22, 00)
  },
  {
  nome: "Eduarda damaso",
  email: "Duda@gmail.com",
  dataInscricao: new Date(2024, 3, 2, 19, 20),
  dataCheckIn: new Date(2024, 3, 5, 22, 00)
  },
  {
  nome: "Virginia Sousa",
  email: "Vivi@gmail.com",
  dataInscricao: new Date(2024, 2, 2, 19, 20),
  dataCheckIn: new Date(2024, 2, 15, 22, 00)
  },
  {
  nome: "Roberto Rocha",
  email: "Robo@gmail.com",
  dataInscricao: new Date(2024, 2, 20, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
  nome: "Rosa Rocha",
  email: "Rosa@gmail.com",
  dataInscricao: new Date(2024, 2, 21, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
  nome: "Edivaldo Barreto",
  email: "ediB@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
  nome: "Ruan Rocha",
  email: "Ruan@gmail.com",
  dataInscricao: new Date(2024, 2,15, 19, 20),
  dataCheckIn: null
  },
  {
  nome: "Poly Sousa",
  email: "Poly@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: null
  },
  {
  nome: "Gamora Sousa",
  email: "gamora@gmail.com",
  dataInscricao: new Date(2024, 2, 1, 19, 20),
  dataCheckIn: new Date(2024, 2, 10, 22, 00)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
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
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
        </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    //faça alguma coisa
  }
  // substituir informação do HTML
  document.
  querySelector(`tbody`)
  .innerHTML= output
} 

atualizarLista(participantes)


const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscrição: new Date(),
    dataCheckIn: null
  }
  const participanteExiste = participantes.find((p) => p.email == participante.email
   )
  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}


const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in'
  if(confirm(mensagemConfirmacao) == false){
    return
  } 

  //encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email)
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  //atualizar a lista de participantes
  atualizarLista(participantes)
}