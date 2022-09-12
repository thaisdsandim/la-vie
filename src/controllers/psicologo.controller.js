const Psicologos = require("../models")
const bcrypt = require("bcryptjs")

const psicologoController = {
  listarPsicologos: async (req, res) => {
    const listaPsicologos = await Psicologos.findAll()

    if (!listaPsicologos) {
      listaVazia = []
      res.status(200).json(listaVazia)
    } else {
      res.status(200).json(listaPsicologos)
    }

  },

  getOne: async(req, res) => {
    const { id } = req.params

    const psicologoSalvo = await Psicologos.findByPk(id)

    try {

      if(psicologoSalvo) {
        return res.status(200)
          .json({
          "nome": psicologoSalvo.nome,
          "email": psicologoSalvo.email,
          "apresentacao": psicologoSalvo.apresentacao
          })
      } else {
        res.status(404).json("id não encontrado")
      }

    } catch(error) {
      console.log(error)
    }
  },

  cadastrarPsicologo: async (req, res) => {
    const { nome, email, senha, apresentacao } = req.body

    try {

      if(!nome | !email | !senha | !apresentacao){
        return res.status(400).json("informe nome, email, senha e apresentação")
      }

      const usuarioSalvo = await Psicologos.count({
        where: {
          email,
        },
      })

      if(usuarioSalvo) {
        return res.status(400).json("Email já cadastrado")
      }

      const senhaHash = bcrypt.hashSync(senha, 8)

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: senhaHash,
        apresentacao
      })

      res.status(201).json(novoPsicologo)

    } catch(error) {
      console.log(error)
    }  
  },

  atualizarCadastro: async (req, res) => {
    const { id } = req.params
    const { nome, email, senha, apresentacao } = req.body
    const psicologoSalvo = await Psicologos.findByPk(id)

    try {

      if(!nome | !email | !senha | !apresentacao){
        return res.status(400).json("informe nome, email, senha e apresentação")
      }

      if(psicologoSalvo){
        const cadastroAtualizado = await Psicologos.update(
          {
            nome, 
            email,
            senha,
            apresentacao
          },
          {
            where: {
              id
            }
          }
        )
  
        res.status(200).json({
          nome, email, senha, apresentacao
        })

      }else {
        res.status(404).json("id não encontrado")
      }   

    }
    catch(error) {
    console.log(error)
    }
  },

  deletarPsicologo: async (req, res) => {
    const { id } = req.params
    const psicologoSalvo = await Psicologos.findByPk(id)

    try {

      if (psicologoSalvo) {
        await Psicologos.destroy({
          where: {
            id
          }
        })
        return res.status(204).json("psicólogo deletado com sucesso.")
      
      } else {
        return res.status(404).json("id não encontrado.")
      } 
    }
      catch(error) {
      console.log(error)
    }
  }
}

module.exports = psicologoController