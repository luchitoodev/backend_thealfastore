"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.productService = void 0;
const Product_js_1 = require("../models/Product.js");
const Image_js_1 = require("../models/Image.js");
const cloudinary_1 = require("../helpers/cloudinary");
const fs = __importStar(require("fs/promises"));
exports.productService = {
    createProduct: (body, files) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, price, category_id } = body;
        try {
            if (files && body) {
                const product = yield Product_js_1.Product.create({
                    name,
                    price,
                    category_id,
                    state: true,
                });
                for (let i = 0; i < files.length; i++) {
                    const result = yield (0, cloudinary_1.uploadImage)(files[i].path);
                    const url = result.secure_url;
                    const product_id = product.id;
                    const image = yield Image_js_1.Image.create({
                        url,
                        product_id,
                    });
                    yield fs.unlink(files[i].path);
                    return { statusCode: 201, message: "product created successfully" };
                }
            }
            else {
                return { statusCode: 400, message: "bad request: no files or no body" };
            }
        }
        catch (err) {
            if (err) {
                return { statusCode: 400, message: "bad request" };
            }
        }
    }),
};
//# sourceMappingURL=product.service.js.map