import ServicePets from "../service/pets.js"
class ControllerPets {
    async FindAll(_, res) {
        try {
            const pets = await ServicePets.FindAll()
            res.status(200).send({ pets })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Create(req, res) {
        try {
            const {nome,raca,pelagem,clienteId } = req.body
            await ServicePets.Create(nome,raca,pelagem,clienteId)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
export default new ControllerPets()