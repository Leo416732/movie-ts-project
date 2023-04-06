import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieType } from "@/util/MovieType";

export default function Movie(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/movie?id=${id}`)
      .then((res) => setMovie(res.data[0]));
  }, [id]);

  if (movie) {
    return (
      <>
        <div className="flex m-5 p-5 gap-9 w-full flex-wrap">
          <picture className="ms-12 min-w-[300px] max-w-[400px] w-[30%]">
            <img
              className="w-full max-h-[550px] min-h-[300px]"
              src={movie.poster}
              alt=""
            />
          </picture>
          <div className="ms-5 w-[50%] min-w-[500px]">
            {" "}
            <h1 className="text-3xl ms-5 font-bold">{movie.title}</h1>
            <p className="ms-5 mt-5 text-slate-500">{movie.fullplot}</p>
            <h5 className="ms-5 mt-5 text-slate-800">Movie info</h5>
            <div>
              <p className="ms-5 mt-5 text-slate-600">
                Genre: {movie.genres.join(",  ")}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Rating: {movie.tomatoes.viewer.rating}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Language: {movie.languages?.join(",  ")}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Directors: {movie.directors?.join(",  ")}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Writers: {movie.writers?.join(",  ")}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Release Date: {movie.year}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Run Time: {movie.runtime}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Cast: {movie.cast.join(",  ")}
              </p>
              <p className="text-slate-600 ms-5 mt-2">
                Wins: {movie.awards.wins}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="border border-blue-300 shadow rounded-md flex w-full m-5 p-5">
        <div className="animate-pulse flex space-x-4 ms-5 w-[30%]">
          {" "}
          <div className="bg-slate-700 w-full h-[550px] rounded-md" />
        </div>
        <div className="ms-5 w-[50%]">
          <div className="flex-1 space-y-6 py-1 ">
            <div className="h-[40px] bg-slate-700 rounded text-3xl ms-5 font-bold" />
            <div className="space-y-3">
              <div className="ms-5">
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
                <div className="h-[20px] bg-slate-700 rounded mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
