import {Request, Response, NextFunction} from 'express';
import Logger from '../utils/logger';

export default function loggerMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  Logger.request(request);
  next();
}