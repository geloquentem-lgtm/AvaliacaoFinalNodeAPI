import ServicoCliente from '../service/Cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await ServicoCliente.Buscar()

            res.send({ message: nomes })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.query.id
            const nome = await ServicoCliente.BuscarUm(id)

            res.send({ message: nome })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const Email = req.body.Email
            const senha = req.body.senha

            await ServicoCliente.Criar(nome, Email, senha)

            res.send({ message: 'Criado com sucesso o cliente'})
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.query.id
            const nome = req.body.nome
            const Email = req.body.Email
            const senha = req.body.senha

            await ServicoCliente.Alterar(id, nome, Email, senha)

            res.send({ message: 'Alterado com sucesso!' })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async AlterarNome(req, res) {
        try {
            const id = req.query.id
            const nome = req.body.nome

            await ServicoCliente.AlterarNome(id, nome)

            res.send({ message: 'Alterado com sucesso!' })
        } catch (e) {
            res.send({ message: e.message})
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.query.id
            await ServicoCliente.Deletar(id)

            res.send({ message: 'Deletado com sucesso!' })
        } catch (e) {
            res.send({ message: e.message})
        }
    }
}

export default new ControllerCliente()