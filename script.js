let campoBusca = document.querySelector("#campo-busca");
let mainContainer = document.querySelector("main");
let secaoIntro = document.querySelector("#secao-intro");
let siteTitle = document.querySelector("#site-title");
let dados = [];

// Carrega os dados do JSON assim que a página é aberta
window.addEventListener("DOMContentLoaded", async () => {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
});

// Adiciona o evento de busca em tempo real no campo de input
campoBusca.addEventListener("input", iniciarBusca);

// Adiciona o evento de clique no título do site para resetar a página
siteTitle.addEventListener("click", () => {
    campoBusca.value = "";
    iniciarBusca(); // Executa a busca (que vai resetar a tela)
});

function iniciarBusca() {
    const termoBuscado = campoBusca.value.toLowerCase();

    if (termoBuscado === "") {
        // Limpa apenas os cards de resultados, preservando a seção de introdução
        const articles = mainContainer.querySelectorAll('article:not(#secao-intro article)');
        articles.forEach(article => article.remove());

        secaoIntro.style.display = "block"; 
        mainContainer.classList.remove("results-grid"); // Remove a classe da grade
        return;
    }

    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBuscado) || 
        dado.tags.some(tag => tag.toLowerCase().includes(termoBuscado))
    );

    secaoIntro.style.display = "none"; // Esconde a seção de introdução
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    // Limpa apenas os cards de resultados, preservando a seção de introdução
    const articles = mainContainer.querySelectorAll('article:not(#secao-intro article)');
    articles.forEach(article => article.remove());


    if (dados.length === 0) {
        mainContainer.classList.remove("results-grid");
        mainContainer.innerHTML = `<p class="no-results">Nenhum sistema operacional encontrado para "${campoBusca.value}".</p>`;
        return;
    }

    mainContainer.classList.add("results-grid"); 
    
    for (let dado of dados){
        let article = document.createElement("article");
    
        article.classList.add('card-fade-in');

        const tagsHtml = dado.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p><strong>Ano de Criação:</strong> ${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <div class="tags-container">${tagsHtml}</div>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        mainContainer.appendChild(article);
    }
}