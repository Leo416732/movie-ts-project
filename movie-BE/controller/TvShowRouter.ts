import express, { Request, Response } from "express";
import {
  getTvShow,
  getTvShowNew,
  getTvShowRating,
} from "../service/TvShowService";

const tv_router = express.Router();

tv_router.get(
  "/tv-show",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getTvShow(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

tv_router.get(
  "/tv-show/newest",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getTvShowNew(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

tv_router.get(
  "/tv-show/rating",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getTvShowRating(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

export default tv_router;
