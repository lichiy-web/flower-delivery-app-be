import { Router } from 'express';
import {
  createOrderController,
  getAllOrdersController,
  getOrderController,
  updateOrderController,
} from '../controllers/orders.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';

const router = Router();

router.get('/', ctrlErrWrapper(getAllOrdersController));
router.get('/:orderId', ctrlErrWrapper(getOrderController));
router.post('/', ctrlErrWrapper(createOrderController));
router.patch('/', ctrlErrWrapper(updateOrderController));

export default router;
