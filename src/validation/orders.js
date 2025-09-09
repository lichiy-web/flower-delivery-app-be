import Joi from 'joi';
import { idValidatorFactory } from '../utils/isValidMongoId.js';
import { OrderSchema } from '../db/models/Order.js';

const PRODUCT_TYPES = OrderSchema.tree.items[0].productType.enum;
const STATUS_LIST = OrderSchema.tree.status.enum;

export const orderAddSchema = Joi.object({
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
      productType: Joi.string()
        .valid(...PRODUCT_TYPES)
        .required()
        .messages({
          'any.only': `Product type must only be one of [${PRODUCT_TYPES.join(', ')}]`,
          'string.empty': 'Product type is required',
          'any.required': 'Product type is required',
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
  deliveryTo: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }),
});

// const testOrder = {
//   shopId: '67f6364eeba7c0aedb007d73',
//   items: [
//     {
//       productType: 'flower',
//       productId: '67f6381e907fe15ef69f1df4',
//       name: 'rose',
//       price: 10,
//       quantity: 3,
//     },
//   ],
//   totalAmount: 10,
//   status: 'pending',
//   deliveryTo: {
//     name: 'Jhon Dow',
//     email: 'jhon.dow@yahoo.com',
//     phone: '+380506352410',
//     address: 'Kharkiv, Main st, 6',
//   },
// };

// console.log(orderAddSchema.validate(testOrder));
