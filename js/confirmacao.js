var form = document.getElementById("form-confirmacao");
var status = document.getElementById("mensagem-status");

var URL_BACKEND =
  "https://script.google.com/macros/s/AKfycbwTzSoFM3aVBm3LsFrEuBQjSG7If9ZP0pVLKF0ZHiJTwH6pw8SFCISlrOBhvjE93S7l/exechttps://script.google.com/macros/s/AKfycbzDbEraQjDQ9MtU3cHC-lS5NdzhMqIOTPJeIfMtNuMuZNi53ywBjTeL7IcMHy1dcK-D5g/exec";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value;
  var presenca = document.getElementById("presenca").value;

  if (!nome || !presenca) return;

  status.textContent = "Enviando confirmação...";

  var dados = new FormData();
  dados.append("nome", nome);
  dados.append("presenca", presenca);

  fetch(URL_BACKEND, {
    method: "POST",
    body: dados
  })
    .then(function () {
      status.textContent = "Confirmação enviada com sucesso 💖";
      form.reset();
    })
    .catch(function () {
      status.textContent = "Erro ao enviar confirmação 😢";
    });
});