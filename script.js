const input = document.querySelector("#inputNome");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const btn = document.querySelector("#btnEnviar");
btn.addEventListener("click", () => {
  const dados = fazGet(`https://api.agify.io?name=${input.value}`);
  const pessoa = JSON.parse(dados);
  event.preventDefault();
  nome.innerHTML = `Nome: ${pessoa.name}`;
  idade.innerHTML = `Idade: ${pessoa.age}`;
});

function fazGet(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();

  return req.responseText;
}
