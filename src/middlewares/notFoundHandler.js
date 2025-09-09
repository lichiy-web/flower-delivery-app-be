import createHttpError from 'http-errors';
import { RES_MSG } from '../constants/res-msg.js';

export const notFoundHandler = (err, req, res, next) => {
  next(createHttpError(404, RES_MSG[404].default));
};
