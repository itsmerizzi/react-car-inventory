# Name: Augusto José Rizzi
Created using only React and CSS, this repository is for my college project. The college subject is "Front-end Systems Development".

:globe_with_meridians:

Agora em português...

A pedido dos professores, a pasta node_modules foi retirada.

### Para executar o projeto:
1. Entre pasta react-car-inventory no terminal:

```
cd {caminhoDaPasta}/react-car-inventory
```

2. Rode npm install para instalar as dependências do projeto:

```
npm install
```

3. Dentro da pasta app rode o comando npm start para iniciar a execução do projeto.

```
cd ./app/
```

```
npm start
```

### Com o projeto rodando...
Você vai poder navegar entre os tópicos: 
  - **Home**;
  - **Sobre**;
  - **Carros**;
  - **Adicionar Carro**

Abaixo vou deixar um print da tela de `Carros` e após `Adicionar Carro`

![image](https://github.com/user-attachments/assets/1ff8a97d-bec9-480c-bbd7-0ad7652aa00d)

![image](https://github.com/user-attachments/assets/8494d3b1-cea9-4dea-9434-805bd7a1194e)

## Introdução

Neste projeto, foi desenvolvida uma aplicação front-end utilizando o React, com o objetivo de criar um sistema básico de gerenciamento listas de carros. O projeto foi iniciado utilizando o Create React App, que facilitou a configuração inicial e a estruturação do ambiente de desenvolvimento. A aplicação foi dividida em componentes reutilizáveis, que representam diferentes partes funcionais da interface, como a listagem, o formulário de cadastro, e a navegação.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:
- Home:
  - Componente com HTML simples para a página inicial do projeto;
 
- About:
  - Componente também apenas com HTML que explica brevemente o intuito do projeto;
 
- NavBar:
  - Tem um array de `navPositions` que ajuda a montar o HTML da NavBar. Com esse array podemos simplesmente retornar um navPositions.map(), facilitando a escrita do código;

- CarForm:
  - Formulário de cadastro de carro, importa por parametro todas as funções necessárias e retorna uma <div> com todos os <input>s necessários;
 
- CarsList:
  - Inicialmente recebe o valor presente no arquivo `./data/CarsList.js`, porém conforme o usuário for alterando o array de carros, este componente vai acompanhando as alterações. Listado da mesma forma que é foi feita no componente NavBar, usando a função .map();

## Conclusão

Ao longo deste trabalho, foi possível aprender e aplicar conceitos fundamentais do desenvolvimento com React, como a componentização, a passagem de props, e o gerenciamento de estado. Além disso, foram implementadas funcionalidades dinâmicas, incluindo a listagem, criação e exclusão de carros, com validação básica de formulários e feedbacks visuais. Este projeto não só resultou em uma aplicação funcional e navegável, mas também proporcionou um entendimento mais profundo das boas práticas de desenvolvimento front-end.
