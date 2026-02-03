const form = document.getElementById("form-confirmacao");
const status = document.getElementById("mensagem-status");

const URL_BACKEND = "https://script.google.com/macros/s/AKfycbzDbEraQjDQ9MtU3cHC-lS5NdzhMqIOTPJeIfMtNuMuZNi53ywBjTeL7IcMHy1dcK-D5g/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const presenca = document.getElementById("presenca").value;

  if (!nome || !presenca) return;

  status.textContent = "Enviando confirmação...";

  try {
    await fetch(URL_BACKEND, {
      method: "POST",
      body: JSON.stringify({ nome, presenca }),
    });

    status.textContent = "Confirmação enviada com sucesso 💖";
    form.reset();
  } catch {
    status.textContent = "Erro ao enviar confirmação 😢";
  }
});