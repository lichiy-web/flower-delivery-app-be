import { Router } from 'express';
import {
  createOrderController,
  getOrderController,
  patchOrderController,
} from '../controllers/orders.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';
import { createOrderSchema, updateOrderSchema } from '../validation/orders.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidIdFactory } from '../middlewares/isValidIdFactory.js';

const router = Router();

router.get('/:orderId', isValidIdFactory('orderId'), ctrlErrWrapper(getOrderController));
router.post('/', validateBody(createOrderSchema), ctrlErrWrapper(createOrderController));
router.patch('/', validateBody(updateOrderSchema), ctrlErrWrapper(patchOrderController));

export default router;
