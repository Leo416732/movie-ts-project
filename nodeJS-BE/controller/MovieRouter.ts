import express, { Request, Response } from "express";
import "../config/mongoose-config";
import {
  getMovie,
  getMovies,
  getMoviesNew,
  getMoviesRating,
} from "../service/MovieService";

const movie_router = express.Router();

movie_router.get(
  "/movies",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getMovies(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

movie_router.get(
  "/movies/newest",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getMoviesNew(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

movie_router.get(
  "/movies/rating",
  async (req: Request, res: Response): Promise<void> => {
    try {
      let limit: number = Number(req.query.limit);
      const result: any = await getMoviesRating(limit);
      res.status(200).send(result);
      return;
    } catch (err) {
      console.log("err");
    }
  }
);

movie_router.get(
  "/movie",
  async (req: Request, res: Response): Promise<void> => {
    const id: string | any = req.query.id;
    try {
      const result = await getMovie(id);
      // console.log(result?.title);

      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  }
);

export default movie_router;
