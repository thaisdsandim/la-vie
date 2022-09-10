create database lavie;

use lavie;

create table psicologos(
	id integer not null auto_increment primary key,
    nome varchar(245),
    email varchar(245) unique,
    senha varchar(8),
    apresentacao varchar(500)
);

create table pacientes(
	id integer not null auto_increment primary key,
    nome varchar(245),
    email varchar(245) unique,
    idade date
);

create table atendimento(
	id integer not null auto_increment primary key,
	data_atendimento datetime,
    observacao text,
    paciente_id integer,
    psicologo_id integer,
    constraint fk_paciente_id foreign key (paciente_id) references pacientes(id),
    constraint fk_psicologo_id foreign key (psicologo_id) references psicologos(id)
);