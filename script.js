let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#campo-busca");
let secaoIntro = document.querySelector("#secao-intro");
let dados = [];

// Carrega os dados do JSON assim que a página é aberta
window.addEventListener("DOMContentLoaded", async () => {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
});

async function iniciarBusca() {
    const termoBuscado = campoBusca.value.toLowerCase();

    if (termoBuscado === "") {
        cardContainer.innerHTML = "";
        secaoIntro.style.display = "block"; // Mostra a seção de introdução novamente
        return;
    }

    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBuscado)
    );

    secaoIntro.style.display = "none"; // Esconde a seção de introdução
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = "";
    for (let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}