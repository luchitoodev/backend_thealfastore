import { Router } from "express";
import { productController } from "../controllers/product.controller";
import { handlerMulter } from "../middlewares/handlerMulter";

const router = Router();

router.get("/products", productController.getAll);
router.get("/:id", productController.getOne);
router.get("/category/:category", productController.getByCategory);
router.post("/create", handlerMulter); //handleMulter ve si hay archivos y pasa al controller, sino captura error
router.put("/update/:id", productController.update);
router.delete("/destroy", productController.destroy);
router.post("/upload", productController.upload);

export default router;
