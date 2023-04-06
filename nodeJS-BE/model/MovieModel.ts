import mongoose, { Schema } from "mongoose";

type Movietype = {
  _id: null;
  plot: string;
  genres: any;
  title: string;
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
