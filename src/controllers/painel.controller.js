const { Atendimentos, Psicologos, Pacientes } = require('../models') 

const painelController = {

    async numberPacientes (req, res) {
        try {
            const numPacientes = await Pacientes.count()
            res.status(200).json(`${numPacientes} pacientes cadastrados.`)

        } catch (e) {
            res.json("Quantidade de pacientes indeterminada")
            console.log(e)
        }
    },

    async numberAtendimentos (req, res) {
        try {
            const numAtendimentos = await Atendimentos.count()
            res.status(200).json(`${numAtendimentos} atendimentos agendados`)

        } catch (e) {
            res.json("Atendimento(s) não localizado.")
            console.log(e)
        }
    },

    async numberPsicologos (req, res) {
        try {
            const numPsicologos = await Psicologos.count()
            res.status(200).json(`${numPsicologos} psicólogos cadastrados.`)

        } catch (e) {
            res.json("Quantidade de Psicologos indeterminada")
            console.log(e)
        }
    },

    async atendimentoPsicologo (req, res){
        
        try {
            const nAtendimentos = await Atendimentos.count()
            const nPsicologos = await Psicologos.count()
            const media = nAtendimentos/nPsicologos

            res.status(200).json(`Em média, cada psicólogo realizou ${media} atendimentos`)

        } catch (error) {
            res.json("Não Foi Possível determinar a  média dos atendimentos por psicólogos")
            console.error(error)
        }
    }
}

module.exports = painelController;