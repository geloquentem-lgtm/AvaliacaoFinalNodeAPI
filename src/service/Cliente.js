import Cliente from '../model/Cliente.js'

class ServicoCliente {
    
    async Buscar() {
        return Cliente.findAll()
    }

    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error('Favor informar a id correta')
        }
        return Cliente.findByPk(id)
    }

    async Criar(nome, Email, senha) {
        if (!nome || !Email || !senha ) {
            throw new Error('Favor informar todas as informações')
        }

        await Cliente.create({nome, Email, senha})
    }

    async Alterar(id, nome, Email, senha) {
        if (!id || isNaN(id) || !nome || !Email || !senha) {
            throw new Error('Favor informar os dados corretos')
        }

        const ClienteAlterar = await Cliente.findByPk(id)

        if (!ClienteAlterar) {
            throw new Error('Pessoa não encontrada ')
        }

        ClienteAlterar.nome = nome
        ClienteAlterar.Email = Email
        ClienteAlterar.senha = senha

        await ClienteAlterar.save()
    }

    async AlterarNome(id, nome) {
        if (!id || isNaN(id) || !nome) {
            throw new Error('Favor informar os dados corretos')
        }

        const ClienteAlterar = await Cliente.findByPk(id)

        if (!ClienteAlterar) {
            throw new Error('Pessoa não encontrada ')
        }

        ClienteAlterar.nome = nome

        await ClienteAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error('Favor informar a id correta')
        }

        const ClienteDeletar = await Cliente.findByPk(id)

        if (!ClienteDeletar) {
            throw new Error('Pessoa não encontrada ')
        }

        await ClienteDeletar.destroy()
    }

}

export default new ServicoCliente()