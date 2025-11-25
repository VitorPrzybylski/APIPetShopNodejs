import express from 'express'
import ControllerClientes from "../controller/clientes.js"

const router = express.Router()
router.get('/clientes', ControllerClientes.FindAll)
router.post('/cliente/create', ControllerClientes.Create)
export default router