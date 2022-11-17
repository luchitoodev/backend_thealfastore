import { productController } from '../controllers/product.controller';
import {Request, Response} from 'express'
import uploadImage from '../helpers/multer';
import multer from 'multer';


export const handlerMulter = (req: Request, res: Response) => {
    uploadImage(req, res, function (err: Error) {
      (err instanceof multer.MulterError) ? res.status(400).json("Error in the file") : productController.create(req, res);
    });
  }