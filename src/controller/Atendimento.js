import ServicoAtendimento from '../service/Atendimento.js'

class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            const Atendimentos = await ServicoAtendimento.Buscar()

            res.send({ message: Atendimentos })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const conclusao = req.body.conclusao

            await ServicoAtendimento.Criar(dia, hora, valor, conclusao)

            res.send({ message: 'Marcado com sucesso o atendimento'})
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.query.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor

            await ServicoAtendimento.Alterar(id, dia, hora, valor)

            res.send({ message: 'Alterado!' })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Concluir(req, res) {
        try {
            const id = req.query.id
            const conclusao = req.body.conclusao

            await ServicoAtendimento.Concluir(id, conclusao)

            res.send({ message: 'Concluido!' })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

   
}

export default new ControllerAtendimento()