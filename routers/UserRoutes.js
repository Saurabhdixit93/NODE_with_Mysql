const { Router } = require("express");
const router = Router();
const Controllers = require("../controllers/indexController");

router.post("/sign_up", Controllers.UserController.CreateAccount);
router.post("/login", Controllers.UserController.LoginUser);
module.exports = router;
