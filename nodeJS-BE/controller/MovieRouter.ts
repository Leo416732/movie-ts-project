import Movie from "../model/MovieModel";
import express, { Request, Response } from "express";
import "../config/mongoose-config";

const movie_router = express.Router();

movie_router.get("/movies", async (req: Request, res: Response) => {
  try {
    let limit: number = Number(req.query.limit);
    const result = await Movie.find({})
      .select({ poster: 1, _id: 1, title: 1 })
      .skip(limit - 5)
      .sort({ year: -1 })
      .limit(5);
    res.status(200).send(result);
    return;
  } catch (err) {
    console.log("err");
  }
});

movie_router.get("/movie", async (req: Request, res: Response) => {
  const id = req.query.id;

  try {
    const result = await Movie.find({ _id: id });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});

export default movie_router;
