"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Image_1 = require("./Image");
exports.Product = database_1.sequelize.define('products', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER
    },
    category_id: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});
exports.Product.hasMany(Image_1.Image, {
    foreignKey: 'product_id',
    sourceKey: 'id'
});
Image_1.Image.belongsTo(exports.Product, {
    foreignKey: 'product_id',
    targetKey: 'id'
});
//# sourceMappingURL=Product.js.map