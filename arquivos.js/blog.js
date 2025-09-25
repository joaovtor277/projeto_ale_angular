// Arquivo: blog.js

document.addEventListener('DOMContentLoaded', function() {
    const featuredContainer = document.getElementById('featured-article-container');
    const listContainer = document.getElementById('article-list-container');

    // O primeiro artigo do nosso "banco de dados" será o destaque
    const featuredArticle = artigos[0];

    // O restante dos artigos irá para a lista
    const otherArticles = artigos.slice(1);

    // --- Cria o HTML para o Artigo em Destaque ---
    if (featuredArticle) {
        const featuredHtml = `
            <article class="featured-article">
                <a href="${featuredArticle.slug}" class="featured-article-link">
                    <div class="featured-image">
                        <img src="${featuredArticle.imagem}" alt="${featuredArticle.titulo}">
                    </div>
                    <div class="featured-content">
                        <h2>${featuredArticle.titulo}</h2>
                        <p class="article-meta">${featuredArticle.tempoLeitura} • ${featuredArticle.dataPublicacao}</p>
                    </div>
                </a>
            </article>
        `;
        featuredContainer.innerHTML = featuredHtml;
    }

    // --- Cria o HTML para a Lista de Artigos ---
    if (otherArticles.length > 0) {
        let listHtml = '';
        otherArticles.forEach(artigo => {
            listHtml += `
                <article class="list-article-item">
                    <a href="${artigo.slug}" class="list-article-link">
                        <div class="list-article-thumbnail">
                            <img src="${artigo.imagem}" alt="${artigo.titulo}">
                        </div>
                        <div class="list-article-content">
                            <h3>${artigo.titulo}</h3>
                            <p class="article-meta">${artigo.tempoLeitura} • ${artigo.dataPublicacao}</p>
                        </div>
                    </a>
                </article>
            `;
        });
        listContainer.innerHTML = listHtml;
    }
});