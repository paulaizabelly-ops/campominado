const minefield = document.getElementById('minefield');

// Banco de dados: 25 HTML + 25 CSS = 50 Itens
const items = [
    // --- 25 TAGS HTML MAIS FÁCEIS ---
    { type: 'html', name: '<html>', answer: 'Começa e fecha todo o documento do site.' },
    { type: 'html', name: '<head>', answer: 'Guarda as configurações ocultas e o título da aba.' },
    { type: 'html', name: '<title>', answer: 'Define o nome que aparece na aba do navegador.' },
    { type: 'html', name: '<body>', answer: 'Guarda toda a parte visível do site (textos, imagens).' },
    { type: 'html', name: '<h1>', answer: 'Título principal da página (o maior de todos).' },
    { type: 'html', name: '<h2>', answer: 'Subtítulo para organizar as seções do texto.' },
    { type: 'html', name: '<h3>', answer: 'Título menor, usado para sub-tópicos.' },
    { type: 'html', name: '<p>', answer: 'Usado para escrever parágrafos de texto.' },
    { type: 'html', name: '<a>', answer: 'Cria um link para clicar e ir para outra página.' },
    { type: 'html', name: '<img>', answer: 'Usado para exibir uma imagem na tela.' },
    { type: 'html', name: '<button>', answer: 'Cria um botão simples que pode ser clicado.' },
    { type: 'html', name: '<ul>', answer: 'Cria uma lista com bolinhas (não ordenada).' },
    { type: 'html', name: '<ol>', answer: 'Cria uma lista sequencial numerada (1, 2, 3...).' },
    { type: 'html', name: '<li>', answer: 'Define o item de uma lista (vai dentro de ul ou ol).' },
    { type: 'html', name: '<div>', answer: 'Uma caixa genérica invisível para organizar blocos.' },
    { type: 'html', name: '<span>', answer: 'Pequena caixa em linha para formatar palavras isoladas.' },
    { type: 'html', name: '<br>', answer: 'Força uma quebra de linha no texto (pula linha).' },
    { type: 'html', name: '<hr>', answer: 'Desenha uma linha horizontal reta divisória.' },
    { type: 'html', name: '<b>', answer: 'Deixa o texto em negrito visualmente.' },
    { type: 'html', name: '<i>', answer: 'Deixa o texto inclinado em itálico.' },
    { type: 'html', name: '<form>', answer: 'Cria um formulário para coletar dados do usuário.' },
    { type: 'html', name: '<input>', answer: 'Campo de texto onde o usuário digita dados.' },
    { type: 'html', name: '<header>', answer: 'Define o cabeçalho ou topo visual do site.' },
    { type: 'html', name: '<footer>', answer: 'Define o rodapé com informações ao final do site.' },
    { type: 'html', name: '<video>', answer: 'Insere um player para reproduzir vídeos.' },

    // --- 25 PROPRIEDADES CSS MAIS FÁCEIS ---
    { type: 'css', name: 'color', answer: 'Altera a cor do texto/letras.' },
    { type: 'css', name: 'background-color', answer: 'Muda a cor de fundo de uma caixa ou página.' },
    { type: 'css', name: 'font-size', answer: 'Aumenta ou diminui o tamanho da letra.' },
    { type: 'css', name: 'font-family', answer: 'Define o tipo/estilo da fonte (ex: Arial).' },
    { type: 'css', name: 'font-weight', answer: 'Ajusta a grossura da fonte (normal ou bold).' },
    { type: 'css', name: 'text-align', answer: 'Alinha o texto no centro, esquerda ou direita.' },
    { type: 'css', name: 'text-decoration', answer: 'Adiciona ou remove decorações (como sublinhado).' },
    { type: 'css', name: 'width', answer: 'Define a largura de um elemento ou caixa.' },
    { type: 'css', name: 'height', answer: 'Define a altura de um elemento ou caixa.' },
    { type: 'css', name: 'border', answer: 'Cria uma borda ou linha em volta do elemento.' },
    { type: 'css', name: 'border-radius', answer: 'Arredonda as esquinas/cantos de uma caixa.' },
    { type: 'css', name: 'margin', answer: 'Gera espaço vazio do lado de FORA da caixa.' },
    { type: 'css', name: 'padding', answer: 'Gera espaço de preenchimento do lado de DENTRO.' },
    { type: 'css', name: 'display', answer: 'Muda como o bloco se comporta (flex, grid, block, none).' },
    { type: 'css', name: 'cursor', answer: 'Altera o visual do ponteiro do mouse (ex: pointer).' },
    { type: 'css', name: 'opacity', answer: 'Ajusta o nível de transparência (0 a 1).' },
    { type: 'css', name: 'box-shadow', answer: 'Adiciona um efeito de sombra ao redor da caixa.' },
    { type: 'css', name: 'text-shadow', answer: 'Adiciona efeito de sombra projetada no texto.' },
    { type: 'css', name: 'background-image', answer: 'Coloca uma imagem como fundo do elemento.' },
    { type: 'css', name: 'line-height', answer: 'Ajusta o espaçamento vertical entre linhas de texto.' },
    { type: 'css', name: 'list-style', answer: 'Modifica ou remove os marcadores de uma lista.' },
    { type: 'css', name: 'letter-spacing', answer: 'Altera o espaçamento horizontal entre as letras.' },
    { type: 'css', name: 'max-width', answer: 'Define o limite máximo de largura que a caixa chega.' },
    { type: 'css', name: 'gap', answer: 'Define o espaço automático entre itens de um Flex/Grid.' },
    { type: 'css', name: 'transition', answer: 'Cria animações suaves ao alterar estados (ex: no hover).' }
];

// Algoritmo Fisher-Yates para embaralhar a lista de forma justa
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Executa o embaralhamento
shuffle(items);

// Loop para criar as 50 cartas dinamicamente na tela
items.forEach((item, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = index + 1; // Começa exibindo o número da célula
    
    // Armazena as informações dentro do próprio elemento HTML de forma oculta
    cell.dataset.name = item.name;
    cell.dataset.answer = item.answer;
    cell.dataset.type = item.type;

    // Monitora os cliques do jogador
    cell.addEventListener('click', function() {
        // Se já foi revelado por completo, ignora novos cliques
        if (this.classList.contains('revealed')) return;

        // Segundo Clique: Se já mostrava o nome, agora mostra a resposta/significado
        if (this.classList.contains('named')) {
            this.classList.remove('named', 'type-html', 'type-css');
            this.classList.add('revealed');
            this.textContent = this.dataset.answer;
            return;
        }

        // Primeiro Clique: Mostra se é HTML ou CSS mudando a cor e exibindo o termo
        this.classList.add('named', `type-${this.dataset.type}`);
        this.textContent = this.dataset.name;
    });

    // Adiciona a célula customizada ao tabuleiro principal
    minefield.appendChild(cell);
});