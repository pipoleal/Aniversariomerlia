document.addEventListener("DOMContentLoaded", () => {
    const quantidade = 6;

    for (let i = 0; i < quantidade; i++) {
        const sereia = document.createElement("img");
        sereia.src = "img/sereias.png";
        sereia.classList.add("sereia");

        const size = Math.random() * 120 + 80;
        sereia.style.width = size + "px";

        sereia.style.left = Math.random() * 100 + "vw";
        sereia.style.animationDuration = (Math.random() * 10 + 15) + "s";
        sereia.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(sereia);
    }
});