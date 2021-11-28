const yup = require('./config');

const cadastrarUsuario = yup.object().shape({
	nome: yup
		.string()
		.max(100)
		.required(),

	nome_social: yup
		.string()
		.max(100)
		.required(),

	email: yup
		.string()
		.email()
		.max(100)
		.required(),

	senha: yup
		.string()
		.required()
		.min(6),

	telefone: yup
		.string()
		.required()
		.min(11),

	data_nascimento: yup
		.string()
		.required()
		.min(10),


});

const loginUsuario = yup.object().shape({

});




module.exports =
{
	cadastrarUsuario,
	loginUsuario,
};