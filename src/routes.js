const express = require('express');
//const filtroLogin = require('./filtros/filtroLogin');

const cadastroUsuario = require('./Controllers/usuario/cadastro');
//const funcionalidadeUsuario = require('./controladores');

const router = express();

//router.post('/login', funcionalidadeCliente.fazerLogin);
router.post('/usuario', cadastroUsuario);


module.exports = router;