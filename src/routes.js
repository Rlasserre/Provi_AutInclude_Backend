const express = require('express');
//const filtroLogin = require('./filtros/filtroLogin');

const cadastroUsuario = require('./Controllers/usuario/cadastro');
const logar = require('./Controllers/usuario/login');

const router = express();

router.post('/login', logar);
router.post('/usuario', cadastroUsuario);


module.exports = router;