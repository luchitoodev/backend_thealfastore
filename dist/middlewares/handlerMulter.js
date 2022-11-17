"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerMulter = void 0;
const product_controller_1 = require("../controllers/product.controller");
const multer_1 = __importDefault(require("../helpers/multer"));
const multer_2 = __importDefault(require("multer"));
const handlerMulter = (req, res) => {
    (0, multer_1.default)(req, res, function (err) {
        (err instanceof multer_2.default.MulterError) ? res.status(400).json("Error in the file") : product_controller_1.productController.create(req, res);
    });
};
exports.handlerMulter = handlerMulter;
//# sourceMappingURL=handlerMulter.js.map