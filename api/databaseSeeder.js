const router = require("express").Router();
const User = require("./models/User");
const users = require("./data/Users");
const Product = require("./models/Product");
const products = require("./data/Products");
const AsyncHandler = require("express-async-handler");

router.post(
  "/users",
  AsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const userSeeder = await User.insertMany(users);
    res.status(201).json({ message: "Users seeded successfully", userSeeder });
  })
);

router.post(
  "/products", // <== Ensure it's a POST request
  AsyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const productSeeder = await Product.insertMany(products);
    res.status(201).json({ message: "Products seeded successfully", productSeeder });
  })
);

module.exports = router;
