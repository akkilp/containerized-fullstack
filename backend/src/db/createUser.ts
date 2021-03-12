import pgClient from './connectDB';
import { userCredentials } from '../types';
import Logger from '../utils/logger';

const createUserQuery: string = 'INSERT INTO users (name) VALUES ($1) RETURNING name;'

const createUser = async (userName:userCredentials) => {
    try{
        const newUser = await pgClient.query(createUserQuery, [userName])
        return newUser
    } catch (err){
        Logger.error("Create user failed", err)
        return false
    }
}

export default createUser;
