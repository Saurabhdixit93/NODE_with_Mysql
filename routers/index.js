const { Router } = require("express");
const router = Router();
const UserRoutes = require("./UserRoutes");
const TaskRoutes = require("./TaskRoutes");

router.get("/", (req, res) => {
  return res.json({
    message: "Site Working",
  });
});
router.use("/user", UserRoutes);
router.use("/task", TaskRoutes);
module.exports = router;
