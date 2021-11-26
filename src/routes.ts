import { Router } from 'express';
import { URLController } from './controller/URLController';

const router = Router();

    const urlController = new URLController()

    router.post('/shorten',urlController.shorten )

    router.get('/:hash', urlController.redirect)

export default router
