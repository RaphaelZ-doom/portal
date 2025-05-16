// Series data
const series = [
    {
        id: 1,
        titulo: "Game of Thrones",
        descricao: "Uma luta épica pelo Trono de Ferro.",
        imagem: "imgs/GOT trabalho serie.jpg",
        dataCriacao: "2011",
        temporadas: 8,
        imdb: 9.2
    },
    {
        id: 2,
        titulo: "Dexter",
        descricao: "O serial killer que mata assassinos.",
        imagem: "imgs/dexter trabalho serie.jpg",
        dataCriacao: "2006",
        temporadas: 8,
        imdb: 8.7
    },
    {
        id: 3,
        titulo: "Mushoku Tensei",
        descricao: "Uma segunda chance em um mundo mágico.",
        imagem: "imgs/mushoko tensei trabalho serie.jpg",
        dataCriacao: "2021",
        temporadas: 2,
        imdb: 8.4
    },
    {
        id: 4,
        titulo: "Solo Leveling",
        descricao: "Um caçador fraco ganha poderes incríveis e enfrenta monstros em um mundo cheio de dungeons.",
        imagem: "imgs/solo leveling trabalho serie.png",
        dataCriacao: "2020",
        temporadas: 1,
        imdb: 8.8
    },
    {
        id: 5,
        titulo: "The Mentalist",
        descricao: "Um consultor com habilidades de observação excepcionais ajuda a resolver crimes.",
        imagem: "imgs/The mentalist trabalho serie.jpg",
        dataCriacao: "2008",
        temporadas: 7,
        imdb: 8.1
    }
];

let destaqueIndex = 0;

// Destaque Section
function criarDestaque() {
    const destaqueConteudo = document.getElementById("destaque-conteudo");
    atualizarDestaque(destaqueConteudo);

    document.querySelector(".anterior").addEventListener("click", () => {
        destaqueIndex = (destaqueIndex - 1 + series.length) % series.length;
        atualizarDestaque(destaqueConteudo);
    });

    document.querySelector(".proximo").addEventListener("click", () => {
        destaqueIndex = (destaqueIndex + 1) % series.length;
        atualizarDestaque(destaqueConteudo);
    });
}

function atualizarDestaque(conteudo) {
    const serie = series[destaqueIndex];
    conteudo.innerHTML = `
        <img src="${serie.imagem}" alt="${serie.titulo}">
        <h3>${serie.titulo}</h3>
        <p>${serie.descricao}</p>
    `;
    conteudo.addEventListener("click", () => {
        window.location.href = `detalhe.html?id=${serie.id}`;
    });
}

// Cards Section
function criarCards() {
    const container = document.getElementById("cards-container");

    series.forEach(serie => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        divCard.innerHTML = `
            <img src="${serie.imagem}" alt="${serie.titulo}">
            <h3>${serie.titulo}</h3>
            <p>${serie.descricao}</p>
        `;

        divCard.addEventListener("click", () => {
            window.location.href = `detalhe.html?id=${serie.id}`;
        });

        container.appendChild(divCard);
    });
}

// Detail Page Initialization
function carregarDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const serie = series.find(s => s.id === id);

    if (serie) {
        document.getElementById("detalhe-imagem").src = serie.imagem;
        document.getElementById("detalhe-titulo").textContent = serie.titulo;
        document.getElementById("detalhe-descricao").textContent = serie.descricao;
        document.getElementById("detalhe-data").textContent = serie.dataCriacao;
        document.getElementById("detalhe-temporadas").textContent = serie.temporadas;
        document.getElementById("detalhe-imdb").textContent = serie.imdb;
    }
}

// Initialize Sections
if (document.getElementById("destaque")) {
    criarDestaque();
    criarCards();
}

if (document.getElementById("detalhe-item")) {
    carregarDetalhes();
}