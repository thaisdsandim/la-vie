// const AtendimentosController = require('../../^/untitled/ts-nul-authority/Untitled-1');
const { Atendimentos, Pacientes, Psicologos } = require('../models');

const attendances = {
    async listAttendances (req, res) {
        try {
            let listOfAttendances = await Atendimentos.findAll(
                {
                    include: [
                        {
                            model: Pacientes, attributes: ['nome']
                        },
                        {
                            model: Psicologos, attributes: ['nome']
                        }],
                            attributes: ['id', 'data_atendimento', 'observacao'] 
                }
            )
            res.status(200).json(listOfAttendances);
        } catch (e) {
            res.json("Não foi possível exibir a lista de atendimentos");
            console.log(e);
        }
    },
    async listOfAttendance (req, res) {
        let { id } = req.params;
        try {
            let attendanceDB = await Atendimentos.findByPk(id);
            if(!attendanceDB) {
                return res.status(404).json(`Não existe atendimento para esse identificador: ${id}`);
            }
            res.status(200).json(attendanceDB);
        } catch (e) {
            res.status(400).json(`Não foi possível localizar atendimento pelo identificador: ${id}`);
        }
    },
    async registerAttendance (req, res) {
        const token = req.auth.id;
        try {
            const { paciente_id, data_atendimento, observacao } = req.body;
            const newAttendance = await Atendimentos.create({
                paciente_id,
                data_atendimento,
                observacao,
                psicologo_id: token 
            }
            );
            return res.status(201).json(newAttendance);
        } catch (e) {
            res.status(400).json("Não foi possível reservar o atendimento");
        }
    }
}

module.exports = attendances;