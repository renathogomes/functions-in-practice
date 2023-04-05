// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
let status = 'ligado'
const ligarDesligar = (status) => ((status === 'ligado') ?
  (console.log(`O motor esta desligado`), `desligado`) :
  (console.log(`O motor esta ligado`), `ligado`));

console.log(ligarDesligar(status))
// 2 - Crie a função circleArea, que calcule a área de um círculo. 


// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.


// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => { }),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => { }),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => { }),
};






