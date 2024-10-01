function calcular() {
    const quantidadeVitorias = parseInt(
      document.getElementById('quantidadeVitorias').value,
    );
    const quantidadeDerrotas = parseInt(
      document.getElementById('quantidadeDerrotas').value,
    );
  
    const { saldoVitorias, nivel } = calcularRanked(
      quantidadeVitorias,
      quantidadeDerrotas,
    );
  
    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.innerHTML = `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
  }
  
  function calcularRanked(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }
  
    return { saldoVitorias, nivel };
  }

  function limpar() {
    document.getElementById('quantidadeVitorias').value = '';
    document.getElementById('quantidadeDerrotas').value = '';
    document.getElementById('resultadoTexto').innerText = '';
}

function calcular() {
  const vitorias = parseInt(document.getElementById('quantidadeVitorias').value);
  const derrotas = parseInt(document.getElementById('quantidadeDerrotas').value);
  const resultadoTexto = document.getElementById('resultadoTexto');

  if (isNaN(vitorias) || isNaN(derrotas)) {
      resultadoTexto.innerText = 'Por favor, insira valores válidos.';
      return;
  }

  const totalPartidas = vitorias + derrotas;
  let nivel = '';

  if (totalPartidas <= 10) nivel = 'Ferro';
  else if (totalPartidas <= 20) nivel = 'Bronze';
  else if (totalPartidas <= 50) nivel = 'Prata';
  else if (totalPartidas <= 80) nivel = 'Ouro';
  else if (totalPartidas <= 90) nivel = 'Diamante';
  else if (totalPartidas <= 100) nivel = 'Lendário';
  else nivel = 'Imortal';

  resultadoTexto.innerText = `Nível: ${nivel}`;
}

function limpar() {
  document.getElementById('quantidadeVitorias').value = '';
  document.getElementById('quantidadeDerrotas').value = '';
  document.getElementById('resultadoTexto').innerText = '';
}
