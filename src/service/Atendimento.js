import Atendimento from '../model/Atendimento.js'

class ServicoAtendimento {
    
    async Buscar() {
        return Atendimento.findAll()
    }

    async Criar(dia, hora, valor, conclusao) {
        if (!dia || !hora || !valor || conclusao) {
            throw new Error('Favor informar todas as informações do atendimento')
        }

        await Atendimento.create({dia, hora, valor, conclusao})
    }
    
    async Alterar(id, dia, hora, valor) {
        if (!id || isNaN(id) || !dia || !hora || !valor) {
            throw new Error('Favor informar os dados corretos')
        }

        const AtendimentoAlterar = await Atendimento.findByPk(id)

        if (!AtendimentoAlterar) {
            throw new Error('Pessoa não encontrada ')
        }

        AtendimentoAlterar.dia = dia
        AtendimentoAlterar.hora = hora
        AtendimentoAlterar.valor = valor

        await AtendimentoAlterar.save()
    }

    async Concluir(id) {
        if (!id || isNaN(id)) {
            throw new Error('Favor informar os dados corretos')
        }

        const AtendimentoAlterar = await Atendimento.findByPk(id)

        if (!AtendimentoAlterar) {
            throw new Error('Pessoa não encontrada ')
        }

        AtendimentoAlterar.conclusao = true

        await AtendimentoAlterar.save()
    }

}

export default new ServicoAtendimento()