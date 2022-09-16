create database lavie;

use lavie;

create table psicologos(
	id integer not null auto_increment primary key,
    nome varchar(245),
    email varchar(245) unique,
    senha varchar(100),
    apresentacao varchar(500)
);

create table pacientes(
	id integer not null auto_increment primary key,
    nome varchar(245),
    email varchar(245) unique,
    idade date
);

create table atendimentos(
	id integer not null auto_increment primary key,
	data_atendimento datetime,
    observacao text,
    paciente_id integer,
    psicologo_id integer,
    constraint fk_paciente_id foreign key (paciente_id) references pacientes(id),
    constraint fk_psicologo_id foreign key (psicologo_id) references psicologos(id)
);

-- para popular o banco:

insert into psicologos values(null, "Mariana", "mariana@gmail.com", "12345678", "Psicóloga existencial-humanista");
insert into psicologos values(null, "Juliana", "juliana@gmail.com", "12345678", "Psicóloga analítico-comportamental");
insert into psicologos values(null, "Marcos", "marcos@gmail.com", "12345678", "Psicólogo freudiano");
insert into psicologos values(null, "Jacques", "jacques@gmail.com", "12345678", "Psicólogo cognitivo-comportamental");
insert into psicologos values(null, "Andrea", "andrea@gmail.com", "12345678", "Psicóloga junguiana");
insert into psicologos values(null, "Carla", "carla@gmail.com", "12345678", "Psico-oncologista");

insert into pacientes values(null, "Joana", "joana@gmail.com", '2000-04-30');
insert into pacientes values(null, "Dua Lipa", "dualipa@gmail.com", '1995-08-22');
insert into pacientes values(null, "Elvis", "elvis@gmail.com", '1935-01-08');
insert into pacientes values(null, "David", "david@gmail.com", '1998-03-17');
insert into pacientes values(null, "Freddie", "fred@gmail.com", '1946-09-05');
insert into pacientes values(null, "Madonna", "madonna@gmail.com", '1958-08-16');

insert into atendimento values(null, '2022-04-02 10:00:00', "paciente apresentou questões sobre a família e o trabalho que a estavam deixando estressada", 1, 3);
insert into atendimento values(null, '2022-05-10 13:00:00', "paciente extremamente abalada pelo falecimento de familiar", 6, 5);
insert into atendimento values(null, '2022-06-16 09:30:00', "paciente questionou suas crenças limitantes em relação à profissão", 3, 2);