import { Router } from 'express';
import flowersRouter from './flowers.js';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';
import { getAllShopsController } from '../controllers/shops.js';
import { isValidIdFactory } from '../middlewares/isValidIdFactory.js';

const router = Router();

router.get('/', ctrlErrWrapper(getAllShopsController));
router.use('/:shopId/flowers', isValidIdFactory(), flowersRouter);
export default router;
