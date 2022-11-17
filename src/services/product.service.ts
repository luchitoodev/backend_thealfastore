import { Product } from "../models/Product.js";
import { Image } from "../models/Image.js";
import { uploadImage } from "../helpers/cloudinary";
import * as fs from "fs/promises";
import {RequestBody} from '../interfaces/RequestInterfaces'


export const productService = {
  createProduct: async (body: RequestBody, files: Express.Multer.File[]) => {
    const { name, price, category_id } = body;
    try {
      if (files && body) {
        const product = await Product.create({
          name,
          price,
          category_id,
          state: true,
        });
        for (let i = 0; i < files.length; i++) {
          const result = await uploadImage(files[i].path);
          const url = result.secure_url;
          const product_id = product.id;
          const image = await Image.create({
            url,
            product_id,
          });
          await fs.unlink(files[i].path);
          return { statusCode: 201, message: "product created successfully" };
        }
      } else {
        return { statusCode: 400, message: "bad request: no files or no body" };
      }
    } catch (err) {
      if (err) {
        return { statusCode: 400, message: "bad request" };
      }
    }
  },
};
