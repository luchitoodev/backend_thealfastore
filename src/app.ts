import morgan from 'morgan';
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import productRouter from './routes/product.routes'


const app: Application = express();

// settings
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

const corsOptions ={
    origin:'*', 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

// routes
app.get("/", (req:Request , res: Response) => {
    res.send("Hello world!!")
})

app.use('/product', productRouter)


export default app;
