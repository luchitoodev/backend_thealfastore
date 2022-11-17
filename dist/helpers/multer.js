"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
let uploadImage;
try {
    const storage = multer_1.default.diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });
    uploadImage = (0, multer_1.default)({
        storage,
        limits: {}
    }).array('image');
}
catch (error) {
    console.log('error');
}
exports.default = uploadImage;
//# sourceMappingURL=multer.js.map