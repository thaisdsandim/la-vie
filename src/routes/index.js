const express = require("express")

const psicologoController = require("../controllers/psicologo.controller")

const psicologosCreateValidation = require("../validations/psicologos/create")
const psicologosUpdateValidation = require("../validations/psicologos/update")

const routes = express.Router()

routes.get("/psicologo", psicologoController.listarPsicologos)
routes.get("/psicologo/:id", psicologoController.getOne)
routes.post("/psicologo", psicologosCreateValidation, psicologoController.cadastrarPsicologo)
routes.put("/psicologo/:id", psicologosUpdateValidation, psicologoController.atualizarCadastro)
routes.delete("/psicologo/:id", psicologoController.deletarPsicologo)

module.exports = routes