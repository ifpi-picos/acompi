const divTurmas = document.querySelector('#turmas')

async function getTurmas() {
    const professorID = 16;
    const res = await fetch('https://acompi-back-end-la29.onrender.com/turmas/professor/' + professorID.toString());
    const professor = await res.json();
    preencherTurmas(professor[0].turmas);
}
function preencherTurmas(turmas) {
    turmas.forEach(async turma => {
        const res = await fetch('https://acompi-back-end-la29.onrender.com/turmas/' + turma.id_professor.toString());
        const professor = await res.json();
        const novaTurmaHTML = '<div>\n<h1>Laboratório ' + turma.id_lab + '</h1>\n<p>Professor: ' + professor[0].nome + '</p>\n<p>Horário: ' + turma.horario_inicio + 'min às ' + turma.horario_fim + 'min</p>\n<p>Data: ' + turma.data_turma + '</p>\n<a href="ver-remover-alunos-da-turma.html?turma=' + turma.id + '" class="index">Alunos</a>\n<a onclick="excluirTurma(' + turma.id + ')" class="index excluirTurma" id="excluirTurma">Excluir turma</a>\n</div>'
        divTurmas.innerHTML = divTurmas.innerHTML + novaTurmaHTML
    });
}
getTurmas()
const botaoExcluirTurma = document.querySelector('#excluirTurma')
async function excluirTurma(id) {
    try {
        const resposta = await fetch('https://acompi-back-end-la29.onrender.com/turmas/' + id.toString(), {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }); if (resposta.status === 200) {
            alert('Turma excluída')
            window.location.reload();
        };
    } catch (erro) {
        console.error(erro)
    }
}