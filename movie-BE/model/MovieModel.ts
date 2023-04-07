import mongoose, { Schema } from "mongoose";

type Movietype = {
  plot: string;
  genres: any;
  title: { type: string };
};

const movieSchema = new Schema<Movietype>(
  {
    plot: String,
    genres: Array,
    title: String,
  },
  {
    collection: "movies",
  }
);

const MovieModel = mongoose.model("Movies", movieSchema, "movies");

export default MovieModel;
