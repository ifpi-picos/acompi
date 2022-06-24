// Wesley
//tela de cadastro
const senha1Cadastro = document.querySelector('#senha1Cadastro')
const senha2Cadastro = document.querySelector('#senha2Cadastro')
const nomeCadastro = document.querySelector('#nomeCadastro')
const emailCadastro = document.querySelector('#emailCadastro')

//quando clicar no botao cadastrar
//verificar se todos os campos do cadastro estao preenchidos
function validandoCamposCadastro(event) {
  if (nomeCadastro.value != '') {
    if (emailCadastro.value != '') {
      if (senha1Cadastro.value != '') {
        if (senha2Cadastro.value != '') {
          enviarMsgCadastro(
            nomeCadastro,
            emailCadastro,
            senha1Cadastro,
            senha2Cadastro, 
            event
          )
        } else {
          alert('Preencha senha de confirmação')
        }
      } else {
        alert('Preencha senha')
      }
    } else {
      alert('Preencha e-mail')
    }
  } else {
    alert('Preencha nome')
  }
}

//emitir alerta avisando se estar tudo certo ou se a senha1 esta diferente da senha2
function enviarMsgCadastro(nome, email, senha1, senha2, event) {
  if (validaSenha(senha1Cadastro, senha2Cadastro)) {
    
    alert(
      'Tudo certo!\nNome: ' +
      nomeCadastro.value +
      ';  E-mail: ' +
      emailCadastro.value +
      ';  Senha: ' +
      senha1Cadastro.value +
      '.'
    )
    // mudar a pagina
    submitForm(event)
  } else {
    alert('A senha de confirmação precisa ser igual a primeira senha!')
    senha1Cadastro.value = ''
    senha2Cadastro.value = ''
  }
}

//nao envia o formulario e navega entre as paginas mudando a url
function submitForm(event){
  event.preventDefault();
  console.log(window.location.href)
  if(window.location.href == "https://ifpi-picos.github.io/acompi-front-end/autenticacao/cadastro.html"){
    window.location.href = "https://ifpi-picos.github.io/acompi-front-end/autenticacao/validacao.html"
    } else if (window.location.href == "https://ifpi-picos.github.io/acompi-front-end/autenticacao/validacao.html"){
        window.location.href = "https://ifpi-picos.github.io/acompi-front-end/autenticacao/login.html"
    }else if(window.location.href == "https://ifpi-picos.github.io/acompi-front-end/autenticacao/login.html") {
        window.location.assign("https://ifpi-picos.github.io/acompi-front-end/usuarios/aluno/escolherTurma.html")
    }
 }


//verificar se a senha1 digitada esta igual a senha2
function validaSenha(senha1, senha2) {
  if (senha1Cadastro.value == senha2Cadastro.value) {
    return true
  } else {
    return false
  }
}

//fim da tela de cadastro

//tela de verificação de codigo

const codigoVerificacao = document.getElementById("codigoVerificacao")

function enviarMsgValidacao(event) {
  if (codigoVerificacao.value != "") {
    alert(
      'Tudo certo!\nCodigo de Validação correto!  ' + codigoVerificacao.value
    )
    // mudar a pagina
    submitForm(event)
  } else {
    alert('Digite o código no campo solicitado!')
    codigoVerificacao.style.boxShadow = "3px 3px 28px #ee6a6e";
    window.setTimeout(function () {
      codigoVerificacao.style.boxShadow = 'none';
    }, 4000);
  }
}

//fim da tela de verificacao de codigo

// tela ver e cancelar reserva (aluno)
// funçao para o butão mudar
function cancelarReserva(numeroParaIdentificarTurma) {
  const btnCancelarReserva = document.getElementsByClassName("btnCancelarReserva")[numeroParaIdentificarTurma]
  if (btnCancelarReserva.innerHTML == "Cancelar Reserva") {
    btnCancelarReserva.style.backgroundColor = "#3da9fc"
    btnCancelarReserva.innerHTML = "Reservar Turma"
  } else {
    btnCancelarReserva.style.backgroundColor = "#c54141"
    btnCancelarReserva.innerHTML = "Cancelar Reserva";
  }
}
// fim tela ver e cancelar reserva (aluno)

// tela de ver e controlar alunos (professor)

// função para dar cor a msg 'possui computador'
const possuiComp = document.querySelectorAll("h5.componentesDeAlunos")
possuiComp.forEach(function(possuirCom){
  if (possuirCom.innerHTML == "Possui Computador"){
    possuirCom.style.color = "green";
  }else{
    possuirCom.style.color = "red";
  }
}) 

// funçao para o butão mudar
function removerAluno(numeroParaIdentificarAluno) {
  const btnRemoverAluno = document.querySelectorAll("button.btnRemoverAluno")[numeroParaIdentificarAluno]
  if (btnRemoverAluno.innerHTML == "Remover Aluno") {
    btnRemoverAluno.style.backgroundColor = "#3da9fc"
    btnRemoverAluno.innerHTML = "Readicionar Aluno"
  } else {
    btnRemoverAluno.style.backgroundColor = "#c54141"
    btnRemoverAluno.innerHTML = "Remover Aluno";
  }
}

// tela de ver e controlar alunos (professor)

// fim Wesley

//---------------Tela de Login----------------//
const emailLogin = document.querySelector('#emailLogin')
const senhaLogin = document.querySelector('#senhaLogin')

function enviarMensagemLogin(event) {
  // if ()
  alert('Alert tudo certo! \n Email: ' + emailLogin.value + '; Senha: ' + senhaLogin.value + '.')
  submitForm(event)
}
//---------------fim tela de Login---------------//


//---------------Início da tela de Modificar senha---------------//
const emailModificarSenha = document.querySelector('#emailModificarSenha')
const senha1ModificarSenha = document.querySelector('#senha1ModificarSenha')
const senha2ModificarSenha = document.querySelector('#senha2ModificarSenha')

function enviarMensagemModificarSenha() {
  alert('Tudo certo!' + emailModificarSenha.value + senha1ModificarSenha.value + senha2ModificarSenha.value)
  console.log('Teste')
}

//---------------Início da tela de Modificar senha---------------//