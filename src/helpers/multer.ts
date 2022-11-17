import multer from 'multer';

let uploadImage: any;

try {
    const storage = multer.diskStorage({
        destination: 'uploads',
        filename:  (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
    uploadImage = multer({
        storage,
        limits:{
            
        }
    }).array('image');

    
} catch (error) {
    console.log('error');
    
}
export default uploadImage;
