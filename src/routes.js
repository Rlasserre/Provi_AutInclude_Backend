const express = require('express');
const filtroLogin = require('./filtros/filtroLogin');

const crudCliente = require('./controladores/cliente/clienteCrud');
const funcionalidadeCliente = require('./controladores/cliente/clienteFuncionalidades');

const router = express();

router.post('/login', funcionalidadeCliente.fazerLogin);
router.post('/cliente', crudCliente.cadastrarCliente);


module.exports = router;