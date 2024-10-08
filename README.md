# API_tasks
Este projeto é uma aplicação simples de To-Do List desenvolvida com Node.js e Express. Ele utiliza o MongoDB como banco de dados para armazenar as tarefas.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados no seu sistema. Além disso, você precisará de um servidor MongoDB em execução ou pode usar um serviço como o MongoDB Atlas.

## Configuração do Projeto

1. Clone este repositório:
```bash
git clone https://github.com/nicoleprevid/api_task
Navegue até o diretório do projeto:
```

2. Navegue até o diretório do projeto:
```bash
cd nome-do-projeto
```

3.Instale as dependências:
```bash
npm install
```

4.Crie um arquivo .env na raiz do projeto e adicione a string de conexão MongoDB:
```env
MONGODB_URI=sua-string-de-conexao-mongodb
 ```

## Executando o Projeto

5.Para iniciar o servidor, execute o seguinte comando:
```bash
node app.js
O servidor estará acessível em http://localhost:25000 por padrão.
```

## Endpoints da API

# Adicionar Tarefa
Método: POST
Endpoint: /todos
Corpo da Requisição:
```json
{
  "task": "Estudar MongoDB",
  "completed": false
}

```

# Listar Todas as Tarefas
Método: GET
Endpoint: api/todos

# Atualizar Tarefa
Método: PUT
Endpoint: api/todos/:id
Corpo da Requisição:
```json
{
  "completed": true
}
```
# Excluir Tarefa
Método: DELETE
Endpoint: /todos/:id
