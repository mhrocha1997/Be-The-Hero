
exports.up = function(knex) { //CRIA AS TABELAS
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();


  });
};

exports.down = function(knex) { //QUANDO DER ALGUM PROBLEMA, DESFAZ A TABELA
  return knex.schema.dropTable('ongs');
};
