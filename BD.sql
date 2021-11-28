create database autinclude;

create table if not exists categoria
(
	id serial unique primary key not null,
	nome varchar(30) not null,
);

create table if not exists usuario
(
	id serial unique primary key not null,
	nome varchar(100) not null,
	nome_social varchar(100) not null,
	telefone varchar(100) not null,
	data_nascimento varchar(100) not null,
	email varchar(100) not null,
	senha text not null
);

create table if not exists oportunidade
(
	id serial unique primary key not null,
	usuario_id int not null,
 	categoria_id int not null,
	empresa_id interger not null,
  nome varchar(100) not null,
  descricao varchar(100) not null,
  foreign key (usuario_id) references usuario (id),
  foreign key (categoria_id) references categoria (id),
  foreign key (categoria_id) references categoria (id)
);

create table if not exists empresa
(
	id serial unique primary key not null,
	nome varchar(100) not null,
 );

create table if not exists endereco
(
	id serial unique primary key not null,
    usuario_id int not null,
	cidade varchar(100) not null,
	estado varchar(100) not null,
	foreign key (usuario_id) references usuario (id),
 );