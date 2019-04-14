import hat from 'hat';
import models from '../models/index';

const Products = models.Products;
const Status = models.Status;

const list = async(req, res, next) => {
 const result: Array = await Status.findAll({});
 res.status(200).send(result);
 await next;
};

const get = async(req, res, next) => {
 const { id }: { id: string } = req.params;
 const result: Object = await Status.find({
   where: { id }
 });
 res.status(200).send(result);
 await next;
};
const create = async(req, res, next) => {
 const {
   status,
 }: {
   status: string,
 } = req.body;

 await Status.create({
   status,
 });
 res.status(201).send({ Info: `Status has been created`})
 await next;
};

const update = async(req, res, next) => {
 const { id }: { id: string } = req.params;
 const updateData:{
   status: ?string,
 } = Object.assign({}, req.body);

 await Status.update(updateData, { where: { id }});
 res.status(204).send({ Info: `Status with id: ${id} has been updated` })
 await next;
};

const del = async(req, res, next) => {
 const { id }: { id: string } = req.params;
 await Status.destroy({ where: { id }});
 res.status(202).send({ Info: `Status with id: ${id} has been removed`})
 await next;
};

export default {
  list,
  get,
  create,
  update,
  del
}