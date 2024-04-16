require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { default: mongoose } = require("mongoose");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.DB, dbOptions)
.then (() => console.log('DB Connected'))
.catch (err => console.log(err))

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));