const express = require("express")
const auth = require("../middlewares/auth")

const psicologoController = require("../controllers/psicologo.controller")
const pacienteController = require("../controllers/paciente.controller")
const AtendimentosController = require("../controllers/atendimento.controller");
const painel = require('../controllers/painel.controller');
const authController = require("../controllers/auth.controller")

const psicologosCreateValidation = require("../validations/psicologos/create")
const psicologosUpdateValidation = require("../validations/psicologos/update")
const pacientesCreateValidation = require("../validations/pacientes/create")
const pacientesUpdateValidation = require("../validations/pacientes/update")
const authLoginValidation = require("../validations/auth/login")
const atendimentosCreateValidation = require("../validations/atendimentos/create")

const routes = express.Router()

routes.get("/psicologos", psicologoController.listarPsicologos)
routes.get("/psicologos/:id", psicologoController.getOne)
routes.post("/psicologos", psicologosCreateValidation, psicologoController.cadastrarPsicologo)
routes.put("/psicologos/:id", psicologosUpdateValidation, psicologoController.atualizarCadastro)
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo)

routes.post("/login", authLoginValidation, authController.login)

routes.get("/pacientes", pacienteController.listarPacientes)
routes.get("/pacientes/:id", pacienteController.getOne)
routes.post("/pacientes", pacientesCreateValidation, pacienteController.cadastrarPaciente)
routes.put("/pacientes/:id", pacientesUpdateValidation, pacienteController.atualizarPaciente)
routes.delete("/pacientes/:id", pacienteController.deletarPaciente)

routes.get('/atendimentos', AtendimentosController.listAttendances);
routes.get('/atendimentos/:id', AtendimentosController.listOfAttendance);
routes.post('/atendimentos', auth, atendimentosCreateValidation, AtendimentosController.registerAttendance);

routes.get('/painel/atendimentos', painel.numberAtendimentos);
routes.get('/painel/psicologos/media', painel.atendimentoPsicologo);

module.exports = routes