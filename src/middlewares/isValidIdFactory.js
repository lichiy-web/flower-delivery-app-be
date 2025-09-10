import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';
import { RES_MSG } from '../constants/res-msg.js';

const DEFAULT_ID_PARAM_NAME = 'shopId';

export const isValidIdFactory =
  (idParamName = DEFAULT_ID_PARAM_NAME) =>
  (req, res, next) => {
    const id = req.params[idParamName];
    if (!isValidObjectId(id)) {
      next(
        createHttpError(400, RES_MSG[400].default, {
          details: RES_MSG[400].invalidId(idParamName, id),
        }),
      );
    }
    next();
  };
