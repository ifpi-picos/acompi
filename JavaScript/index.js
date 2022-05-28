//tela de cadastro
const senha1 = document.querySelector('#senha1')
const senha2 = document.querySelector('#senha2')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const btnCadastrar = document.querySelector('.btnPrincipal')

//clicar no botao 'cadastrar
btnCadastrar.addEventListener('click', validandoCampos)

//verificar se todos os campos do cadastro estao preenchidos
function validandoCampos() {
  if (nome.value != "") {
    if (email.value != "") {
      if (senha1.value != "") {
        if (senha2.value != "") {
            enviarMensagem(nome, email, senha1, senha2)
        } else {
          alert("Preencha senha de confirmação")
        }
      } else {
        alert("Preencha senha")
      }
    } else {
      alert("Preencha e-mail")
    }
  } else {
    alert("Preencha nome")
  }
}

//emitir alerta avisando se estar tudo certo ou se a senha1 esta diferente da senha2
function enviarMensagem(nome, email, senha1, senha2){
    if(validaSenha(senha1, senha2)){
        alert("Tudo certo!\nNome: "+ nome.value+ ";  E-mail: "+ email.value+ ";  Senha: "+ senha1.value+".")
    }else{
      alert("A senha de confirmação precisa ser igual a primeira senha!")
      senha1.value = ""
      senha2.value = ""
    }
}

//verificar se a senha1 digitada esta igual a senha2
function validaSenha(senha1, senha2){
    if(senha1.value == senha2.value){
        return true
    }else{
        return false
    }
}

//fim da tela de cadastro

//tela de verificação de codigo


//fim da tela de verificacao de codigo