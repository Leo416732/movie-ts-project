import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Empty from "./sub/Empty";
import { MovieType } from "@/util/MovieType";
import Card from "./sub/Card";

export default function Movies(props: {
  getmovies: MovieType[];
  newestmovies: MovieType[];
  ratemovies: MovieType[];
}): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(props.getmovies);
  const [activeBtn, setActiveBtn] = useState<string | null>("all");

  function moviesHandle(btn: string | null | undefined) {
    btn == "newest" &&
      axios
        .get(
          `http://localhost:5005/movies/newest?limit=${
            movies && movies.length + 10
          }`
        )
        .then((res) => setMovies(movies && [...movies, ...res.data]));
    btn == "rating" &&
      axios
        .get(
          `http://localhost:5005/movies/rating?limit=${
            movies && movies.length + 10
          }`
        )
        .then((res) => setMovies(movies && [...movies, ...res.data]));
    btn == "all" &&
      axios
        .get(
          `http://localhost:5005/movies?limit=${movies && movies.length + 10}`
        )
        .then((res) => setMovies(movies && [...movies, ...res.data]));
  }

  function moviesNewestHandle() {
    setActiveBtn("newest");
    setMovies(props.newestmovies);
  }
  function moviesRatingHandle() {
    setActiveBtn("rating");
    setMovies(props.ratemovies);
  }
  function moviesAllHandle() {
    setActiveBtn("all");
    setMovies(props.getmovies);
  }
  return (
    <main className="mt-5 container mx-auto">
      <div className="flex gap-[40px] my-5 ">
        <button
          onClick={moviesAllHandle}
          className={
            activeBtn == "all"
              ? "px-[35px] rounded-full h-[40px]  bg-gray-200"
              : "px-[35px] rounded-full h-[40px]  border-2 border-black-400"
          }
        >
          All
        </button>
        <button
          onClick={moviesNewestHandle}
          className={
            activeBtn == "newest"
              ? "px-5 rounded-full bg-gray-200"
              : "px-5 rounded-full border-2 border-black-400"
          }
        >
          Newest
        </button>
        <button
          onClick={moviesRatingHandle}
          className={
            activeBtn == "rating"
              ? "px-5 rounded-full border bg-gray-200"
              : "px-5 rounded-full border-2 border-black-400"
          }
        >
          Most Rating
        </button>
      </div>
      <div>
        <div className="flex justify-between w-full flex-wrap  ">
          {movies?.map((movie: MovieType, index: number) => (
            <Card movie={movie} index={index} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-5">
          <button
            onClick={() => moviesHandle(activeBtn)}
            className="rounded-full mb-5 bg-gray-300 w-28 h-10 "
          >
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
