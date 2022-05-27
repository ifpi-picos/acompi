const senha1 = document.querySelector("#senha1")
const senha2 = document.querySelector("#senha2")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const btnCadastrar = document.querySelector(".btnPrincipal")



btnCadastrar.addEventListener("click", confirmarSenha1IgualA2)

 function msgValidacao() {
    if( senhas(senha1.value, senha2.value) ){

        if (nome.value == "" || email.value == "" || senha2.value == "")
         alert("Preencha todos os campos obrigatórios!")
        }else{
         alert("Tudo certo!", nome.value, email.value)
    }
    
}

// function confirmarSenha1IgualA2(callback) {
//     if(senha1.value != senha2.value){
// alert('As senhas não conferem/nDigite a segunda senha igual a primeira senha')
// senha2.value = ""
// return false
// }else{
//     return true
//     callback()
// }
// }

function senhas(senha1, senha2){
    if(senha1 == senha2){
        return true
    }else{
        return false
    }
}