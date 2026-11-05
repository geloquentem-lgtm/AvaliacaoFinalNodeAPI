import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_db_mdu2',
            username: 'exemplo_db_mdu2_user',
            password: 'DVQQzVi64RbGVnVuFxmYLhf3yfI1MueV',
            host: 'dpg-dbh79vsipgvc73d36bqg-a.ohio-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()