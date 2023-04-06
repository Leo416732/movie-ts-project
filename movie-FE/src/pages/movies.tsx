import Movies from "@/components/Movies";
import Dropdown from "@/components/sub/Dropdown";
import { MovieType } from "@/util/MovieType";
import axios from "axios";
import { useRouter } from "next/router";

export default function Movie(props: {
  movies: MovieType[];
  newestmovies: MovieType[];
  ratemovies: MovieType[];
}): JSX.Element {
  const { movies, newestmovies, ratemovies } = props;

  return (
    <>
      <div className="flex my-7 container mx-auto">
        <h1 className="text-3xl">BEST IN THEATERS</h1>
        <Dropdown current={"IN THEATERS"} />
      </div>
      <Movies
        getmovies={movies}
        newestmovies={newestmovies}
        ratemovies={ratemovies}
      />
    </>
  );
}
export async function getStaticProps() {
  const res = await axios.get("http://localhost:5005/movies?limit=10");
  const movies = res.data;
  const resNew = await axios.get(
    "http://localhost:5005/movies/newest?limit=10"
  );
  const newestmovies = resNew.data;
  const resRate = await axios.get(
    "http://localhost:5005/movies/rating?limit=10"
  );
  const ratemovies = resRate.data;
  return {
    props: {
      movies: movies,
      newestmovies: newestmovies,
      ratemovies: ratemovies,
    },
  };
}
