const divTurmas = document.querySelector('#turmas')

async function getTurmas() {
    const token = JSON.parse(localStorage.getItem("token"))
    const professorID = token.id;
    const res = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/professor/' + professorID.toString());
    const professor = await res.json();
    preencherTurmas(professor[0].turmas);
}
function preencherTurmas(turmas) {
    function encodeInput (input)  {
        const encoded = document.createElement('div');
        encoded.innerText = input;
        return encoded.innerHTML;
      }
    turmas.forEach(async turma => {
        const res = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/professor/' + turma.id_professor.toString());
        const professor = await res.json();
        const nome_professor = encodeInput(professor[0].nome)
        const id_lab = encodeInput(turma.id_lab)
        const horario_i = encodeInput(turma.horario_inicio)
        const horario_f = encodeInput(turma.horario_fim )
        const data_turma = encodeInput(turma.data_turma)
        const novaTurmaHTML = '<div>\n<h1>Laboratório ' + id_lab + '</h1>\n<p>Professor: ' + nome_professor + '</p>\n<p>Horário: ' + horario_i + 'min às ' + horario_f + 'min</p>\n<p>Data: ' + data_turma + '</p>\n<a href="ver-remover-alunos-da-turma.html?turma=' + turma.id + '" class="index">Alunos</a>\n<a onclick="excluirTurma(' + turma.id + ')" class="index excluirTurma" id="excluirTurma">Excluir turma</a>\n</div>'
        divTurmas.innerHTML = divTurmas.innerHTML + novaTurmaHTML
    });
}
getTurmas()
const botaoExcluirTurma = document.querySelector('#excluirTurma')
async function excluirTurma(id) {
    try {
        const resposta = await fetch('https://acompi-back-end-lhbe.onrender.com/turmas/' + id.toString(), {
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