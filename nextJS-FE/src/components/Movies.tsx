import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Empty from "./Empty";
import { MovieType } from "@/util/MovieType";

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
  if (movies) {
    return (
      <main className="mt-5 ">
        <div className="w-full ms-[90px] mb-[20px] flex gap-[50px]">
          <button
            onClick={moviesAllHandle}
            className={
              activeBtn == "all"
                ? "px-5 rounded-md border border-red-400 bg-red-400"
                : "px-5 rounded-md border border-red-400"
            }
          >
            All
          </button>
          <button
            onClick={moviesNewestHandle}
            className={
              activeBtn == "newest"
                ? "px-5 rounded-md border border-red-400 bg-red-400"
                : "px-5 rounded-md border border-red-400"
            }
          >
            Newest
          </button>
          <button
            onClick={moviesRatingHandle}
            className={
              activeBtn == "rating"
                ? "px-5 rounded-md border border-red-400 bg-red-400"
                : "px-5 rounded-md border border-red-400"
            }
          >
            Most Rating
          </button>
        </div>
        <div>
          <div className="flex justify-around mx-20 gap-5 flex-wrap">
            {movies.map((movie: MovieType, index: number) => (
              <Link
                href={`movie/${movie._id}`}
                className="bg-red-400 w-64 hover:bg-slate-500 p-3 rounded-md"
                key={index}
              >
                {" "}
                {movie.poster ? (
                  <picture>
                    <img className="" src={movie.poster} alt="" />
                  </picture>
                ) : (
                  <Empty />
                )}
                <p className="">{movie.title}</p>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center mt-5">
            <button
              onClick={() => moviesHandle(activeBtn)}
              className="rounded-full bg-red-400 w-28 h-10 "
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <div className="flex justify-around mx-20 gap-5 flex-wrap">
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
          <div className="border border-blue-300 shadow rounded-md mt-5  w-64  p-3 rounded-md">
            <div className="animate-pulse flex space-x-4 bg-slate-700 ">
              {" "}
              <div className="bg-slate-700 rounded-md h-[300px]" />
            </div>
            <div className=" w-[50%]">
              <div className="h-[40px] w-[200px] bg-slate-700 rounded mt-2" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <div className="rounded-full bg-slate-700 w-28 h-10 " />
        </div>
      </div>
    );
  }
}
