# Formação de teams
Esta aplicação tem como objetivo a criação de usuários, no qual é possível criar times, add usuários ao seu time, remover e convidar. Um ótimo exercício para criação de SaaS, últilizando Redis para envio de email, Acl para permissões e regras e relacionamentos performáticos.

# Adonis API - SaaS

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
### BDs

 - MySQL
 - Redis
 ```js
adonis kue:listen
```