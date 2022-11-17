import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()
const {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY} = process.env

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
})


export const uploadImage = async (filePath: string) => {
  await cloudinary.image(filePath)
  return await cloudinary.uploader.upload(filePath, {
    folder: 'products',
    width: 800,
    crop: "scale"
  })
}

export const deleteImage = async (publicId: string) => {
  return await cloudinary.uploader.destroy(publicId)
}