var URL_JSON = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSK3_FBL4m6Gd_b2s6zkE5ypJ_TCtRMYgcq5qZWaHXkoxbmatpumOzS0bMUsZCcu6Qdf8N94jFIjDea/pubhtml";

fetch(URL_JSON)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    var sim = 0;
    var nao = 0;

    var lista = document.getElementById("lista");

    data.forEach(function (item) {
      if (item.presenca === "Sim") {
        sim = sim + 1;
      } else {
        nao = nao + 1;
      }

      var li = document.createElement("li");
      li.textContent = item.nome + " — " + item.presenca;
      lista.appendChild(li);
    });

    document.getElementById("resumo").textContent =
      "Vão: " + sim + " | Não vão: " + nao;
  });