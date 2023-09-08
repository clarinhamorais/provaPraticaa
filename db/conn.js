const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'root',
  port: '3306', // É opcional.
  user: 'root',
  password: 'Sen@iDev77!.',
  database: 'livros',
})

// É necessário exporta esse modulo
module.exports = pool