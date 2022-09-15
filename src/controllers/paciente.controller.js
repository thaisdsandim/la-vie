const Pacientes = require("../models");

const pacienteController = {
    listarPacientes: async (req, res) => {
        const listaPacientes = await Pacientes.findAll()
        if(!listaPacientes) {
            listaVazia = []
            res.status(200).json(listaVazia)
        } else {
            res.status(200).json(listaPacientes)
        }
    },

    getOne: async(req, res) => {
        const { id } = req.params

        const pacienteSalvo = await Pacientes.findByPk(id)

        try {
            if(pacienteSalvo) {
                return res.status(200)
                .json({
                    "nome": pacienteSalvo.nome,
                    "email": pacienteSalvo.email,
                    "idade":pacienteSalvo.idade,
                })
            } else {res.status(404).json("id não encontrado")}
        } catch(error) {
            console.log(error)
        }
    },

    cadastrarPaciente: async(req, res) => {
        const { nome, email, idade } = req.body

        try {
            const pacienteCadastrado = await Pacientes.count({
                where: { email },
            })
            
            if(pacienteCadastrado) {
                return res.status(400).json("E-mail cadastrado")
            }

            const novoPaciente = await Pacientes.create({
                nome,
                email,
                idade
            })

            res.status(201).json(novoPaciente);
        } catch(error) {
            console.log(error);
        }
    },

    atualizarPaciente: async (req, res) => {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
        const pacienteSalvo = await Pacientes.findByPk(id);

        try {
            if(pacienteSalvo){
                const pacienteAtualizado = await Pacientes.update(
                    {
                        nome,
                        email,
                        idade
                    },
                    {
                        where: {
                            id
                        }
                    }
                )

                res.status(200).json({
                    nome, email, idade
                })
            } else{
                res.status(404).json("id não encontrado")
            }
        }
        catch(error) {
            console.log(error)
        }
    },

    deletarPaciente: async (req, res) => {
        const { id } = req.params;
        const pacienteSalvo = await Pacientes.findByPk(id);

        try {
            if(pacienteSalvo) {
                await Pacientes.destroy({
                    where: {
                        id
                    }
                })
                return res.status(204).json("paciente deletado com sucesso")

            } else{
                return res.status(404).json("id não encontrado")
            }
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = pacienteController