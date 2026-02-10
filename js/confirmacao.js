var form = document.getElementById("form-confirmacao");
var status = document.getElementById("mensagem-status");

var URL_BACKEND =
  "https://script.google.com/macros/s/AKfycbyLiEx4oaYcxoaweXgga4erKZerYrh993vdq9mzgFjKrr86FK3Qilo4IE0tm3AtlfQDnw/exec";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value;
  var presenca = document.getElementById("presenca").value;

  if (!nome || !presenca) return;

  status.textContent = "Enviando confirmação...";

  fetch(
    URL_BACKEND +
      "?nome=" + encodeURIComponent(nome) +
      "&presenca=" + encodeURIComponent(presenca)
  )
    .then(function () {
      status.textContent = "Confirmação enviada com sucesso";
      form.reset();
    })
    .catch(function () {
      status.textContent = "Erro ao enviar confirmação";
    });
});