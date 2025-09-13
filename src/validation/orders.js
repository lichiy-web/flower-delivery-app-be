import baseJoi from 'joi';
import JoiTzExtention from 'joi-tz';
const Joi = baseJoi.extend(JoiTzExtention);

import { idValidatorFactory } from '../utils/isValidMongoId.js';
import { OrderSchema } from '../db/models/Order.js';

const PRODUCT_TYPES = OrderSchema.tree.items[0].type.enum;
const STATUS_LIST = OrderSchema.tree.status.enum;

export const createOrderSchema = Joi.object({
  shopId: Joi.string()
    .custom(idValidatorFactory('custom.shopId.invalid'), 'Validate shopId!')
    .required()
    .messages({
      'custom.shopId.invalid': 'Invalid shopId!',
      'string.empty': 'shopId is required',
      'any.required': 'shopId is required',
    }),
  items: Joi.array().items(
    Joi.object({
      type: Joi.string()
        .valid(...PRODUCT_TYPES)
        .messages({
          'any.only': `Product type must only be one of [${PRODUCT_TYPES.join(', ')}]`,
        }),
      productId: Joi.string()
        .custom(idValidatorFactory('custom.productId.invalid'), 'Validate productId!')
        .required()
        .messages({
          'custom.productId.invalid': 'Invalid productId!',
          'string.empty': 'productId is required',
          'any.required': 'productId is required',
        }),
      name: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number().min(1).required().messages({
        'number.min': 'Quantity of flowers in a bouquet must be greater than 0',
        'any.required': 'Quantity of flowers in a bouquet is required',
      }),
    }),
  ),
  totalAmount: Joi.number().required(),
  status: Joi.string()
    .valid(...STATUS_LIST)
    .messages({
      'any.only': `Product type must only be one of [${STATUS_LIST.join(', ')}]`,
    }),
  timeZone: Joi.string().tz().required(),
  deliveryTo: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }),
});

export const updateOrderSchema = Joi.object({
  shopId: Joi.string()
    .custom(idValidatorFactory('custom.shopId.invalid'), 'Validate shopId!')
    .messages({
      'custom.shopId.invalid': 'Invalid shopId!',
    }),
  items: Joi.array().items(
    Joi.object({
      type: Joi.string()
        .valid(...PRODUCT_TYPES)
        .messages({
          'any.only': `Product type must only be one of [${PRODUCT_TYPES.join(', ')}]`,
        }),
      productId: Joi.string()
        .custom(idValidatorFactory('custom.productId.invalid'), 'Validate productId!')
        .messages({
          'custom.productId.invalid': 'Invalid productId!',
        }),
      _id: Joi.string()
        .custom(idValidatorFactory('custom.itemId.invalid'), 'Validate itemId!')
        .required()
        .messages({
          'custom.itemId.invalid': 'Invalid itemId!',
        }),
      name: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number().min(1).messages({
        'number.min': 'Quantity of flowers in a bouquet must be greater than 0',
      }),
    })
      .or('_id, productId')
      .messages({
        'object.missing': 'Each item must contain at least one of the fields: _id or productId',
      }),
  ),
  totalAmount: Joi.number(),
  status: Joi.string()
    .valid(...STATUS_LIST)
    .messages({
      'any.only': `Product type must only be one of [${STATUS_LIST.join(', ')}]`,
    }),
  deliveryTo: Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    address: Joi.string(),
  }),
  remove: Joi.array().items(
    Joi.string()
      .custom(idValidatorFactory('custom.itemId.invalid'), 'Validate itemId in the remove list!')
      .messages({
        'custom.itemI.invalid': 'Invalid itemId in the remove list!',
      }),
  ),
});
