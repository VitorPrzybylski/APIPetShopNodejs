import api from "./api"

export const getclientes = async () => {
    const response = await api.get('/api/v1/clientes')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.clientes
}

export const createCliente = async (cliente) => {
   const response = await api.post('/api/v1/cliente', cliente)

   return response
}
