import { Router } from 'express';
import { rootController } from '../controllers/rootController.js';

const router = new Router();

router.get('/', rootController);

export default router;
