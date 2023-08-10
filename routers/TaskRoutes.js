const { Router } = require("express");
const router = Router();
const Controllers = require("../controllers/indexController");
const { route } = require("./UserRoutes");

router.post("/new-task", Controllers.TaskController.NewTask);
router.get("/get-task/:taskId", Controllers.TaskController.GetTaskById);
router.get("/all-tasks/:userId", Controllers.TaskController.getAllTasks);
router.delete("/delete-task/:taskId", Controllers.TaskController.DeleteTask);
module.exports = router;
