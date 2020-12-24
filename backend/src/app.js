
/* Métodos http:
 *
 * GET: buscar uma informação
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma infirmação no back-end
*/


/**
 * TIPOS DE PARÂMETROS

 * QUERY params: Parâmetros nomeados enviados na rota após  "?" (filtro, paginação)
    ex: http://localhost:3333/users?name=Marcelo
 * Route params: Parâmtros utilizados para identificar recursos
    ex: http://localhost:3333/users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */ 

 /*
    * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * nOsql: MongoDB, CouchDB, etc  
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

 const express = require('express');
 const routes = require('./routes');
 const cors = require('cors');
 const app = express();
 const { errors } = require('celebrate');

 app.use(cors());
 app.use(express.json()); //Estará utilizando JSON
 app.use(routes);
 app.use(errors());

 module.exports = app;