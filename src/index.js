let resultado = saldoRankeadas(2000, 1990)
console.log(resultado)

function saldoRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas
  let nivel = ""

  if (saldoVitorias < 0) {
    nivel = "Noob demais"
  } else if (saldoVitorias <= 10) {
    nivel = "Ferro"
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze"
  } else if (saldoVitorias <= 50) {
    nivel = "Prata"
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro"
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante"
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário"
  } else {
    nivel = "Imortal"
  }

  return `O Herói tem um saldo de ${saldoVitorias} vitórias, e está no nível de ${nivel}`
}
