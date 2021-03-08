import express from 'express';
import pgClient from './db/connectDB'
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './utils/logger';
import loggerMiddleware from './middleware/loggerMiddleware';

const app = express()

pgClient.connect((err) =>{
    if (err) {
        Logger.error("Database connection failed. Error:" + err)
    }
    Logger.info("Database connection succesfully created");
})

app.use(cors())
app.use(express.json())
app.use(loggerMiddleware)



export default app;
