# JornadaMilhas

Para iniciar o projeto, Clone o repositório, ápos isso,  instale as dependencias com o npm install.
E para startar a aplicação digite no terminal ng serve --open.


Esse projeto foi desenvolvido com o framework angular, typescript e scss. Estou utlizando também a biblioteca MUI Material.
É um sistema de viagens, não há integração com api's.

O primeiro commit foi criado toda pasta do projeto, removendo oque não seria utilizado, e a criação do Header.

O segundo commit foi criado um componente banner e usando a diretiva @Input passando uma string, para que possa reutilizar esse banner em outros locais, e também foi criado o footer, utilizando o componente do banner para usar a iamgem de logotipo

O terceiro commit foi criado os cards, foram criados 2 componentes, card-depoiment, e card-search, e foram introduzidos no componente Home

O quarto commit foi criado o formulário de busca, importamos alguns componentes do material.io, nessa parte ocorreram alguns erros de importação, como:  MatDatepickerModule, MatNativeDateModule, MatMomentDateModule,
vefiquei o console do navegador para encontrar os erros, e no MatMomentDateModule tive que instalar um pacote npm i @angular/material-moment-adapter --save para que resolvesse os erros.

o quinto e ultimo commit foi para criar o modal, ao selecionar quantos adultos ou qual classe da viajem, abre um modal para que o usuário escolha essas quantidades.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.
