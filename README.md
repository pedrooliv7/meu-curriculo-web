# Currículo Online - Pedro Higor

 Esse é o meu trabalho prático da disciplina de desenvolvimento web. A proposta era criar um currículo online usando HTML, CSS, JavaScript e PHP, com o projeto versionado e publicado no GitHub.

## Links

 - Repositório: https://github.com/pedrooliv7/meu-curriculo-web
 - Site publicado: https://pedrooliv7.github.io/meu-curriculo-web/

## Tecnologias usadas

 - HTML - estrutura da página (header, seções, footer, formulário)
 - CSS - estilização, tema escuro, responsividade e algumas animações
 - JavaScript - efeito no título ao passar o mouse, animação de fade-in nas
   seções conforme o scroll, e envio do formulário via fetch
 - PHP - recebe os dados do formulário de contato, valida e salva em um arquivo

## Estrutura do projeto

````
meu-curriculo-web/
├── index.html
├── contato.php
├── README.md
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── imagens/art-pfp.png
````

## Como rodar

 O site em si (HTML/CSS/JS) já funciona normal pelo link do GitHub Pages, ou abrindo o index.html no navegador.

 Já o formulário de contato depende do PHP, e o GitHub Pages não executa PHP. Pra testar essa parte, precisamos rodar localmente com o XAMPP (ou outro servidor com PHP): coloca a pasta dentro da htdocs, liga o Apache e acessa pelo localhost. Ao enviar o formulário, o contato.php valida os campos (nome, email e mensagem) e salva a mensagem em um arquivo mensagens.txt.

## O que tem no site

 - Layout responsivo (funciona em celular, tablet e desktop)
 - Menu fixo no topo com rolagem suave até cada seção
 - Animação no título principal ao passar o mouse
 - Seções aparecem com efeito de fade-in conforme o usuário rola a página
 - Formulário de contato com validação (no front e no back-end)
 - Mensagens do formulário são salvas em arquivo via PHP

## Feito por mim

 Pedro Higor - Aluno de ciência da Computação (Estácio)
 
 GitHub: @pedrooliv7
 
