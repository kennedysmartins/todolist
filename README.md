# Gerenciador de Tarefas

Este é um projeto desenvolvido como parte de um desafio para criar um gerenciador de tarefas simples. O objetivo é criar uma aplicação onde o usuário possa adicionar, visualizar, editar e excluir tarefas.

## Funcionalidades

- Adicionar uma nova tarefa com título e descrição.
- Marcar uma tarefa como concluída.
- Editar uma tarefa existente.
- Excluir uma tarefa.

## Tecnologias Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js, Nest.js
- **Banco de Dados:** SQLite
- **Estilização:** CSS, styled-components

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `web/`: Contém o código-fonte do frontend, desenvolvido em React.js.
- `server/`: Contém o código-fonte do backend, desenvolvido em Node.js Nest.js, utilizando o SQLite como banco de dados juntamente com Prisma.


## Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:

 ```sh
   git clone https://github.com/kennedymartins/todolist.git
```

2. Instale as dependências do frontend:

```sh
cd web
npm install
```

3. Instale as dependências do backend:

```sh
cd server
npm install
```

4. Inicie o servidor do backend

```sh
cd server
npm run start
```

5. Inicie a aplicação frontend:

```sh
cd web
npm start
```

A aplicação estará disponível em http://localhost:3000 e o backend em https://localhost:4000

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
