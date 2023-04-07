import MovieModel from "../model/MovieModel";

export async function getTvShow(limit: number) {
  return await MovieModel.find({
    $and: [{ genres: { $in: ["Comedy"] } }, { poster: { $exists: true } }],
  })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}
export async function getTvShowNew(limit: number) {
  return await MovieModel.find({
    $and: [{ genres: { $in: ["Comedy"] } }, { poster: { $exists: true } }],
  })
    .sort({ year: -1 })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}

export async function getTvShowRating(limit: number) {
  return await MovieModel.find({
    $and: [{ genres: { $in: ["Comedy"] } }, { poster: { $exists: true } }],
  })
    .sort({ "tomatoes.viewer.rating": -1 })
    .select({ poster: 1, _id: 1, title: 1 })
    .skip(limit - 5)
    .limit(10);
}
