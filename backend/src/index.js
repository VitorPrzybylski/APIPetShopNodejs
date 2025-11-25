import express from 'express'
import routerCliente from './router/clientes.js'
import routerPets from './router/pets.js'
import database from './config/database.js'
const app = express();

app.use(express.json())

app.use('/api/v1',routerCliente)
app.use('/api/v1',routerPets)
const port =3000
database.db
    .sync({force:false})
    .then((_)=>{
        app.listen(port,() =>{
            console.info("Servidor rodando na porta"+port)
        })
    })
    .catch((e)=>{
        console.log ("nao conectou com o banco"+e)
    })