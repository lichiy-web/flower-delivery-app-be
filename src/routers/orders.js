import { Router } from 'express';
import {
  createOrderController,
  getOrderController,
  updateOrderController,
} from '../controllers/orders.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';
import { createOrderSchema } from '../validation/orders.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidIdFactory } from '../middlewares/isValidIdFactory.js';

const router = Router();

router.get('/:orderId', isValidIdFactory('orderId'), ctrlErrWrapper(getOrderController));
router.post('/', validateBody(createOrderSchema), ctrlErrWrapper(createOrderController));
router.patch('/', ctrlErrWrapper(updateOrderController));

export default router;
