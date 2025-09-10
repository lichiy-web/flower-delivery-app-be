import { Router } from 'express';
import { ctrlErrWrapper } from '../utils/ctrlErrWrapper.js';
import { getFlowersController } from '../controllers/flowers.js';

const router = Router({ mergeParams: true });

router.get('/', ctrlErrWrapper(getFlowersController));

export default router;
