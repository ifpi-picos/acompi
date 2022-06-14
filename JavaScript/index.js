//tela de cadastro
const senha1Cadastro = document.querySelector('#senha1Cadastro')
const senha2Cadastro = document.querySelector('#senha2Cadastro')
const nomeCadastro = document.querySelector('#nomeCadastro')
const emailCadastro = document.querySelector('#emailCadastro')

//quando clicar no botao cadastrar
//verificar se todos os campos do cadastro estao preenchidos
function validandoCamposCadastro() {
  if (nomeCadastro.value != '') {
    if (emailCadastro.value != '') {
      if (senha1Cadastro.value != '') {
        if (senha2Cadastro.value != '') {
          enviarMsgCadastro(
            nomeCadastro,
            emailCadastro,
            senha1Cadastro,
            senha2Cadastro
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
function enviarMsgCadastro(nome, email, senha1, senha2) {
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
  } else {
    alert('A senha de confirmação precisa ser igual a primeira senha!')
    senha1Cadastro.value = ''
    senha2Cadastro.value = ''
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

function enviarMsgValidacao() {
  if (codigoVerificacao.value != "") {
    alert(
      'Tudo certo!\nCodigo de Validação correto!  ' + codigoVerificacao.value
    )
  } else {
    alert('Digite o código no campo solicitado!')
    codigoVerificacao.style.boxShadow = "3px 3px 28px #ee6a6e";
    window.setTimeout(function () {
      codigoVerificacao.style.boxShadow = 'none';
    }, 4000);
  }
}

//fim da tela de verificacao de codigo

//---------------Tela de Login----------------//
const emailLogin = document.querySelector('#emailLogin')
const senhaLogin = document.querySelector('#senhaLogin')

function enviarMensagemLogin() {
  // if ()
  alert('Alert tudo certo! \n Email: ' + emailLogin.value + '; Senha: ' + senhaLogin.value + '.')
}
//---------------fim tela de Login---------------//


// tela ver e cancelar reserva (aluno)
const btnCancelarReserva1 = document.querySelector(".btnCancelarReserva1")

function cancelarReserva() {
  const btnCancelarReserva1 = document.querySelector(".btnCancelarReserva1")[]
  if (btnCancelarReserva1.innerHTML == "Cancelar Reserva") {
    btnCancelarReserva1.style.backgroundColor = "#3da9fc"
    btnCancelarReserva1.innerHTML = "Reservar"
  } else {
    btnCancelarReserva1.style.backgroundColor = "#c54141"
    btnCancelarReserva1.innerHTML = "Cancelar Reserva";
  }
}
// fim tela ver e cancelar reserva (aluno)


//---------------Início da tela de Modificar senha---------------//
const emailModificarSenha = document.querySelector('#emailModificarSenha')
const senha1ModificarSenha = document.querySelector('#senha1ModificarSenha')
const senha2ModificarSenha = document.querySelector('#senha2ModificarSenha')

function enviarMensagemModificarSenha() {
  alert('Tudo certo!' + emailModificarSenha.value + senha1ModificarSenha.value + senha2ModificarSenha.value)
  console.log('Teste')
}

//---------------Início da tela de Modificar senha---------------//