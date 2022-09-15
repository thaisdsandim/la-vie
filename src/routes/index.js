const express = require("express")

const psicologoController = require("../controllers/psicologo.controller")
const pacienteController = require("../controllers/paciente.controller")
const AtendimentosController = require("../controllers/atendimento.controller");
const painel = require('../controllers/painel.controller');

const psicologosCreateValidation = require("../validations/psicologos/create")
const psicologosUpdateValidation = require("../validations/psicologos/update")
const pacientesCreateValidation = require("../validations/pacientes/create")
const pacientesUpdateValidation = require("../validations/pacientes/update")

const routes = express.Router()

routes.get("/psicologos", psicologoController.listarPsicologos)
routes.get("/psicologos/:id", psicologoController.getOne)
routes.post("/psicologos", psicologosCreateValidation, psicologoController.cadastrarPsicologo)
routes.put("/psicologos/:id", psicologosUpdateValidation, psicologoController.atualizarCadastro)
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo)

routes.get("/pacientes", pacienteController.listarPacientes)
routes.get("/pacientes/:id", pacienteController.getOne)
routes.post("/pacientes", pacientesCreateValidation, pacienteController.cadastrarPaciente)
routes.put("/pacientes/:id", pacientesUpdateValidation, pacienteController.atualizarCadastro)
routes.delete("/pacientes/:id", pacienteController.deletarPaciente)

routes.get('/atendimentos', AtendimentosController.listAttendances);
routes.get('/atendimentos/:id', AtendimentosController.listOfAttendance);
routes.post('/atendimentos', AtendimentosController.registerAttendance);

routes.get('/painel/atendimentos', painel.numberAtendimentos);
routes.get('/painel/psicologos/media', painel.atendimentoPsicologo);

module.exports = routes