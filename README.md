# Aplicação Web de Cadastro de Jogos

Projeto desenvolvido para a disciplina de Tecnologias Web.

## 👤 Integrante

Davi Marques

## 📋 Responsabilidades

- Listagem dinâmica de games (`listagem.html`)
- Estado global da aplicação (`app.js`)

## 📁 Arquivos da branch

```
projeto/
├── listagem.html
└── src/
    └── app.js
```

## 📄 Descrição

A página de listagem exibe todos os games cadastrados em cards dinâmicos, com suporte a busca em tempo real por título, gênero, plataforma ou desenvolvedora. O `app.js` gerencia o estado global da aplicação, armazenando os dados em um array em memória com persistência via `localStorage`, e expõe as funções `getGames`, `addGame` e `deleteGame` utilizadas por todas as páginas.

## 🛠 Tecnologias utilizadas

- HTML5 semântico
- JavaScript (ES6+)
- localStorage para persistência de dados
