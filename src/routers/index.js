import { Router } from 'express';
import { rootController } from '../controllers/rootController.js';
import ordersRouter from './orders.js';
import shopsRouter from './shops.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';

const router = Router();

router.get('/', ctrlErrWrapper(rootController));
router.use('/orders', ordersRouter);
router.use('/shops', shopsRouter);

export default router;
