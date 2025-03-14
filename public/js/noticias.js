// Função para adicionar as notícias
function adicionarNoticias(noticias) {
    // Local onde a nova div será inserida
    const container = document.querySelector('.container');
    
    noticias.forEach(noticia => {
        // Criar uma nova div
        const noticiaDiv = document.createElement('div');
        noticiaDiv.classList.add('inner-container1');
        
        // Adicionar a imagem
        const imagem = document.createElement('img');
        imagem.src = noticia.image;
        imagem.alt = noticia.titulo;
        noticiaDiv.appendChild(imagem);
        
        // Adicionar título e texto adicional
        const conteudoDiv = document.createElement('div');
        
        const titulo = document.createElement('h2');
        titulo.classList.add('titulo-inner-container1');
        titulo.textContent = noticia.titulo;
        conteudoDiv.appendChild(titulo);
        
        const textoAdicional = document.createElement('p');
        textoAdicional.classList.add('texto-adicional1');
        textoAdicional.textContent = noticia['texto-adicional'];
        conteudoDiv.appendChild(textoAdicional);
        
        // Adicionar o conteúdo na div principal
        noticiaDiv.appendChild(conteudoDiv);
        
        // Adicionar a nova div ao container
        container.appendChild(noticiaDiv);
    });
}

// Função para carregar o arquivo JSON
function carregarNoticias() {
    fetch('/api/noticias/')  // Carregar o arquivo JSON
        .then(response => response.json())  // Converter para JSON
        .then(data => adicionarNoticias(data))  // Passar os dados para a função adicionarNoticias
        .catch(error => console.error('Erro ao carregar o JSON:', error));  // Tratar erros
}

// Chamar a função para carregar e adicionar as notícias assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarNoticias);
