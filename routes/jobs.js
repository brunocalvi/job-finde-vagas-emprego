const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// ROTA DE TESTE
router.get('/test', (req, res) => {
  res.send('Deu certo !');
});

// ADD JOB VIA POST
router.post('/add', (req, res) => {

  let {title, salary, company, description, email, new_job} = req.body;

  // INSERT
  Job.create({
    title,
    description, 
    salary,
    company,
    email,
    new_job
  }).then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router