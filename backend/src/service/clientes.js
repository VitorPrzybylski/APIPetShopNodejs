import Clientes from "../model/clientes.js"
import Pets from "../model/pets.js";
class ServiceClientes {
    async FindAll() {
        return Clientes.findAll()
    }
    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const cliente = await Clientes.findByPk(id, {
            include: [{
                model: Pets
            }]
        });

        if (!cliente) {
            throw new Error(`Usuário ${id} não encontrado`)
        }

        return cliente
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