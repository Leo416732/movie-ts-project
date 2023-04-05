import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
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
