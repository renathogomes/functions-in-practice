// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  status = status === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${status}`)
  return status
}
console.log(ligarDesligar('desligado'));

// 2 - Crie a função circleArea, que calcule a área de um círculo. 

const circleArea = (raio) => {
  const valorDePi = Number.parseFloat(Math.PI.toFixed(2));
  const resultado = valorDePi * (raio ** 2);
  if (typeof raio === typeof valorDePi) {
    return `Essa é a área do círculo: ${resultado}`
  } else {
    return `O parâmetro radius deve ser um número`
  }
};

console.log(circleArea(10))

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (frase) => {
  let arrayDaFrase = frase.split(' ')
  let maiorPalavra = []
  for (let palavra of arrayDaFrase){
    if(palavra.length > maiorPalavra.length){
      maiorPalavra = palavra
    }
  }

  return maiorPalavra
};

console.log(longestWord('Eu estudo na Trybe com muita dedicação'))

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => { }),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => { }),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => { }),
};






