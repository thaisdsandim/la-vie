const express = require("express")

const psicologoController = require("../controllers/psicologo.controller")
const AtendimentosController = require("../controllers/atendimento.controller");
const painel = require('../controllers/painel.controller');

const psicologosCreateValidation = require("../validations/psicologos/create")
const psicologosUpdateValidation = require("../validations/psicologos/update")

const routes = express.Router()

routes.get("/psicologo", psicologoController.listarPsicologos)
routes.get("/psicologo/:id", psicologoController.getOne)
routes.post("/psicologo", psicologosCreateValidation, psicologoController.cadastrarPsicologo)
routes.put("/psicologo/:id", psicologosUpdateValidation, psicologoController.atualizarCadastro)
routes.delete("/psicologo/:id", psicologoController.deletarPsicologo)

routes.get('/atendimentos', AtendimentosController.listAttendances);
routes.get('/atendimentos/:id', AtendimentosController.listOfAttendance);
routes.post('/atendimentos', AtendimentosController.registerAttendance);

routes.get('/painel/atendimentos', painel.numberAtendimentos);
routes.get('/painel/psicologos/media', painel.atendimentoPsicologo);

module.exports = routes