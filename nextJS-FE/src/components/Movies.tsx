import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Empty from "./Empty";
import { MovieType } from "@/util/MovieType";

export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/movies?limit=5`)
      .then((res) => setMovies(res.data));
  }, []);

  function moviesHandle() {
    axios
      .get(`http://localhost:5005/movies?limit=${movies && movies.length + 5}`)
      .then((res) => setMovies(movies && [...movies, ...res.data]));
  }

  if (movies) {
    return (
      <main className="mt-5">
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
              onClick={moviesHandle}
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
        </div>
        <div className="w-full flex justify-center mt-5">
          <div className="rounded-full bg-slate-700 w-28 h-10 " />
        </div>
      </div>
    );
  }
}
