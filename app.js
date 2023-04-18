const express     = require('express');
const app         = express();
const db          = require('./db/connection');
const bodyParser  = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O Express está rodando na prota ${PORT}`);
});

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// DB CONNECTION
db.authenticate().then(() =>{
  console.log("Conectou ao banco com sucesso!");

}).catch(err => {
  console.log("Ocorreu um erro ao conectar", err);
})

// ROUTES
app.get('/', (req, res) =>{
  res.send("Está Funcionando !");
});

// JOBS ROUTES
app.use('/jobs', require('./routes/jobs'));