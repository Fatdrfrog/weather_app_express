import express, { Express } from "express";

const cors = require("cors");
const dotenv = require("dotenv");

const router = require("./routers/weather-router");

dotenv.config();
const app: Express = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT);
