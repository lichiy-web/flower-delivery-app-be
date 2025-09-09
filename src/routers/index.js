import { Router } from 'express';
import { rootController } from '../controllers/rootController.js';
import orderRouter from './orders.js';

const router = new Router();

router.get('/', rootController);
router.use('/order', orderRouter);

export default router;
