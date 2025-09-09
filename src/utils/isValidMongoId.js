import { Types } from 'mongoose';

export const isValidMongoId = _id => Types.ObjectId.isValid(_id);

export const idValidatorFactory = errorName => (_id, helpers) => {
  if (!isValidMongoId(_id)) return helpers.error(errorName);
  return _id;
};
