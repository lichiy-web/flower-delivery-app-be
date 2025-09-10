import { Router } from 'express';

import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';
import { getAllShopsController } from '../controllers/shops.js';

const router = Router();

router.get('/', ctrlErrWrapper(getAllShopsController));

export default router;
