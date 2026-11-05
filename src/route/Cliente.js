
import express from 'express' 
import ControllerCliente from '../controller/Cliente.js'

const route = express.Router()

route.get('/Buscar', ControllerCliente.Buscar)
route.get('/BuscarUm/', ControllerCliente.BuscarUm)
route.post('/Criar', ControllerCliente.Criar)
route.put('/Alterar/', ControllerCliente.Alterar)
route.put('/AlteraNome/', ControllerCliente.AlterarNome)
route.delete('/Deletar/', ControllerCliente.Deletar)

export default route