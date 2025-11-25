import database from "../config/database.js";
import Clientes from './clientes.js'

class Pets {
    constructor() {
        this.model = database.db.define('pets', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            raca: {
                type: database.db.Sequelize.STRING
            },
            pelagem: {
                type: database.db.Sequelize.STRING
            },
            clientId: {
                type:database.db.Sequelize.INTEGER,
                forgeinKey:true
            }
        })
        this.model.belongsTo(Clientes)
        Clientes.hasMany(this.model,{ foreignKey: 'clientId' })

        
    }
}
export default new Pets().model