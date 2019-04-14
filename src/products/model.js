export default (sequelize, DataType) => {
 const Product = sequelize.define('product',
 {
   id: {
     type: DataType.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   productId: {
     type: DataType.BIGINT,
     allowNull: false,
     unique: true
   },
   statusId: {
     type: DataType.INTEGER,
     allowNull: false
   },

   serialNumber: {
     type: DataType.STRING,
     allowNull: false
   },
   createdAt: {
     type: DataType.DATE,
     default: new Date(Date.now()),
   },
   updatedAt: DataType.DATE,
   deletedAt: DataType.DATE,
 });
 return Product;
}
