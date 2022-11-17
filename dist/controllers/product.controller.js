"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const Product_js_1 = require("../models/Product.js");
const Image_js_1 = require("../models/Image.js");
const product_service_1 = require("../services/product.service");
exports.productController = {
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product_id = req.params.id;
        const product = yield Product_js_1.Product.findOne({ where: { id: product_id } });
        res.json(product);
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield Product_js_1.Product.findAll({ include: Image_js_1.Image });
        res.json(products);
    }),
    getByCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () { }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const files = req.files;
        const result = yield product_service_1.productService.createProduct(req.body, files);
        const response = {
            code: (result === null || result === void 0 ? void 0 : result.statusCode) || 500,
            message: (result === null || result === void 0 ? void 0 : result.message) || 'Error'
        };
        res.status(response.code).json(response.message);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield Product_js_1.Product.findOne({
                where: { id },
            });
            product === null || product === void 0 ? void 0 : product.set(req.body);
            yield (product === null || product === void 0 ? void 0 : product.save());
            res.send(product);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                return res.status(500).json({ message: err.message });
            }
        }
    }),
    destroy: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send("Delete a product");
    }),
    upload: (req, res) => {
        res.send("imagen subida perri");
    },
};
//# sourceMappingURL=product.controller.js.map