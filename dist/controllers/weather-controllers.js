"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeCityController = exports.typeController = exports.baseController = void 0;
const axios_1 = __importDefault(require("axios"));
const getWeatherInfo = (type, city) => __awaiter(void 0, void 0, void 0, function* () {
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
    return yield axios_1.default
        .get(`${baseurl}/${currentType}.json?key=${apikey}&q=${currentCity}`)
        .then((res) => res.data)
        .then((res) => {
        console.log("axios result");
        console.log(res);
        return res;
    });
});
const baseController = () => __awaiter(void 0, void 0, void 0, function* () {
    const weatherResult = yield getWeatherInfo();
    return weatherResult;
});
exports.baseController = baseController;
const typeController = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    const weatherResult = yield getWeatherInfo(type);
    return weatherResult;
});
exports.typeController = typeController;
const typeCityController = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.params.type;
    const city = req.params.city;
    const weatherResult = yield getWeatherInfo(type, city);
    return weatherResult;
});
exports.typeCityController = typeCityController;
