const { Router } = require("express");
const router = Router();
const UserRoutes = require("./UserRoutes");
const TaskRoutes = require("./TaskRoutes");
// import jwt
const { verifyToken } = require("../configuration/jwt");

router.get("/", (req, res) => {
  return res.json({
    message: "Site Working",
  });
});
router.use("/user", UserRoutes);
router.use("/task", verifyToken,TaskRoutes);
module.exports = router;
