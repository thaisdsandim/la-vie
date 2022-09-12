const express = require("express")

const psicologoController = require("../controllers/psicologo.controller")

const routes = express.Router()

routes.get("/psicologo", psicologoController.listarPsicologos)
routes.get("/psicologo/:id", psicologoController.getOne)
routes.post("/psicologo", psicologoController.cadastrarPsicologo)
routes.put("/psicologo/:id", psicologoController.atualizarCadastro)
routes.delete("/psicologo/:id", psicologoController.deletarPsicologo)

module.exports = routes