
# API REST TYPESCRIPT

Uma api desenvolvida com typescript, postgres e o uso da biblioteca typeorm

## Documentação da API

#### Cadastrar um item

```http
  POST /subject
```

| Corpo   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório** |

#### Cadastra um item

```http
  POST /room
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O ID do item que você quer |
| `url`      | `string` | **Obrigatório**. O ID do item que você quer |

| Params   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idRoom`      | `string` | **Obrigatório**. O ID do item que você quer |


#### Retorna todos os  itens
```http
  GET /room
```

#### Cadastra um video 
```http
  POST /room/:idRoom/create
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O ID do item que você quer |
| `url`      | `string` | **Obrigatório**. O ID do item que você quer |

| Params   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idRoom`      | `string` | **Obrigatório**. O ID do item que você quer |


#### Cadastra um video em um room

```http
  POST /room/:idRoom/subject
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `subject_id`      | `string` | **Obrigatório**. O ID do item que você quer |

| Params   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idRoom`      | `string` | **Obrigatório**. O ID do item que você quer |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_HOST`

`DB_POST`

`DB_USER`

`DB_PASS`

`DB_NAME`

`PORT`

