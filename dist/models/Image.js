"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const sequelize_1 = require("sequelize");
const database_js_1 = require("../database/database.js");
exports.Image = database_js_1.sequelize.define('images', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
//# sourceMappingURL=Image.js.map