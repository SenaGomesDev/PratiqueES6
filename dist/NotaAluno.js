"use strict";

var alunos = [{
  nome: "Ana",
  nota: 8
}, {
  nome: "Bruno",
  nota: 5
}, {
  nome: "Carlos",
  nota: 7
}, {
  nome: "Diana",
  nota: 4
}];
var AlunosAprovados = function AlunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = AlunosAprovados(alunos);
console.log("Alunos Aprovados:", alunosAprovados);