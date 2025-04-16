const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const configRoutes = require("./routes/config.routes");


const app = express();
const connectDB = require("./db/db");
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/config', configRoutes);

app.get('/', (req, res) => {
    console.log("Hello World");
})

module.exports = app;