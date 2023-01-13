const email = document.querySelector("#");
const senha = document.querySelector("#");

async function login(){
    console.log("foi")
    try {
        const usuario = {
            email: emailCadastro.value,
            senha: senha1Cadastro.value
        }
        const resp = await fetch('https://acompi-back-end-la29.onrender.com/login.html', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        if (resp.status === 201) {
            console.log('certo')
        } else {
            console.log('erro');
        }
    } catch (error) {
        console.error(error.message)
}}
