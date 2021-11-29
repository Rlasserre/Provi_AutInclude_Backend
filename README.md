# AutInclude HackProvi Para_Todos

## Tecnologias usadas no BackEnd

- JavaScrip
- NodeJs
- Express
- PostgresSQL
- bcrypt
- JWT


## Porquê ?

- As escolhas das tecnologias levaram em conta a expertise da equipe de desenvolvimento bem como a possibilidade de escalar a solução e no futuro serem adicionadas novas features


---

## Endpoints

## POST - Login

### Dados enviados

  - Username
  - Senha
  
### Dados Retornados

  - Sucesso / erro
  - Token ( JWT)

### Objetivos gerais
- validar username e a senha
- Buscar usuario no banco de dados
- Verificar a se a senha informada está correta
- Gerar token de autenticação
- Retornar dados do usuario e token

---

# Cadastro

## POST - Cadastro

### Dados enviados

  - Nome 
  - Nome Social
  - email(usado tambem como login)
  - data de Nascimento
  - Telefone
  - Senha

### Dados retornados

  - Sucesso / erro

### Objetivos gerais
- Validar username e a senha
- Verificar existencia previa de username no banco de dados
- Criptografar a senha
- Cadastrar o usuario no banco de dados
- Retornar sucesso ou erro

---

### Equipe Dev BackEnd

-Rafael Lasserre
-Eunice Maria de Souza
