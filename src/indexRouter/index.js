import { Router } from 'express';

import products from '../products/index';
import status from '../status/index';


const indexRouter = Router();

indexRouter.use(products.route);
indexRouter.use(status.route);


export default indexRouter;