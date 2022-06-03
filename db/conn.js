const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})
try {

    sequelize.authenticate()
    console.log("conectamos ao banco com sucesso")

}catch(error) {
   console.log(`Nao foi possivel conectar ao banco: ${error}`)
}

module.exports = sequelize