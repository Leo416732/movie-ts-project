import MovieModel from "../model/MovieModel";

export async function getMovies(limit: number) {
  return await MovieModel.find({ poster: { $exists: true } })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .sort({ year: -1 })
    .limit(5);
}

export async function getMovie(id: string) {
  return await MovieModel.find({ _id: id });
}
