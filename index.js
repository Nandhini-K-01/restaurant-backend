const express = require("express");
const mongo = require("./connect");
const dotenv = require("dotenv");
const cors = require("cors");
const registerRouter = require("./routers/registerRouter");
const restaurantRouter = require("./routers/restaurantRouter");
const auth = require("./models/authModule");

dotenv.config();
mongo.connect();
const app = express();
app.use(cors())
app.use(express.json());
app.use("/register", registerRouter);

app.use("/",auth.authenticateUser);
app.use("/restaurant",restaurantRouter);


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("App is runing");
  });
