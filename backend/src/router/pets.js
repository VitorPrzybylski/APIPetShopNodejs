import express from 'express'
import ControllerPets from "../controller/pets.js"

const router = express.Router()
router.get('/pets', ControllerPets.FindAll)
router.post('/pet/create', ControllerPets.Create)

export default router