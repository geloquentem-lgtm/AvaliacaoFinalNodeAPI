import Database from '../config/Database.js'

class Cliente {
    constructor() {
        this.model = Database.db.define('Cliente', {
            id: {
                type: Database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Database.db.Sequelize.STRING
            },
            Email: {
                type: Database.db.Sequelize.STRING
            },
            senha: {
                type: Database.db.Sequelize.STRING
            }
        })
    }
    
}

export default new Cliente().model