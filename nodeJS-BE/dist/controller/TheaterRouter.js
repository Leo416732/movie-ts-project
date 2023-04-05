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
const TheaterModel_1 = __importDefault(require("../model/TheaterModel"));
const express_1 = __importDefault(require("express"));
require("../config/mongoose-config");
const theaterRouter = express_1.default.Router();
theaterRouter.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let limit = Number(req.query.limit);
        const result = yield TheaterModel_1.default.find({})
            .select({ poster: 1, _id: 1, title: 1 })
            .skip(limit - 5)
            .sort({ year: -1 })
            .limit(5);
        res.status(200).send(result);
        return;
    }
    catch (err) {
        console.log("err");
    }
}));
theaterRouter.get("/movie", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    try {
        const result = yield TheaterModel_1.default.find({ _id: id });
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = theaterRouter;
