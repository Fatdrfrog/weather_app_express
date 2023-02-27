import express, { Request, Response } from "express";
const router = express.Router();

import {
  baseController,
  typeController,
  typeCityController,
} from "../controllers/weather-controllers";

router.get("/", async (req: Request, res: Response) => {
  const weatherResult = await baseController();

  res.json({ status: "200", data: weatherResult });
});

router.get("/:type", async (req: Request, res: Response) => {
  const weatherResult = await typeController(req);

  res.json({ status: "200", data: weatherResult });
});

router.get("/:type/:city", async (req: Request, res: Response) => {
  const weatherResult = await typeCityController(req);

  res.json({ status: "200", data: weatherResult });
});

module.exports = router;
