const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/Databse");

class UserModel extends Model {
  static associate(models) {
    UserModel.hasMany(models.TaskModel, { foreignKey: "userId" });
  }
}
UserModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserModel",
  }
);

module.exports = UserModel;
