import hat from 'hat';
import models from '../models/index';

const Products = models.Products;
const Status = models.Status;

const list = async(req, res, next) => {
 const result: Array = await Products.findAll({
   include: [
     {
       model: models.Status
     }
   ]
 });
 res.status(200).send(result);
 await next;
};

const get = async(req, res, next) => {
 const { serialNumber }: { serialNumber: string } = req.params;
 const result: Object = await Products.find({
   where: { serialNumber },
   include: [
     {
       model: models.Status
     }
   ]
 }).then(function(result){        
        res.status(200).send(result.status.dataValues.status);

    }).catch(function(err){
        res.status(500).send(err);
    });
 
 await next;
};
const create = async(req, res, next) => {
 const {
   productId,
   statusId,
   serialNumber
 }: {
   productId: string,
   statusId: string,
   serialNumber: string,
 } = req.body;

 await Products.create({
   productId,
   statusId,
   serialNumber
 });
 res.status(201).send({ Info: `Products with serial number: ${serialNumber} has been created`})
 await next;
};
const update = async(req, res, next) => {
 const { serialNumber }: { serialNumber: string } = req.params;
 const updateData:{
   productId: ?string,
   serialNumber: ?string,
 } = Object.assign({}, req.body);

 await Products.update(updateData, { where: { serialNumber }});
 res.status(204).send({ Info: `Product with serial number: ${serialNumber} has been updated` })
 await next;
};
const del = async(req, res, next) => {
 const { serialNumber }: { serialNumber: string } = req.params;
 await Products.destroy({ where: { serialNumber }});
 res.status(202).send({ Info: `Product with serial number: ${serialNumber} has been removed`})
 await next;
};

export default {
  list,
  get,
  create,
  update,
  del
}