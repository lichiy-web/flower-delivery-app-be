import { Router } from 'express';
import { rootController } from '../controllers/rootController.js';
import orderRouter from './orders.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';

const router = new Router();

router.get('/', ctrlErrWrapper(rootController));
router.use('/order', orderRouter);

export default router;
