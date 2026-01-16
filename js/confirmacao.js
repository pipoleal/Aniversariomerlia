document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-confirmacao");
  const status = document.getElementById("mensagem-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const presenca = document.getElementById("presenca").value;

    if (!nome || !presenca) {
      status.textContent = "Preencha seu nome e escolha uma opção 😊";
      status.style.color = "red";
      return;
    }

    status.textContent = "Presença registrada! Obrigado 💖";
    status.style.color = "green";

    form.reset();
  });
});
