var URL_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSK3_FBL4m6Gd_b2s6zkE5ypJ_TCtRMYgcq5qZWaHXkoxbmatpumOzS0bMUsZCcu6Qdf8N94jFIjDea/pub?output=csv";

fetch(URL_CSV)
  .then(function (res) {
    return res.text();
  })
  .then(function (text) {
    var linhas = text.split("\n");
    linhas.shift(); // remove cabeçalho

    var sim = 0;
    var nao = 0;

    var lista = document.getElementById("lista");

    linhas.forEach(function (linha) {
      if (linha.trim() === "") return;

      var colunas = linha.split(",");
      var nome = colunas[0];
      var presenca = colunas[1];

      if (presenca && presenca.trim() === "Sim") {
        sim = sim + 1;
      } else {
        nao = nao + 1;
      }

      var li = document.createElement("li");
      li.textContent = nome + " — " + presenca;
      lista.appendChild(li);
    });

    document.getElementById("resumo").textContent =
      "Vão: " + sim + " | Não vão: " + nao;
  })
  .catch(function (erro) {
    console.log("Erro ao carregar planilha:", erro);
  });