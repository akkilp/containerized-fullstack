import express from 'express';
import pgClient from './db/connectDB'
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './utils/logger';
import loggerMiddleware from './middleware/loggerMiddleware';

import userRouter from './routes/users';
import quoteRouter from './routes/quotes';
import playlistRouter from './routes/playlist';
import errorMiddleware from './middleware/errorMiddleware';
import unknownEndpoint from './middleware/unknownEndpoint';

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

app.use('/api/users', userRouter)
app.use('/api/quotes', quoteRouter)
app.use('/api/playlists', playlistRouter)

app.use(unknownEndpoint)
app.use(errorMiddleware)




export default app;
