"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const database_js_1 = require("../database/database.js");
exports.Category = database_js_1.sequelize.define('categories', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    category_name: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
//# sourceMappingURL=Category.js.map