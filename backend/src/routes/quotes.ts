import {NextFunction, Request, Response, Router} from 'express';
import createQuote from '../db/createQuote';
import ContentAlreadyExists from '../errors/ContentAlreadyExists';
import { createQuoteType } from '../types';

const quoteRouter: Router = Router() 

quoteRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {

})

quoteRouter.post('/', async (req: Request, res:Response, next: NextFunction) => {
    const params = req.body as createQuoteType;
    console.log("laukaisu")
    const newQuote = await createQuote(params);

    if (!newQuote) {
        next(new ContentAlreadyExists)
    }

    else res.status(200).send({
        status: 200,
        message: "Quote succesfully created",
        content: newQuote
    })
})

quoteRouter.get('/:id', async (req: Request, res:Response) => {

})

quoteRouter.post('/:id', async (req: Request, res:Response) => {

})

quoteRouter.patch('/:id', async (req: Request, res:Response) => {

})

quoteRouter.delete('/:id', async (req: Request, res:Response) => {

})

export default quoteRouter;