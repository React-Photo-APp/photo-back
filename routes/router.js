import { Router } from 'express';
import homeRoutes from './homeRoutes';
import picRoutes from './pictureRoutes';

const router = Router();

router.use('/', homeRoutes);
router.use('/pic', picRoutes);

export default router;
