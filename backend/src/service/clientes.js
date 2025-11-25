import Clientes from "../model/clientes.js"
class ServiceClientes {
    async FindAll() {
        return Clientes.findAll()
    }
    async Create(nome, email) {
        if (!nome || !email) {
            throw new Error("favor preencher todos os campos")
        }
        await Clientes.create({
            nome,
            email
        })
    }
}
export default new ServiceClientes()