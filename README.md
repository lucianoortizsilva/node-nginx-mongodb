### Tech Stack
- Java 8+
- Docker
- Node
- nginx
- mongoDB

### Pré-Requisito
- [Docker instalado](https://www.docker.com/products/docker-desktop)

### O que é ?
Criação de 3 containers, utilizando [docker-compose](https://docs.docker.com/compose/), sendo:\
1 Container para front-end, com um server http [nginx](https://www.nginx.com/) \
1 Container para back-end, utilizando [Node](https://nodejs.org/) \
1 Container para o banco de dados, [mongodb](https://www.mongodb.com/) 

### Como rodar ?

- Na pasta raiz do projeto execute o comando:
```cmd
docker-compose up
```

### Testando
Se tudo deu certo, acesse no browser http://localhost:80, e teste o simples CRUD.

![](https://github.com/lucianoortizsilva/node-nginx-mongodb/blob/main/front-end/github/localhost.png)
