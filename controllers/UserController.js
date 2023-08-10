const bcrypt = require("bcrypt");
const Models = require("../models/indexModels");
const jwt = require("jsonwebtoken");

module.exports.CreateAccount = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await Models.UserModel.findOne({ where: { email } });
    if (user) {
      return res.json({
        message: "User Already Exist",
      });
    }
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Models.UserModel.create({
      // Create the new user
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};

module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Models.UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if the provided password matches the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    // generate token for jwt aauth
    const token = await jwt.sign({ id: user._id }, process.env.SECRETE_KEY, {
      expiresIn: "1h",
    });

    return res.json({ message: "Login successful!", token });
  } catch (error) {
    return res.json({
      message: `${error.message}`,
    });
  }
};
