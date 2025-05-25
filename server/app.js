const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);

mongoose.connect(process.env.MONGO_URI, () => console.log("DB connected"));
app.listen(process.env.PORT || 5000, () => console.log("Server running"));
