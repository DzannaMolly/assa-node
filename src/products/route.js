import { Router } from 'express';
import actions from './actions';

const productsRouter = Router();

productsRouter.get('/product', actions.list);
productsRouter.get('/product/:serialNumber', actions.get);
productsRouter.post('/product', actions.create);
productsRouter.put('/product/:serialNumber', actions.update);
productsRouter.delete('/product/:serialNumber', actions.del);

export default productsRouter;

