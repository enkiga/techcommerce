const { signUpSchema } = require("../middlewares/validator");

const User = require("../models/userModel");
const { doHash } = require("../utils/hashing");

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const { error, value } = signUpSchema.validate({ email, password, name });

    // Error handling
    if (error) {
      return res.status(401).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "User Already Exist",
      });
    }

    // Password handling
    const hashedPassword = await doHash(password, 12);

    // Store new user
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    const result = await newUser.save();
    result.password = undefined; // So as to not to send the hashed password

    res.status(201).json({
      success: true,
      message: `Your account for ${result.email} has been created successfully`,
      result,
    });
  } catch (error) {
    console.log("Authentication error", error);
  }
};
