import express from 'express'
import route from './src/route/Cliente.js'
import Database from './src/config/Database.js'
import router from './src/route/Atendimento.js'

const app = express()
app.use(express.json())

app.use('/api', router)
app.use('/api', route)

Database.db 
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("servidor rodando na porta 3000")
        })

    }) 
    .catch ((e) => {
        console.log(e) 
    })