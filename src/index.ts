import app from './app'
import dotenv from 'dotenv'
dotenv.config()

//DATABASE CONECTION
import { sequelize } from './database/database.js'
import "./models/Product"
const database = async () => {
    try {
        await sequelize.sync({ alter: true })
        console.log('Database Connected.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
database();


const main = () =>{
    const port = process.env.PORT || app.get('port')
    app.listen(port);
    console.log(`🚀 listening on ${port}`)
}

main();