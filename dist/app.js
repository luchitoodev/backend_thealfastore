"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
// settings
app.set('port', 3000);
//middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
// routes
app.get("/", (req, res) => {
    res.send("Hello world!!");
});
app.use('/product', product_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map