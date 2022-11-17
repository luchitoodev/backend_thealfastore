"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const handlerMulter_1 = require("../middlewares/handlerMulter");
const router = (0, express_1.Router)();
router.get("/products", product_controller_1.productController.getAll);
router.get("/:id", product_controller_1.productController.getOne);
router.get("/category/:category", product_controller_1.productController.getByCategory);
router.post("/create", handlerMulter_1.handlerMulter); //handleMulter ve si hay archivos y pasa al controller, sino captura error
router.put("/update/:id", product_controller_1.productController.update);
router.delete("/destroy", product_controller_1.productController.destroy);
router.post("/upload", product_controller_1.productController.upload);
exports.default = router;
//# sourceMappingURL=product.routes.js.map