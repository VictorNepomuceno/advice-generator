// // Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// // crie um formulário onde o usuário pode digitar o cep
// // e o endereço completo é retornado ao clicar em buscar

// const cepValue = document.getElementById("cep");
// const btn = document.getElementById("button");
// const resultadoCep = document.querySelector(".resultadoCep");

// btn.addEventListener("click", handleClick);

// function handleClick(event) {
//   event.preventDefault();
//   const cep = cepValue.value;
//   buscarCep(cep);
// }

// function buscarCep(cep) {
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then((r) => r.text())
//     .then((body) => {
//       resultadoCep.innerText = body;
//     });
// }

// // Utilizando a API https://blockchain.info/ticker
// // retorne no DOM o valor de compra da bitcoin and reais.
// // atualize este valor a cada 30s

// const btcValue = document.querySelector(".btcValue");

// function btcGet() {
//   fetch("https://blockchain.info/ticker")
//     .then((r) => r.json())
//     .then((btcJson) => {
//       btcValue.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
//     });
// }

// btcGet();

// // Utilizando a API https://api.chucknorris.io/jokes/random
// // retorne uma piada randomica do chucknorris, toda vez que
// // clicar em próxima

const btnAdvice = document.querySelector(".btn-advice");
const adviceValue = document.querySelector(".adviceApi");

function generateAdvice() {
  jokeAdviceApi();
}

function jokeAdviceApi() {
  fetch("https://api.adviceslip.com/advice")
    .then((resposta) => resposta.json())
    .then((adviceJson) => {
      adviceValue.innerText = adviceJson.slip.advice;
    });
}

btnAdvice.addEventListener("click", generateAdvice);
