const Models = require("../models/indexModels");

module.exports.NewTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Models.TaskModel.create({
      title,
      description,
    });
    return res.json({
      message: "Task Created",
      newTask,
    });
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};

module.exports.GetTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Models.TaskModel.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }
    return res.json({
      message: "Task Found",
      task,
    });
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};

module.exports.getAllTasks = async (req, res) => {
  const { userId } = req.params;
  try {
    const tasks = await Models.TaskModel.findAll({ where: { userId } });

    if (tasks.length === 0) {
      return res.status(404).json({
        message: "No tasks found for the given user.",
      });
    }

    return res.json(tasks);
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};

module.exports.DeleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Models.TaskModel.findByPk(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    await task.destroy();

    return res.json({
      message: "Task deleted successfully.",
    });
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};
