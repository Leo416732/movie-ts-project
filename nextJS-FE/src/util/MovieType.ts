type awardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type imdbType = {
  rating: number;
  votes: number;
  id: number;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type tomatoesType = { viewer: viewerType; lastUpdated: Date };

export interface MovieType {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages?: string[];
  released: Date;
  directors?: string[];
  rated?: string;
  awards: awardsType;
  lastupdated: string;
  year: number;
  imdb: imdbType;
  countries: string[];
  type: string;
  tomatoes: tomatoesType;
  writers?: string[];
}
