import ServiceClientes from "../service/clientes.js"
class ControllerClientes {
    async FindAll(_, res) {
        try {
            const clientes = await ServiceClientes.FindAll()
            res.status(200).send({ clientes })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Create(req, res) {
        try {
            const { nome, email } = req.body
            await ServiceClientes.Create(nome, email)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
export default new ControllerClientes()