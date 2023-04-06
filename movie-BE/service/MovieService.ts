import MovieModel from "../model/MovieModel";

export async function getMovies(limit: number) {
  return await MovieModel.find({ poster: { $exists: true } })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}

export async function getTvShow(limit: number) {
  return await MovieModel.find({
    $and: [{ genres: { $in: ["Comedy"] } }, { poster: { $exists: true } }],
  })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}

export async function getMoviesNew(limit: number) {
  return await MovieModel.find({ poster: { $exists: true } })
    .sort({ year: -1 })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}

export async function getMoviesRating(limit: number) {
  return await MovieModel.find({ poster: { $exists: true } })
    .sort({ "tomatoes.viewer.rating": -1 })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}

export async function getMovie(id: string) {
  return await MovieModel.find({ _id: id });
}

export async function getMovieSearch(name: string) {
  return await MovieModel.find({
    $and: [{ title: { $regex: name } }, { poster: { $exists: true } }],
  })
    .select({ poster: 1, _id: 1, title: 1 })
    .limit(10);
}
