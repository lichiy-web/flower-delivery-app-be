import { Router } from 'express';
import { createOrderController } from '../controllers/orders.js';

const router = new Router();

router.post('/', createOrderController);

export default router;
