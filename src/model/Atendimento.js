import Database from '../config/Database.js'

class Atendimento {
    constructor() {
        this.model = Database.db.define('Atendimento', {
            id: {
                type: Database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: Database.db.Sequelize.INTEGER

            },
            hora: {
                type: Database.db.Sequelize.STRING
            },
            valor: {
                type: Database.db.Sequelize.INTEGER
            },
            conclusao: {
                type: Database.db.Sequelize.BOOLEAN
            },      
        })
    }
}

export default new Atendimento().model