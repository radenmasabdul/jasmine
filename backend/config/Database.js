import { Sequelize } from "sequelize";

const db = new Sequelize('jasmine', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db;