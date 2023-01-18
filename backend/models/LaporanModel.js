import { Sequelize } from "sequelize";
import db from "../config/Database.js";

import Users from "./UsersModel.js";

const { DataTypes } = Sequelize;

const Laporan = db.define('laporan', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 30]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
})

Users.hasMany(Laporan);
Laporan.belongsTo(Users, { foreignKey: 'userId' })

export default Laporan;