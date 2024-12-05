const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Diana", nota: 4 },
];

const AlunosAprovados = (listaAlunos) => {
    return listaAlunos.filter((aluno) => aluno.nota >= 6);
};

const alunosAprovados = AlunosAprovados(alunos);
console.log("Alunos Aprovados:", alunosAprovados);
