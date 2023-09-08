const { request, query } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const { Pool } = require('mysql2/typings/mysql/lib/Pool')
const PORT = 3333
//Importar o módulo conn para as operações com o banco
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos
app.use(express.static())


app.get('/', (request, response)=>{
  return response.render('home')
})

app.get('/cadastro/inserirdados', (request, response)=>{
  const {title, category, description, price, qnt_disponible} = request.body

  const sql = `INSERT livros FROM ('??, ??, ??, ??, ??') VALUES ('??, ??, ??, ??, ??')`
  const data = ('title', 'category', 'description', 'price', 'qnt_disponible', title, category, description, price, qnt_disponible)

   pool.query(sql, data, (err)=>{
    if(err){
      console.log(err)
      return
    }
  })
  return response.render('/')
})


app.get('/cadastro/:id', (request, response)=>{
  const {id} = request.params.id

  const sql = `SELECT * FROM (??, ??) WHERE id (??, ??) `
  const data = ('id', id)

  pool.query(sql, data, (err)=>{
    if(err){
      console.log(err)
      return
    }
    const livros = [0]
    console.log(livros)
    return response.render('/cadastro', {cadastro})
  })
})

app.get('/atualizar/:id', (request, response)=>{
  const {id} = request.params.id

  const sql = `SELECT * FROM (??, ??) WHERE id (??, ??) `
  const data = ('id', id)

  pool.query(sql, data, (err)=>{
    if(err){
      console.log(err)
      return
    }
    return response.render('/atualizar', {atualizar})
  })
})

app.get('/', (request, response)=>{
  const {id} = request.params.id

  const sql = `DELETE * FROM (??, ??) WHERE id (??, ??) `
  const data = ('id', id)

  pool.query(sql, data, (err)=>{
    if(err){
      console.log(err)
      return
    }
    return response.render('/')
  })
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

