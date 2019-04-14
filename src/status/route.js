import { Router } from 'express';
import actions from './actions';

const statusRouter = Router();

statusRouter.get('/status', actions.list);
statusRouter.get('/product/:id', actions.get);
statusRouter.post('/status', actions.create);
statusRouter.put('/status/:id', actions.update);
statusRouter.delete('/status/:id', actions.del);

export default statusRouter;