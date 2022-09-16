const db = require('../database');
const { DataTypes } = require('sequelize');
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');

const Atendimentos = db.define(
    "Atendimentos", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },

        data_atendimento: {
            type: DataTypes.DATE,
            field: "data_atendimento"
        },

        observacao: {
            type: DataTypes.STRING,
            field: "observacao"
        },

        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id"
            },
            field: "paciente_id"
        },

        psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id"
            },
            field: "psicologo_id"
        }

    },
    {
        tableName: "atendimentos",
        timestamps: false
    }
)

module.exports = Atendimentos;