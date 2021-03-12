import {NextFunction, Request, Response, Router} from 'express';
import createUser from '../db/createUser';
import UserAlreadyExists from '../errors/UserAlreadyExists';

const userRouter: Router = Router() 

userRouter.get('/', async (req: Request, res:Response) => {
    
})

userRouter.post('/login', async (req: Request, res:Response, next:NextFunction) => {
    const { userName } = req.body;
    console.log(userName)
    const newUser = await createUser(userName);
   
    if (!newUser){
        next(new UserAlreadyExists(userName))
    } 
   
    res.send({
        status: 200,
        message: `User "${userName}" succesfully created.`
    })
})

userRouter.post('/signin', async (req: Request, res:Response) => {

})

export default userRouter;