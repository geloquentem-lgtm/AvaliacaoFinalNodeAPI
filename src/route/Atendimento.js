import express from 'express' 
import ControllerAtendimento from '../controller/Atendimento.js'

const router = express.Router()

router.get('/BuscarAtendimento', ControllerAtendimento.Buscar)
router.post('/CriarAtendimento', ControllerAtendimento.Criar)
router.put('/AlterarAtendimento/', ControllerAtendimento.Alterar)
router.put('/Concluir/', ControllerAtendimento.Concluir)

export default router