export default (sequelize, DataType) => {
 const Status = sequelize.define('status',
 {
   id: {
     type: DataType.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   status: {
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
 return Status;
}