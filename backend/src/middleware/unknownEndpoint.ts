import { Request, Response } from 'express';

const unknownEndpoint = (_req: Request, res: Response) => {
    res.status(404).send({ 
        status: 404, 
        message: 'Page not found' 
    })
}

export default unknownEndpoint;
