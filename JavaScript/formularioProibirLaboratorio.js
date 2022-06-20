const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')
var a = 0
cancelar.addEventListener('click', function(){
    window.location.assign("http://127.0.0.1:5500/autenticacao/cadastro.html");
})
function submitForm(event){
    event.preventDefault(); 
    alert('dados enviados com sucesso')
    window.location.assign("http://127.0.0.1:5500/autenticacao/cadastro.html")
}