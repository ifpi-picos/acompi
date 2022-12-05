const divTurmas = document.querySelector('#turmas')

async function getTurmas () {
    const res = await fetch('http://localhost:3000/turmas');
    const turmas = await res.json();
    preencherTurmas(turmas);
}
function preencherTurmas (turmas) {
turmas.forEach(async turma => {
    const res = await fetch('http://localhost:3000/turmas/'+'108')
    const professor = await res.json()
    const novaTurmaHTML = '<div>\n<h1>Turma '+turma.id+'</h1>\n<p>Laboratório: '+turma.id_lab+'</p>\n<p>Professor: '+professor[0].nome+'</p>\n<p>Horário: '+turma.horario_inicio+'min às '+turma.horario_fim+'min</p>\n<p>Data: '+turma.data_turma+'</p>\n<a class="index" href="formulario-reserva-computador.html?turma='+turma.id+'">Entrar na turma</a>\n</div>'
    divTurmas.innerHTML = divTurmas.innerHTML + novaTurmaHTML
});
}
getTurmas()