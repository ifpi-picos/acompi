const cancelar = document.querySelector('#cancelar')
const criar = document.querySelector('#botaoCriar')

cancelar.addEventListener('click', function(){
    window.location.assign("http://127.0.0.1:5500/autenticacao/cadastro.html");
})
function redireciona(){
    if(a === 1){
        location.href="http://127.0.0.1:5500/autenticacao/cadastro.html"
    }    
    const dataI = document.querySelector('#campoDataInicio')
    const dataF = document.querySelector('#campoDataFim')
    const laboratorios = document.querySelector('#laboratorios').value
    console.log (laboratorios)
    console.log (dataI.value)
    console.log (dataF.value)
    if(laboratorios != '' && dataI.value != ''){
        if(dataF.value != ''){
            var a = 1;
        }
    }
}