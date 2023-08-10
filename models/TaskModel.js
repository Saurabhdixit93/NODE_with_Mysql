const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/Databse");

class TaskModel extends Model {
  static associate(models) {
    TaskModel.belongsTo(models.UserModel, { foreignKey: "userId" });
  }
}

TaskModel.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TaskModel",
  }
);

module.exports = TaskModel;
