import Pets from "../model/pets.js"
class ServicePets {
    async FindAll() {
        return Pets.findAll()
    }
    async Create(nome,raca,pelagem,clientId) {
        if (!nome || !raca|| !pelagem|| !clientId) {
            throw new Error("favor preencher todos os campos de pets")
        }
        await Pets.create({
           nome,
           raca,
           pelagem,
           clientId
        })
    }
}

export default new ServicePets()