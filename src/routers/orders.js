import { Router } from 'express';
import { createOrderController } from '../controllers/orders.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';

const router = new Router();

router.post('/', ctrlErrWrapper(createOrderController));

export default router;
