const yup = require('./config');

const cadastrarCliente = yup.object().shape({


});

const editarCliente = yup.object().shape({

});

const loginCliente = yup.object().shape({

});




module.exports =
{
	cadastrarCliente,
	loginCliente,
};