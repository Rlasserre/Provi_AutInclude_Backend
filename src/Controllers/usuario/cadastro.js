const bcrypt = require('bcrypt');
const knex = require('../../Database/conexao');
const schema = require('../../Validation/usuarioSchema');

const cadastrarUsuario = async (req, res) => {
    const requisicaoUsuario = req.body;
    console.log(requisicaoUsuario);

    try {
        await schema.cadastrarUsuario.validate(req.body);

        const existeUsuario = await knex('usuario').where('email', requisicaoUsuario.email).first();

        if (existeUsuario)
            return res.status(400).json('Email já cadastrado');

        const { senha: senhaUsuario, ...dadosUsuario } = requisicaoUsuario;
        const senhaCriptografada = await bcrypt.hash(senhaUsuario, 10);

        const novoUsuario = { ...dadosUsuario, senha: senhaCriptografada }

        const usuarioCadastrado = await knex('usuario').insert(novoUsuario).returning('*');

        if (usuarioCadastrado.length === 0)
            return res.status(400).json('Não foi possível realizar o cadastro do usuário.');

        return res.status(200).json("Usuário cadastrado com sucesso");
    }
    catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarUsuario;