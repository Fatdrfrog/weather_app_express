import axios from "axios";
import express, { Request, Response } from "express";

import {
  RequestTypeType,
  CityType,
  GetWeatherInfoAxiosInterface,
} from "../definitions/weatherDef";

const getWeatherInfo = async (type?: RequestTypeType, city?: CityType) => {
  const baseurl = process.env.BASE_URL;
  const apikey = process.env.WEATHER_API_KEY;

  let currentType = "current";

  if (type) {
    currentType = type;
  }

  let currentCity = "almaty";

  if (city) {
    currentCity = city;
  }

  return await axios
    .get<GetWeatherInfoAxiosInterface[]>(
      `${baseurl}/${currentType}.json?key=${apikey}&q=${currentCity}`
    )
    .then((res) => res.data)
    .then((res) => {
      console.log("axios result");
      console.log(res);
      return res;
    });
};

export const baseController = async () => {
  const weatherResult = await getWeatherInfo();

  return weatherResult;
};

export const typeController = async (req: Request) => {
  const type = req.params.type as RequestTypeType;
  const weatherResult = await getWeatherInfo(type);

  return weatherResult;
};

export const typeCityController = async (req: Request) => {
  const type = req.params.type as RequestTypeType;
  const city = req.params.city as CityType;
  const weatherResult = await getWeatherInfo(type, city);

  return weatherResult;
};
