import { Request, Response } from 'express'
import { Product } from "../models/Product.js";
import { Image } from "../models/Image.js";
import { productService } from '../services/product.service';

export const productController = {
  getOne: async (req: Request, res: Response) => {
    const product_id = req.params.id;
    const product = await Product.findOne({where: { id : product_id }});
    res.json(product);
  },
  getAll: async (req: Request, res: Response) => {
    const products = await Product.findAll({ include: Image });
    res.json(products);
  },
  getByCategory: async (req: Request, res: Response) => {},

  create: async (req: Request, res: Response) => {

    const files= req.files as Express.Multer.File[];
    const result = await productService.createProduct(req.body, files)
    const response = {
        code: result?.statusCode || 500,
        message: result?.message || 'Error'
    }
    res.status(response.code).json(response.message);
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      product?.set(req.body);
      await product?.save();
      res.send(product);
    } catch (err) {
        if(err instanceof Error) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
    }
  },

  destroy: async (req: Request, res: Response) => {
    res.send("Delete a product");
  },
  upload: (req: Request, res: Response) => {
    res.send("imagen subida perri");
  },
};
